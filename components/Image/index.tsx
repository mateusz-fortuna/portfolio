import NextImage from "next/image";
import Background from "./Background";
import { ImageData } from "../../public/content";
import { ImageProps } from "next/dist/client/image";
import { useState, useRef } from "react";
import { isLandscape } from "../../helpers/isLandscape";
import variables from "../../styles/variables.module.sass";

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

  const handleLoadingComplete: OnLoadingComplete = ({
    naturalHeight,
    naturalWidth,
  }) => {
    const wrapper = imageWrapperRef.current;
    if (wrapper) {
      const image = wrapper.children[0].children[1] as HTMLImageElement;
      const aspectRatio = naturalWidth / naturalHeight;
      const hasLandscapeOrientation = isLandscape(aspectRatio);

      const imageHeight = image.clientHeight;
      const imageWidth = image.clientWidth;

      const backgroundHeight = hasLandscapeOrientation
        ? naturalHeight
        : imageHeight;
      const backgroundWidth = hasLandscapeOrientation
        ? naturalWidth
        : imageWidth * aspectRatio;

      setLoadedImageSize({ height: backgroundHeight, width: backgroundWidth });
    }
  };

  return (
    <>
      <div ref={imageWrapperRef} style={imageWrapperStyle}>
        {hasBackground && loadedImageSize && (
          <Background {...loadedImageSize} />
        )}
        <NextImage {...imageProps} onLoadingComplete={handleLoadingComplete} />
      </div>
    </>
  );
};

export default Image;
