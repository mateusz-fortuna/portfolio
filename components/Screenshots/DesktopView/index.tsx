import { ImageData } from "../../../public/contentTypes";
import AnimatedText from "../../AnimatedText";
import Gallery from "../../Gallery";
import variables from "../../../styles/variables.module.sass";

type Props = {
  screenshots: {
    mobile: ImageData[];
    desktop: ImageData[];
  };
  nth?: number;
};

const DesktopView = ({ nth, screenshots }: Props) => (
  <>
    <AnimatedText nth={nth}>Desktop version</AnimatedText>
    <Gallery imagesData={screenshots.desktop} />

    <div style={{ paddingTop: variables.marginStandard }}>
      <AnimatedText nth={nth ? nth + 1 : undefined}>
        Mobile version
      </AnimatedText>
    </div>
    <Gallery imagesData={screenshots.mobile} />
  </>
);

export default DesktopView;
