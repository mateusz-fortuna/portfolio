import { MouseEventHandler, useState } from "react";
import Background from "./Background";
import Button from "./Button";
import Navigation from "./Navigation";
import styles from "../../styles/Menu.module.sass";

export type CloseMenu = MouseEventHandler;

const Menu = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const toggleIsMenuOpened = () => setIsMenuOpened((state) => !state);

  const closeMenu: CloseMenu = ({ currentTarget }) => {
    const li = currentTarget as HTMLLIElement | null;
    if (li) {
      toggleIsMenuOpened();
      li.classList.add(styles.menu__item_hide_hover);
    }
  };

  return (
    <div className={styles.menu}>
      <Background isMounted={isMenuOpened} />
      <Navigation isMenuOpened={isMenuOpened} closeMenu={closeMenu} />
      <Button onClick={toggleIsMenuOpened} hasExitState={isMenuOpened} />
    </div>
  );
};

export default Menu;
