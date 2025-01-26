import { Content,  isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import styles from "./page.module.css";
import { ImageGallery, ProjectTitle } from "@/app/components/lib/02-organs";

/**
 * Props for `ProjectInfo`.
 */
export type ProjectInfoProps = SliceComponentProps<Content.ProjectInfoSlice>;

/**
 * Component for "ProjectInfo" Slices.
 */
const ProjectInfo = ({ slice }: ProjectInfoProps): JSX.Element => {
  return (
    <div className={styles.page} data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <section>
        {isFilled.image(slice.primary.square_project_thumbnail) && (
          <ProjectTitle
            thumb={slice.primary.square_project_thumbnail}
            title={slice.primary.project_title}
            year={slice.primary.year}
          />
        )}
      </section>
      <ImageGallery 
        images={slice.primary.screenshots}
      />
      {/* <section className={styles['narrow-section']}>
        <div>
          {isFilled.image(slice.primary.square_project_thumbnail) && (
            <PrismicNextImage
              field={slice.primary.square_project_thumbnail}
              className={styles.thumb}
            />
          )}
          <div className={styles['headings-wrapper']}>
            {slice.primary.project_title && (
              <h1 className={styles['main-heading']}>
                {slice.primary.project_title}
              </h1>
            )}
            {isFilled.keyText(slice.primary.year) &&
              <h6 className={styles['sub-heading']}>{slice.primary.year}</h6>
            }
          </div>
        </div>
      </section> */}
      {/* <section className={styles['banner-wrapper']}>
        {isFilled.image(slice.primary.banner) && (
          <PrismicNextImage
            field={slice.primary.banner}
            className={styles['banner-image']}
          />
        )}
      </section> */}
      <section className={`${styles['narrow-section']} ${styles['grid']}`}>
        {isFilled.richText(slice.primary.intro_text) && (
          <PrismicRichText field={slice.primary.intro_text} />
        )}
      </section>
    </div>
  );
};

export default ProjectInfo;
