import { Simplify } from "@/prismicio-types";
import { FilledImageFieldImage, KeyTextField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import styles from "./styles.module.css";

interface IProps {
  thumb: Simplify<FilledImageFieldImage & Record<never, FilledImageFieldImage>>;
  title: KeyTextField;
  year: KeyTextField;
}

const ProjectTitle = ({ thumb, title, year }: IProps): JSX.Element => {
  return (<div className={styles["title-container"]}>
    <PrismicNextImage
      field={thumb}
      className={styles.thumb}
    />
    <div className={styles["title-inner"]}>
      <h1>{title}</h1>
      <h3>{year}</h3>
    </div>
  </div>)
}

export default ProjectTitle