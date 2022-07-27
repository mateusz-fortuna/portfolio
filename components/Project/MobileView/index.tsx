import { Props } from "..";
import variables from "../../../styles/variables.module.sass";
import styles from "../../../styles/Projects.module.sass";
import ProjectThumbnail from "../../Image";
import TextSection from "../../TextSection";

const MobileView = ({ image, section, name }: Props) => {
  const imageWrapperStyle = {
    width: "100vw",
    left: `-${variables.marginStandard}`,
  } as React.CSSProperties;

  return (
    <div className={styles.projects__mobileView}>
      <ProjectThumbnail {...image} wrapperStyle={imageWrapperStyle} />
      <div className={styles.projects__mobileView_textSectionWrapper}>
        <TextSection {...section} />
      </div>
    </div>
  );
};

export default MobileView;
