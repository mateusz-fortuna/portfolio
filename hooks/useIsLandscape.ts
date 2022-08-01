import { useViewportDimensions } from "./useViewportDimensions";

export const useIsLandscape = () => {
  const viewportDimensions = useViewportDimensions();
  if (!viewportDimensions) return false;
  return viewportDimensions.width > viewportDimensions.height;
};
