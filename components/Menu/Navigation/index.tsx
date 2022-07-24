import { useEffect, useRef, useState } from "react";
import { CloseMenu } from "..";
import styles from "../../../styles/Menu.module.sass";
import SectionsList from "./SectionsList";

type Props = {
  isMenuOpened: boolean;
  closeMenu: CloseMenu;
};

const Navigation = ({ isMenuOpened, closeMenu }: Props) => {
  const timeout = 1000;
  const [isTextMounted, setIsTextMounted] = useState(false);
  const [isSectionMounted, setIsSectionMounted] = useState(false);
  const sectionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const unmountSection = () => setIsSectionMounted(false);
    const displayText = () => {
      setIsTextMounted(true);
      setIsSectionMounted(true);
    };
    const hideText = () => {
      setIsTextMounted(false);
      sectionTimeoutRef.current = setTimeout(unmountSection, timeout);
    };

    if (isMenuOpened) {
      displayText();
    } else {
      hideText();
    }

    return () => {
      if (sectionTimeoutRef.current) clearTimeout(sectionTimeoutRef.current);
    };
  }, [isMenuOpened]);

  return (
    <nav className={styles.menu__navigation}>
      {isSectionMounted && (
        <SectionsList isMounted={isTextMounted} closeMenu={closeMenu} />
      )}
    </nav>
  );
};

export default Navigation;
