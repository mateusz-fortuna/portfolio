export type Section = {
  title: string;
  subtitle: string;
  description: string;
};
export type ImageData = {
  src: string;
  alt: string;
};
export type Content = {
  section: Section;
  image: ImageData;
};
type ProjectData = {
  [key in string]: Content;
};

const src = "/images/intro/sample.jpg";
const projectThumbnailSrc = "/images/caseStudies/foodbot/projectThumbnail.jpg";
const alt = "";
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
    },
  } as Content,
  projects: {
    foodbot: {
      section: {
        title: "FoodBot",
        subtitle,
        description,
      },
      image: { src: projectThumbnailSrc, alt },
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
      },
    },
  } as ProjectData,
  contact: {
    description,
    email: "mat.fortuna@wp.pl",
    linkedin: "linkedin.com/mateusz-fortuna",
    github: "github.com/mateusz-fortuna",
  },
};
