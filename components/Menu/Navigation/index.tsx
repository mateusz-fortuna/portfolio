import { useEffect, useRef, useState } from "react";
import styles from "../../../styles/Menu.module.sass";
import SectionsList from "./SectionsList";

const Navigation = () => {
  const [isTextMounted, setIsTextMounted] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const timeout = 1000;
  const mountText = () => setIsTextMounted(true);

  useEffect(() => {
    timeoutRef.current = setTimeout(mountText, timeout);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <nav className={styles.menu__navigation}>
      {isTextMounted && <SectionsList isMounted={isTextMounted} />}
    </nav>
  );
};

export default Navigation;
