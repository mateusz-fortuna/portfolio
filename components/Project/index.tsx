import { useIsLandscape } from "../../hooks/useIsLandscape";
import { Content } from "../../public/content";
import DesktopView from "../Project/DesktopView";
import MobileView from "../Project/MobileView";

const Project = (props: Content) => (
  <>
    {useIsLandscape() ? <DesktopView {...props} /> : <MobileView {...props} />}
  </>
);

export default Project;
