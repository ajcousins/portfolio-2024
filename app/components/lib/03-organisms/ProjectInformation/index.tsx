import { isFilled, RichTextField } from "@prismicio/client";
import styles from "./styles.module.css";
import ItemList, { SimpleListItem } from "../../01-cells/ItemList";
import LinkList, { LinkListItem } from "../../01-cells/LinkList";
import { BodyText } from "../../01-cells";

interface IProps {
  description: RichTextField;
  technologies: SimpleListItem[];
  links: LinkListItem[];
}

const ProjectInformation = ({ description, technologies, links }: IProps): JSX.Element => {
  return (<div className={styles.wrapper}>
    <div>
      {isFilled.richText(description) && (
        <BodyText richText={description} />
      )}
    </div>
    <div className={styles["links-section"]}>
      <ItemList groupLabel="Technologies" items={technologies as SimpleListItem[]} />
      <LinkList groupLabel="Links" items={links} />
    </div>
  </div>)
}

export default ProjectInformation
