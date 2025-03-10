import styles from "./styles.module.css";

export interface SimpleListItem {
  [key: string]: string;
}

interface IProps {
  groupLabel: string;
  items: SimpleListItem[];
}

const ItemList = ({ groupLabel, items }: IProps): JSX.Element => {
  if (!items || !items[0]) return <></>
  const values = items.map(item => Object.values(item)[0])

  return (<div className={styles.wrapper}>
    <h3>{groupLabel}</h3>
    <ul>
      {values.map((val, i) => <li key={`list_list-title_${i}`}>{val}</li>)}
    </ul>
  </div>)
}

export default ItemList
