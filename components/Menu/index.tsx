import styles from "../../styles/Menu.module.sass";
import Button from "./Button";

const Menu = () => {
  const logToConsole = () => console.log("the button was clicked!");
  return (
    <>
      <Button onClick={logToConsole} />
    </>
  );
};

export default Menu;
