import { KeyTextField } from "@prismicio/client";
import styles from "../ItemList/styles.module.css";

export interface LinkListItem {
  cta_label: KeyTextField;
  cta_url: {
    link_type: string;
    url?: string;
  }
}

interface IProps {
  groupLabel: string;
  items: LinkListItem[];
}

const LinkList = ({ groupLabel, items }: IProps): JSX.Element => {
  if (!items || items.length === 0) return <></>
  return (<div className={styles.wrapper}>
    <h3>{groupLabel}</h3>
    <ul>
      {items.map((item, i) =>
        <a key={`${item.cta_label}_${i}`} href={item.cta_url.url} target="_blank">
          <li key={`list_list-title_${i}`}>
            {item.cta_label}
          </li>
        </a>)}
    </ul>
  </div>)
}

export default LinkList
