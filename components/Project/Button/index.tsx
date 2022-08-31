import { ReactNode } from "react";
import DefaultButton from "../../Button";
import InteractiveArrow, { Direction } from "../../InteractiveArrow";

type Props = {
  name: string;
  children?: ReactNode;
  direction?: Direction;
};

const Button = ({ name, children, direction }: Props) => (
  <DefaultButton>
    <a href={"/casestudy/" + name}>
      <InteractiveArrow direction={direction}>{children}</InteractiveArrow>
    </a>
  </DefaultButton>
);

export default Button;
