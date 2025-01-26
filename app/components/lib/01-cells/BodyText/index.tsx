import { RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import styles from "./styles.module.css";

interface IProps {
  richText: RichTextField | null | undefined
}

const BodyText = ({ richText }: IProps): JSX.Element => {
  return (<div className={styles.wrapper}>
    <PrismicRichText field={richText} />
  </div>)
}

export default BodyText
