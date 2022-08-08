import Image from "next/image";
import { CSSProperties } from "react";
import { useIsLandscape } from "../../hooks/useIsLandscape";
import { ImageData as Props } from "../../public/content";
import styles from "../../styles/Image.module.sass";
import variables from "../../styles/variables.module.sass";

const ImageWithBackground = ({ src, alt, aspectRatio }: Props) => {
  const isDesktop = useIsLandscape();

  const desktopWrapperSize = {
    height: `calc(100vh - 8 * ${variables.marginStandard}`,
    width: `calc((100vh - 8 * ${variables.marginStandard}) * ${aspectRatio.width} / ${aspectRatio.height})`,
  } as CSSProperties;
  const mobileWrapperSize = {
    height: `calc((100vw - 2 * ${variables.marginStandard}) * ${aspectRatio.width} / ${aspectRatio.height})`,
    width: `calc((100vw - 2 * ${variables.marginStandard})`,
  } as CSSProperties;

  return (
    <div
      className={styles.image__wrapper}
      style={isDesktop ? desktopWrapperSize : mobileWrapperSize}
    >
      <Image src={src} alt={alt} width="100%" height="100%" layout="fill" />
    </div>
  );
};

export default ImageWithBackground;
