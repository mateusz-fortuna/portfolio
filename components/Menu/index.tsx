import { useState } from "react";
import Background from "./Background";
import Button from "./Button";

const Menu = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const toggleIsMenuOpened = () => setIsMenuOpened((state) => !state);

  return (
    <>
      <Background isMounted={isMenuOpened} />
      <Button onClick={toggleIsMenuOpened} hasExitState={isMenuOpened} />
    </>
  );
};

export default Menu;
