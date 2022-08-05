import Image from "next/image";
import { CSSProperties } from "react";
import { useIsLandscape } from "../../hooks/useIsLandscape";
import { ImageData as Props } from "../../public/content";
import styles from "../../styles/Image.module.sass";
import variables from "../../styles/variables.module.sass";

const ImageWithBackground = ({ src, alt, aspectRatio }: Props) => {
  const isLandscapeDeviceOrientation = useIsLandscape();

  const desktopContainerSize = {
    height: `calc(${(aspectRatio.height * 100) / aspectRatio.width}vw - 2 * ${
      variables.marginStandard
    }`,
    width: "100vw",
  } as CSSProperties;
  const mobileContainerSize = {
    height: `calc(${(aspectRatio.height * 100) / aspectRatio.width}vw - 2 * ${
      variables.marginStandard
    }`,
  } as CSSProperties;

  return (
    <div
      className={styles.image__wrapper}
      style={
        isLandscapeDeviceOrientation
          ? desktopContainerSize
          : mobileContainerSize
      }
    >
      <Image src={src} alt={alt} width="100%" height="100%" layout="fill" />
    </div>
  );
};

export default ImageWithBackground;
