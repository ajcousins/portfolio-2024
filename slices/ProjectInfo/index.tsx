import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { ImageGallery, ProjectTitle } from "@/app/components/lib/02-organs";
import { BodyText, ItemList, LinkList } from "@/app/components/lib/01-cells";
import { SimpleListItem } from "@/app/components/lib/01-cells/ItemList";

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
      <section>
        {isFilled.group(slice.primary.technologies) &&
          <>
            <ItemList groupLabel="Technologies" items={slice.primary.technologies as SimpleListItem[]} />
            <LinkList groupLabel="Links" items={slice.primary.links} />
          </>
        }
      </section>
    </div>
  );
};

export default ProjectInfo;
