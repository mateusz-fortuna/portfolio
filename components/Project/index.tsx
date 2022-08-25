import { useIsLandscape } from "../../hooks/useIsLandscape";
import { Content } from "../../public/contentTypes";
import DesktopView from "../Project/DesktopView";
import MobileView from "../Project/MobileView";

export type Props = Content & {
  name: string;
};

const Project = (props: Props) => (
  <>
    {useIsLandscape() ? <DesktopView {...props} /> : <MobileView {...props} />}
  </>
);

export default Project;
