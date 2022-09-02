import { ReactNode } from "react";
import { useIsLandscape } from "../../../hooks/useIsLandscape";
import { PathName } from "../../../pages/casestudy/[id]";
import { Direction } from "../../InteractiveArrow";
import ProjectButton from "../../Project/Button";

type Props = {
  name: PathName;
  direction: Direction;
  children?: ReactNode;
};

const Button = ({ name, direction, children }: Props) => {
  const hasDeviceLandscapeOrientation = useIsLandscape();
  return (
    <ProjectButton name={name} direction={direction}>
      {hasDeviceLandscapeOrientation ? (
        <h1>{children ? children : name}</h1>
      ) : (
        <h2>{children ? children : name}</h2>
      )}
    </ProjectButton>
  );
};

export default Button;
