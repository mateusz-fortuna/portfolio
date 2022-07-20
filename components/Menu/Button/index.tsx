import Button, { ButtonProps } from "../../Button";
import Icon, { IconProps } from "../Icon";

type Props = ButtonProps & IconProps;

const MenuButton = ({ onClick, hasExitState }: Props) => (
  <Button onClick={onClick} style={{ marginLeft: "auto" }}>
    <Icon hasExitState={hasExitState} />
  </Button>
);
export default MenuButton;
