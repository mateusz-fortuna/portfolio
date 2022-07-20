import { useState } from "react";
import styles from "../../styles/Menu.module.sass";
import Button from "./Button";

const Menu = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const toggleIsMenuOpened = () => setIsMenuOpened((state) => !state);

  return (
    <>
      <Button onClick={toggleIsMenuOpened} hasExitState={isMenuOpened} />
    </>
  );
};

export default Menu;
