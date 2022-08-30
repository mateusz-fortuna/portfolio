import { ImageData } from "../../../public/contentTypes";
import AnimatedText from "../../AnimatedText";
import Gallery from "../../Gallery";

type Props = {
  screenshots: {
    mobile: ImageData[];
    desktop: ImageData[];
  };
  nth?: number;
};

const MobileView = ({ nth, screenshots }: Props) => (
  <>
    <AnimatedText nth={nth}>Desktop version</AnimatedText>
    <Gallery imagesData={screenshots.desktop} />
    <AnimatedText nth={nth ? nth + 1 : undefined}>Mobile version</AnimatedText>
    <Gallery imagesData={screenshots.mobile} />
  </>
);

export default MobileView;
