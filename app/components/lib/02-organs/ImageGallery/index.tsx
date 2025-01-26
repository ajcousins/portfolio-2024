'use-client'
import { Simplify } from "@/prismicio-types";
import { Content, GroupField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import styles from "./styles.module.css";

interface IProps {
  images: GroupField<Simplify<Content.ProjectInfoSliceDefaultPrimaryScreenshotsItem>>
}

interface StyleMap {
  readonly [key: string]: string;
}

const classConcat = (styles: StyleMap, classes: string[]): string =>
  classes.map((c) => styles[c]).join(" ")

const getSpan = (width: number, height: number): string => {
  const ratio = width / height;
  if (ratio < 0.75) return "1"
  if (ratio < 1.5) return "2"
  if (ratio < 2.5) return "3"
  if (ratio < 3.5) return "4"
  return "5"
}

const ImageGallery = ({ images }: IProps): JSX.Element =>
(
  <div className={styles["wrapper"]}>
    {images.map((img) => {
      const { screenshot: { dimensions } } = img;
      const width = dimensions?.width ?? 0;
      const height = dimensions?.height ?? 0;

      return (
        <PrismicNextImage
          key={img.screenshot.id}
          field={img.screenshot}
          className={classConcat(
            styles, ["grid-item", `grid-span-${getSpan(width, height)}`]
          )}
        />
      )
    })}
  </div>
)

export default ImageGallery