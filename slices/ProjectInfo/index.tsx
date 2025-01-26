import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { ImageGallery, ProjectTitle } from "@/app/components/lib/02-organs";
import { BodyText } from "@/app/components/lib/01-cells";

export type ProjectInfoProps = SliceComponentProps<Content.ProjectInfoSlice>;

const ProjectInfo = ({ slice }: ProjectInfoProps): JSX.Element => {
  return (
    <div data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <section>
        {isFilled.image(slice.primary.square_project_thumbnail) && (
          <ProjectTitle
            thumb={slice.primary.square_project_thumbnail}
            title={slice.primary.project_title}
            year={slice.primary.year}
          />
        )}
      </section>
      <section>
        <ImageGallery
          images={slice.primary.screenshots}
        />
      </section>
      <section>
        {isFilled.richText(slice.primary.intro_text) && (
          <BodyText richText={slice.primary.intro_text} />
        )}
      </section>
    </div>
  );
};

export default ProjectInfo;
