import {
  CaseStudyData,
  Contact,
  Content,
  ImageData,
  ProjectData,
  Size,
} from "./contentTypes";

const projectThumbnailSrc = "/images/caseStudies/foodbot/projectThumbnail.jpg";
const verticalThumbnailSrc = "/images/caseStudies/foodbot/mobile/1.jpg";
const src = "/images/intro/sample.jpg";
const alt = "";
const aspectRatio: Size = {
  width: 16,
  height: 9,
};
const sampleCaseStudyImageData: ImageData = {
  src: projectThumbnailSrc,
  alt,
  aspectRatio,
};
const verticalCaseStudyImageData: ImageData = {
  src: verticalThumbnailSrc,
  alt,
  aspectRatio: {
    width: 9,
    height: 16,
  },
};
const subtitle = "Hi, let me show you some projects!";
const description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export const content = {
  home: {
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
  },
  casestudy: {
    foodbot: {
      title: "Foodbot",
      subtitle,
      description,
      screenshots: {
        desktop: [
          sampleCaseStudyImageData,
          sampleCaseStudyImageData,
          sampleCaseStudyImageData,
          sampleCaseStudyImageData,
        ],
        mobile: [
          verticalCaseStudyImageData,
          verticalCaseStudyImageData,
          verticalCaseStudyImageData,
          verticalCaseStudyImageData,
        ],
      },
    } as CaseStudyData,
    second: {
      title: "The second",
      subtitle,
      description,
      screenshots: {
        desktop: [
          sampleCaseStudyImageData,
          sampleCaseStudyImageData,
          sampleCaseStudyImageData,
          sampleCaseStudyImageData,
        ],
        mobile: [
          verticalCaseStudyImageData,
          verticalCaseStudyImageData,
          verticalCaseStudyImageData,
          verticalCaseStudyImageData,
        ],
      },
    } as CaseStudyData,
    portfolio: {
      title: "Portfolio",
      subtitle,
      description,
      screenshots: {
        desktop: [
          sampleCaseStudyImageData,
          sampleCaseStudyImageData,
          sampleCaseStudyImageData,
          sampleCaseStudyImageData,
        ],
        mobile: [
          verticalCaseStudyImageData,
          verticalCaseStudyImageData,
          verticalCaseStudyImageData,
          verticalCaseStudyImageData,
        ],
      },
    } as CaseStudyData,
  },
};
