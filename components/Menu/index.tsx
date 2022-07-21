import { useState } from "react";
import Background from "./Background";
import Button from "./Button";
import Navigation from "./Navigation";
import styles from "../../styles/Menu.module.sass";

const Menu = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const toggleIsMenuOpened = () => setIsMenuOpened((state) => !state);

  return (
    <div className={styles.menu}>
      <Background isMounted={isMenuOpened} />
      <Navigation />
      <Button onClick={toggleIsMenuOpened} hasExitState={isMenuOpened} />
    </div>
  );
};

export default Menu;
