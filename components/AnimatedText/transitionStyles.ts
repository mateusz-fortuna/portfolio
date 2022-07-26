import { CSSProperties } from "react";
import { TransitionStatus } from "react-transition-group";
import variables from "../../styles/variables.module.sass";

type TransitionStyles = {
  [key in TransitionStatus]?: CSSProperties;
};

export const transitionStyles: TransitionStyles = {
  entering: {
    transform: `translate3d(0,${variables.transformValue},0)`,
    opacity: 1,
  },
  entered: {
    transform: `translate3d(0,0,0)`,
    opacity: 1,
  },
  exiting: {
    transform: `translate3d(0, -${variables.transformValue}, 0)`,
  },
};
