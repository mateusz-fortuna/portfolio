import { Props } from "..";
import styles from "../../../styles/Projects.module.sass";
import TextSection from "../../TextSection";
import Button from "../Button";
import ProjectThumbnail from "../../ImageWithBackground";

const DesktopView = ({ image, section, name }: Props) => {
  return (
    <div className={styles.projects__desktopView}>
      <div className={styles.projects__desktopView_textSectionWrapper}>
        <TextSection {...section} />
        <Button name={name}>
          <h2>Case study</h2>
        </Button>
      </div>
      <ProjectThumbnail {...image} />
    </div>
  );
};

export default DesktopView;
