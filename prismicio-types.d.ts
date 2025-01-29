// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Landing → Projects*
 */
export interface LandingDocumentDataProjectsItem {
  /**
   * Project field in *Landing → Projects*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: landing.projects[].project
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  project: prismic.ContentRelationshipField<"project_page">;
}

type LandingDocumentDataSlicesSlice = never;

/**
 * Content for Landing documents
 */
interface LandingDocumentData {
  /**
   * Projects field in *Landing*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: landing.projects[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  projects: prismic.GroupField<Simplify<LandingDocumentDataProjectsItem>>;

  /**
   * Slice Zone field in *Landing*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: landing.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<LandingDocumentDataSlicesSlice> /**
   * Meta Title field in *Landing*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: landing.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Landing*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: landing.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Landing*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: landing.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Landing document from Prismic
 *
 * - **API ID**: `landing`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type LandingDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<LandingDocumentData>,
    "landing",
    Lang
  >;

type ProjectPageDocumentDataSlicesSlice = ProjectInfoSlice | HeroSlice;

/**
 * Content for Project Page documents
 */
interface ProjectPageDocumentData {
  /**
   * Slice Zone field in *Project Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: project_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProjectPageDocumentDataSlicesSlice> /**
   * Meta Title field in *Project Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: project_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Project Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: project_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Project Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Project Page document from Prismic
 *
 * - **API ID**: `project_page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProjectPageDocumentData>,
    "project_page",
    Lang
  >;

export type AllDocumentTypes = LandingDocument | ProjectPageDocument;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * eyebrowHeadline field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Eyebrow
   * - **API ID Path**: hero.default.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  eyebrowHeadline: prismic.KeyTextField;

  /**
   * title field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * callToActionLabel field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.callToActionLabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  callToActionLabel: prismic.KeyTextField;

  /**
   * callToActionLink field in *Hero → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.callToActionLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  callToActionLink: prismic.LinkField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Hero → Image Right → Primary*
 */
export interface HeroSliceImageRightPrimary {
  /**
   * eyebrowHeadline field in *Hero → Image Right → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Eyebrow
   * - **API ID Path**: hero.imageRight.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  eyebrowHeadline: prismic.KeyTextField;

  /**
   * title field in *Hero → Image Right → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.imageRight.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *Hero → Image Right → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.imageRight.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * image field in *Hero → Image Right → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.imageRight.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * callToActionLabel field in *Hero → Image Right → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.imageRight.primary.callToActionLabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  callToActionLabel: prismic.KeyTextField;

  /**
   * callToActionLink field in *Hero → Image Right → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.imageRight.primary.callToActionLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  callToActionLink: prismic.LinkField;
}

/**
 * Image Right variation for Hero Slice
 *
 * - **API ID**: `imageRight`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceImageRight = prismic.SharedSliceVariation<
  "imageRight",
  Simplify<HeroSliceImageRightPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault | HeroSliceImageRight;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Item in *ProjectInfo → Default → Primary → Screenshots*
 */
export interface ProjectInfoSliceDefaultPrimaryScreenshotsItem {
  /**
   * Screenshot field in *ProjectInfo → Default → Primary → Screenshots*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project_info.default.primary.screenshots[].screenshot
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  screenshot: prismic.ImageField<never>;
}

/**
 * Item in *ProjectInfo → Default → Primary → Links*
 */
export interface ProjectInfoSliceDefaultPrimaryLinksItem {
  /**
   * CTA Label field in *ProjectInfo → Default → Primary → Links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project_info.default.primary.links[].cta_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_label: prismic.KeyTextField;

  /**
   * CTA URL field in *ProjectInfo → Default → Primary → Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: project_info.default.primary.links[].cta_url
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_url: prismic.LinkField;
}

/**
 * Item in *ProjectInfo → Default → Primary → Technologies*
 */
export interface ProjectInfoSliceDefaultPrimaryTechnologiesItem {
  /**
   * Technology field in *ProjectInfo → Default → Primary → Technologies*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: project_info.default.primary.technologies[].technology
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  technology: prismic.SelectField<
    | "Javascript"
    | "Typescript"
    | "Node JS"
    | "Python"
    | "AWS"
    | "React JS"
    | "GraphQL"
    | "Redux"
    | "Express"
    | "Mongo DB"
    | "Sass"
    | "MaterialUI"
    | "Firebase"
    | "Three JS"
    | "Jest"
    | "Three JS"
    | "JWT"
    | "Pug Templates"
    | "Passport JS"
    | "Flask"
    | "SQLite"
    | "Go"
    | "Dynamo DB"
  >;
}

/**
 * Primary content in *ProjectInfo → Default → Primary*
 */
export interface ProjectInfoSliceDefaultPrimary {
  /**
   * Project Title field in *ProjectInfo → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project_info.default.primary.project_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  project_title: prismic.KeyTextField;

  /**
   * Year field in *ProjectInfo → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: 2020
   * - **API ID Path**: project_info.default.primary.year
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  year: prismic.KeyTextField;

  /**
   * Intro Text field in *ProjectInfo → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project_info.default.primary.intro_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  intro_text: prismic.RichTextField;

  /**
   * Square Project Thumbnail field in *ProjectInfo → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project_info.default.primary.square_project_thumbnail
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  square_project_thumbnail: prismic.ImageField<never>;

  /**
   * Banner field in *ProjectInfo → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project_info.default.primary.banner
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  banner: prismic.ImageField<never>;

  /**
   * Screenshots field in *ProjectInfo → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: project_info.default.primary.screenshots[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  screenshots: prismic.GroupField<
    Simplify<ProjectInfoSliceDefaultPrimaryScreenshotsItem>
  >;

  /**
   * Links field in *ProjectInfo → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: project_info.default.primary.links[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  links: prismic.GroupField<Simplify<ProjectInfoSliceDefaultPrimaryLinksItem>>;

  /**
   * Technologies field in *ProjectInfo → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: project_info.default.primary.technologies[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  technologies: prismic.GroupField<
    Simplify<ProjectInfoSliceDefaultPrimaryTechnologiesItem>
  >;
}

/**
 * Default variation for ProjectInfo Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectInfoSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProjectInfoSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ProjectInfo*
 */
type ProjectInfoSliceVariation = ProjectInfoSliceDefault;

/**
 * ProjectInfo Shared Slice
 *
 * - **API ID**: `project_info`
 * - **Description**: ProjectInfo
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectInfoSlice = prismic.SharedSlice<
  "project_info",
  ProjectInfoSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      LandingDocument,
      LandingDocumentData,
      LandingDocumentDataProjectsItem,
      LandingDocumentDataSlicesSlice,
      ProjectPageDocument,
      ProjectPageDocumentData,
      ProjectPageDocumentDataSlicesSlice,
      AllDocumentTypes,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceImageRightPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      HeroSliceImageRight,
      ProjectInfoSlice,
      ProjectInfoSliceDefaultPrimaryScreenshotsItem,
      ProjectInfoSliceDefaultPrimaryLinksItem,
      ProjectInfoSliceDefaultPrimaryTechnologiesItem,
      ProjectInfoSliceDefaultPrimary,
      ProjectInfoSliceVariation,
      ProjectInfoSliceDefault,
    };
  }
}
