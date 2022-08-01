/* eslint-disable @next/next/no-img-element */
import { useViewportDimensions } from "../../../hooks/useViewportDimensions";
import { Props } from "..";
import TextSection from "../../TextSection";
import Button from "../Button";
import variables from "../../../styles/variables.module.sass";
import styles from "../../../styles/Projects.module.sass";

const MobileView = ({ image, section, name }: Props) => {
  const viewportDimensions = useViewportDimensions();
  const imageWrapperStyle = {
    width: viewportDimensions?.width,
    left: `-${variables.marginStandard}`,
    position: "relative",
  } as React.CSSProperties;

  return (
    viewportDimensions && (
      <div className={styles.projects__mobileView}>
        <div style={imageWrapperStyle}>
          <img
            src={image.src}
            alt={image.alt}
            width={viewportDimensions.width}
            style={{ marginBottom: `calc(${variables.marginStandard} / -12)` }}
          />
        </div>
        <div className={styles.projects__mobileView_textSectionWrapper}>
          <TextSection {...section} />
          <Button name={name} />
        </div>
      </div>
    )
  );
};

export default MobileView;
