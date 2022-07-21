import { useEffect, useState } from "react";

export const useIsLandscape = () => {
  const [isLandscape, setIsLandscape] = useState(false);

  const detectOrientation = () => {
    const { clientHeight, clientWidth } = document.body;
    return setIsLandscape(clientWidth > clientHeight);
  };

  useEffect(() => {
    detectOrientation();
    window.addEventListener("resize", detectOrientation);
    return () => window.removeEventListener("resize", detectOrientation);
  }, []);

  return isLandscape;
};
