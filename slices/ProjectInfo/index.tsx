import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import styles from "./page.module.css";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `ProjectInfo`.
 */
export type ProjectInfoProps = SliceComponentProps<Content.ProjectInfoSlice>;

/**
 * Component for "ProjectInfo" Slices.
 */
const ProjectInfo = ({ slice }: ProjectInfoProps): JSX.Element => {
  return (
    <section
      className={styles['project-section']}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={styles.columns}>
        <div className={styles['column-left']}>
          {isFilled.image(slice.primary.square_project_thumbnail) && (
            <PrismicNextImage
              field={slice.primary.square_project_thumbnail}
              className={styles.thumb}
            />
          )}
          {slice.primary.project_title && (
            <h1>
              {slice.primary.project_title}
            </h1>
          )}
          {isFilled.richText(slice.primary.intro_text) && (
            <PrismicRichText field={slice.primary.intro_text} />
          )}
        </div>
        <div className={styles['column-right']}>
          {isFilled.image(slice.primary.banner) && (
            <PrismicNextImage
              field={slice.primary.banner}
            // className="es-fullpage-hero__image"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectInfo;
