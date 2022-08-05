/* eslint-disable @next/next/no-img-element */
import { useViewportDimensions } from "../../../hooks/useViewportDimensions";
import { Props } from "..";
import TextSection from "../../TextSection";
import Button from "../Button";
import styles from "../../../styles/Projects.module.sass";
import ProjectThumbnail from "next/image";

const MobileView = ({ image, section, name }: Props) => (
  <div className={styles.projects__mobileView}>
    <ProjectThumbnail
      src={image.src}
      alt={image.alt}
      {...image.aspectRatio}
      layout="responsive"
    />
    <div className={styles.projects__mobileView_textSectionWrapper}>
      <TextSection {...section} />
      <Button name={name} />
    </div>
  </div>
);

export default MobileView;
