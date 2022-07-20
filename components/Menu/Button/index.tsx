import Button, { Props } from "../../Button";
import Icon from "../Icon";

const MenuButton = ({ onClick }: Props) => (
  <Button onClick={onClick} style={{ marginLeft: "auto" }}>
    <Icon />
  </Button>
);
export default MenuButton;
