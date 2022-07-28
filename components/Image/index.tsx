import NextImage from "next/image";
import Background from "./Background";
import { ImageData } from "../../public/content";
import { ImageProps } from "next/dist/client/image";
import { useState, useRef } from "react";
import { isLandscape } from "../../helpers/isLandscape";
import variables from "../../styles/variables.module.sass";
import { useIsLandscape } from "../../hooks/useIsLandscape";

type Props = ImageData & {
  hasBackground?: boolean;
  wrapperStyle?: React.CSSProperties;
};
export type Size = {
  height: number;
  width: number;
};
type OnLoadingComplete = NonNullable<ImageProps["onLoadingComplete"]>;

const Image = ({ src, alt, hasBackground, wrapperStyle }: Props) => {
  const imageWrapperRef = useRef<HTMLDivElement | null>(null);
  const [loadedImageSize, setLoadedImageSize] = useState<Size | null>(null);
  const hasDeviceLandscapeOrientation = useIsLandscape();
  const hasLandscapeOrientation =
    loadedImageSize &&
    isLandscape(loadedImageSize.width / loadedImageSize.height);

  const imageProps = {
    src,
    alt,
    width: loadedImageSize
      ? hasLandscapeOrientation
        ? loadedImageSize.width
        : "100%"
      : "100%",
    height: loadedImageSize
      ? hasLandscapeOrientation
        ? loadedImageSize.height
        : "100%"
      : "100%",
    layout: "responsive",
    objectFit: "contain",
    objectPosition: "75%",
  } as ImageProps;

  const imageWrapperStyle = {
    position: "relative",
    paddingBottom: hasBackground
      ? `calc(${variables.marginStandard} / 2)`
      : undefined,
    ...wrapperStyle,
  } as React.CSSProperties;

  const computeLoadedImageSize: OnLoadingComplete = ({
    naturalHeight,
    naturalWidth,
  }) => {
    const wrapper = imageWrapperRef.current;
    if (wrapper) {
      const image = wrapper.children[0].children[1] as HTMLImageElement;
      const imageHeight = image.clientHeight;
      const imageWidth = image.clientWidth;
      const aspectRatio = naturalWidth / naturalHeight;
      const hasLandscapeOrientation = isLandscape(aspectRatio);
      const maxHeight = parseInt(variables.maxImageHeight.slice(0, -2));

      const backgroundHeight = hasLandscapeOrientation
        ? naturalHeight
        : hasDeviceLandscapeOrientation
        ? imageHeight
        : Math.min(imageHeight, maxHeight);
      const backgroundWidth = hasLandscapeOrientation
        ? naturalWidth
        : hasDeviceLandscapeOrientation
        ? imageWidth * aspectRatio
        : Math.min(imageWidth, maxHeight) * aspectRatio;

      setLoadedImageSize({ height: backgroundHeight, width: backgroundWidth });
    }
  };

  return (
    <>
      <div ref={imageWrapperRef} style={imageWrapperStyle}>
        {hasBackground && loadedImageSize && (
          <Background {...loadedImageSize} />
        )}
        <NextImage {...imageProps} onLoadingComplete={computeLoadedImageSize} />
      </div>
    </>
  );
};

export default Image;
