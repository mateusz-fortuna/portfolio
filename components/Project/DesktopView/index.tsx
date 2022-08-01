import { Content } from "../../../public/content";
import { Props } from "..";
import styles from "../../../styles/Projects.module.sass";
import TextSection from "../../TextSection";
import Button from "../Button";
import ProjectThumbnail, { Size } from "../../Image";

const DesktopView = ({ image, section, name }: Props) => {
  return (
    <div className={styles.projects__desktopView}>
      <div className={styles.projects__desktopView_textSectionWrapper}>
        <TextSection {...section} />
        <Button name={name} />
      </div>
      <ProjectThumbnail {...image} />
    </div>
  );
};

export default DesktopView;
