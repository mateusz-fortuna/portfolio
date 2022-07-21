import Button, { ButtonProps } from "../../Button";
import Icon, { IconProps } from "../Icon";
import styles from "../../../styles/Menu.module.sass";

type Props = ButtonProps & IconProps;

const MenuButton = ({ onClick, hasExitState }: Props) => (
  <Button onClick={onClick} className={styles.menu__button}>
    <Icon hasExitState={hasExitState} />
  </Button>
);
export default MenuButton;
