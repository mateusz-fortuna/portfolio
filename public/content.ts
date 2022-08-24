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
type ProjectData = {
  // eslint-disable-next-line no-unused-vars
  [key in string]: Content;
};
type Link = {
  href: string;
  text: string;
};
type Contact = {
  description: string;
  email: Link;
  linkedin: Link;
  github: Link;
};

const projectThumbnailSrc = "/images/caseStudies/foodbot/projectThumbnail.jpg";
const src = "/images/intro/sample.jpg";
const alt = "";
const aspectRatio: Size = {
  width: 16,
  height: 9,
};
const subtitle = "Hi, let me show you some projects!";
const description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export const content = {
  intro: {
    section: {
      title: "Mateusz Fortuna",
      subtitle,
      description,
    },
    image: {
      src,
      alt,
      aspectRatio: {
        width: 1,
        height: 1,
      },
    },
  } as Content,
  projects: {
    foodbot: {
      section: {
        title: "FoodBot",
        subtitle,
        description,
      },
      image: { src: projectThumbnailSrc, alt, aspectRatio },
    },
    second: {
      section: {
        title: "The second",
        subtitle,
        description,
      },
      image: {
        src: projectThumbnailSrc,
        alt,
        aspectRatio,
      },
    },
    portfolio: {
      section: {
        title: "Portfolio",
        subtitle,
        description,
      },
      image: {
        src: projectThumbnailSrc,
        alt,
        aspectRatio,
      },
    },
  } as ProjectData,
  contact: {
    description,
    email: {
      href: "mailto:mat.fortuna@wp.pl",
      text: "mat.fortuna@wp.pl",
    },
    linkedin: {
      href: "https://www.linkedin.com/mateusz-fortuna",
      text: "linkedin.com/mateusz-fortuna",
    },
    github: {
      href: "https://www.github.com/mateusz-fortuna",
      text: "github.com/mateusz-fortuna",
    },
  } as Contact,
};
