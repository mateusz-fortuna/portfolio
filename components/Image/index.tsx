import NextImage from "next/image";
import Background from "./Background";
import { ImageData } from "../../public/content";
import { ImageProps } from "next/dist/client/image";
import { useState, useRef } from "react";
import { isLandscape } from "../../helpers/isLandscape";
import variables from "../../styles/variables.module.sass";

type Props = ImageData & {
  hasBackground?: boolean;
};
export type Size = {
  height: number;
  width: number;
};
type OnLoadingComplete = NonNullable<ImageProps["onLoadingComplete"]>;

const Image = ({ src, alt, hasBackground }: Props) => {
  const imageWrapperRef = useRef<HTMLDivElement | null>(null);
  const [backgroundSize, setBackgroundSize] = useState<Size | null>(null);

  const imageProps = {
    src,
    alt,
    width: "100%",
    height: "100%",
    layout: "responsive",
    objectFit: "contain",
    objectPosition: "75%",
    style: { zIndex: 1 },
  } as ImageProps;

  const imageWrapperStyle = {
    position: "relative",
    paddingBottom: hasBackground
      ? `calc(${variables.marginStandard} / 2)`
      : undefined,
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

      setBackgroundSize({ height: backgroundHeight, width: backgroundWidth });
    }
  };

  return (
    <>
      <div ref={imageWrapperRef} style={imageWrapperStyle}>
        <NextImage {...imageProps} onLoadingComplete={handleLoadingComplete} />
        {hasBackground && backgroundSize && <Background {...backgroundSize} />}
      </div>
    </>
  );
};

export default Image;
