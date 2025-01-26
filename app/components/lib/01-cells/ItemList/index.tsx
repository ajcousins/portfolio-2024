import { toTitleCase } from "@/app/helpers/text";
import styles from "./styles.module.css";

export interface SimpleListItem {
  [key: string]: string;
}

interface IProps {
  items: SimpleListItem[]
}

const ItemList = ({ items }: IProps): JSX.Element => {
  if (!items || !items[0]) return <></>
  const listTitle = Object.keys(items[0])[0]
  const values = items.map(item => Object.values(item)[0])

  return (<div className={styles.wrapper}>
    <h3>{toTitleCase(listTitle)}</h3>
    <ul>
      {values.map((val, i) => <li key={`list_list-title_${i}`}>{val}</li>)}
    </ul>
  </div>)
}

export default ItemList
