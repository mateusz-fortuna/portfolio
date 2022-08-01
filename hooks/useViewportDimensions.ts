import { useEffect, useState } from "react";
import { Size } from "../components/Image";

export const useViewportDimensions = () => {
  const [viewportDimensions, setViewportDimensions] = useState<Size | null>(
    null
  );

  const setDimensions = () => {
    const { innerHeight, innerWidth } = window;
    return setViewportDimensions({
      height: innerHeight,
      width: innerWidth,
    });
  };

  useEffect(() => {
    setDimensions();
    window.addEventListener("resize", setDimensions);
    return () => window.removeEventListener("resize", setDimensions);
  }, []);

  return viewportDimensions;
};
