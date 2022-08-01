/* eslint-disable @next/next/no-img-element */
import { ImageData as Props } from "../../public/content";
import { ReactEventHandler, useState } from "react";
import styles from "../../styles/Image.module.sass";
import { useViewportDimensions } from "../../hooks/useViewportDimensions";

export type Size = {
  height: number;
  width: number;
};
type OnLoad = ReactEventHandler<HTMLImageElement>;

const Image = ({ src, alt }: Props) => {
  const viewportDimensions = useViewportDimensions();
  const [imageDimensions, setImageDimensions] = useState<Size | null>(null);

  const handleSetImageDimensions: OnLoad = ({ currentTarget }) => {
    setImageDimensions({
      width: currentTarget?.clientWidth,
      height: currentTarget?.clientHeight,
    });
  };

  return (
    viewportDimensions && (
      <div
        className={styles.image__wrapper}
        style={{
          width: imageDimensions?.width,
          height: imageDimensions?.height,
        }}
      >
        <div className={styles.image__background} />
        <img
          src={src}
          alt={alt}
          height={viewportDimensions.height}
          className={styles.image}
          onLoad={handleSetImageDimensions}
        />
      </div>
    )
  );
};

export default Image;
