import { Technology } from "../components/Technologies";

export type Section = {
  title: string;
  subtitle: string;
  description: string;
};
export type Size = {
  height: number;
  width: number;
};
export type ImageData = {
  src: string;
  alt: string;
  aspectRatio: Size;
};
export type Content = {
  section: Section;
  image: ImageData;
};
export type ProjectData = {
  // eslint-disable-next-line no-unused-vars
  [key in string]: Content;
};
export type Link = {
  href: string;
  text: string;
};
export type Contact = {
  description: string;
  email: Link;
  linkedin: Link;
  github: Link;
};
export type CaseStudyData = Section & {
  id: string;
  screenshots: {
    desktop: ImageData[];
    mobile: ImageData[];
  };
  technologies: {
    names: Technology[];
    tools: string[];
  };
};
