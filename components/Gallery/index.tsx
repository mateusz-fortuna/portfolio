import { ImageData } from "../../public/contentTypes";
import Image from "next/image";
import styles from "../../styles/Gallery.module.sass";

type Props = {
  imagesData: ImageData[];
};

const Gallery = ({ imagesData }: Props) => (
  <div className={styles.gallery}>
    {imagesData.map((image, index) => (
      <Image
        src={image.src}
        alt={image.alt}
        {...image.aspectRatio}
        layout="responsive"
        key={image.src + "_" + index}
      />
    ))}
  </div>
);

export default Gallery;
