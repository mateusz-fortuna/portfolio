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
const alt = "";
const aspectRatio: Size = {
  width: 16,
  height: 9,
};
const mobileAspectRatio: Size = {
  width: 9,
  height: 16,
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
        src: "/images/intro/me.jpg",
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
        image: {
          src: "/images/caseStudies/foodbot/desktop_foodbot.png",
          alt,
          aspectRatio,
        },
      },
      systemObslugiRekolekcji: {
        section: {
          title: "System Obsługi Rekolekcji\n(in cooperation) [in progress]",
          subtitle,
          description,
        },
        image: {
          src: projectThumbnailSrc,
          alt,
          aspectRatio,
        },
      },
      randomRouteGenerator: {
        section: {
          title: "Random Route Generator\nfor jakdojade.pl [in progress]",
          subtitle: "Chrome extension",
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
          {
            src: "/images/caseStudies/foodbot/desktop_foodbot.png",
            alt: "",
            aspectRatio,
          },
          {
            src: "/images/caseStudies/foodbot/desktop/desktop_contact.png",
            alt: "",
            aspectRatio,
          },
          {
            src: "/images/caseStudies/foodbot/desktop/desktop_features.png",
            alt: "",
            aspectRatio,
          },
          {
            src: "/images/caseStudies/foodbot/desktop/desktop_features_details.png",
            alt: "",
            aspectRatio,
          },
          {
            src: "/images/caseStudies/foodbot/desktop/desktop_transition.png",
            alt: "",
            aspectRatio,
          },
        ],
        mobile: [
          {
            src: "/images/caseStudies/foodbot/mobile/mobile_contact.png",
            alt: "",
            aspectRatio: mobileAspectRatio,
          },
          {
            src: "/images/caseStudies/foodbot/mobile/mobile_features.png",
            alt: "",
            aspectRatio: mobileAspectRatio,
          },
          {
            src: "/images/caseStudies/foodbot/mobile/mobile_features_details.png",
            alt: "",
            aspectRatio: mobileAspectRatio,
          },
          {
            src: "/images/caseStudies/foodbot/mobile/mobile_gallery.png",
            alt: "",
            aspectRatio: mobileAspectRatio,
          },
          {
            src: "/images/caseStudies/foodbot/mobile/mobile_home.png",
            alt: "",
            aspectRatio: mobileAspectRatio,
          },
          {
            src: "/images/caseStudies/foodbot/mobile/mobile_menu.png",
            alt: "",
            aspectRatio: mobileAspectRatio,
          },
        ],
      },
      technologies: {
        names: ["typescript", "react", "redux", "nodejs", "sass"],
        tools: [
          "Axios",
          "React Hook Form",
          "React Transition Group",
          "Redux Persist",
          "Dotenv",
          "Lodash",
        ],
      },
    } as CaseStudyData,
    systemObslugiRekolekcji: {
      title: "System Obsługi Rekolekcji",
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
      technologies: {
        names: ["typescript", "react", "redux", "nodejs", "sass"],
        tools: [
          "Axios",
          "React Hook Form",
          "React Transition Group",
          "Redux Persist",
          "Dotenv",
          "Lodash",
        ],
      },
    } as CaseStudyData,
    randomRouteGenerator: {
      title: "Random Route Generator",
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
      technologies: {
        names: ["typescript", "react", "redux", "nodejs", "sass"],
        tools: [
          "Axios",
          "React Hook Form",
          "React Transition Group",
          "Redux Persist",
          "Dotenv",
          "Lodash",
        ],
      },
    } as CaseStudyData,
  },
};
