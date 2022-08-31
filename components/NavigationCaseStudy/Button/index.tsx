import { useIsLandscape } from "../../../hooks/useIsLandscape";
import { PathName } from "../../../pages/casestudy/[id]";
import { Direction } from "../../InteractiveArrow";
import ProjectButton from "../../Project/Button";

type Props = {
  name: PathName;
  direction: Direction;
};

const Button = ({ name, direction }: Props) => {
  const hasDeviceLandscapeOrientation = useIsLandscape();
  return (
    <ProjectButton name={name} direction={direction}>
      {hasDeviceLandscapeOrientation ? <h1>{name}</h1> : <h2>{name}</h2>}
    </ProjectButton>
  );
};

export default Button;
