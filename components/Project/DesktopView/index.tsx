import { Content } from "../../../public/content";
import { Props } from "..";
import styles from "../../../styles/Projects.module.sass";
import TextSection from "../../TextSection";
import Button from "../Button";
import ProjectThumbnail from "../../Image";

const DesktopView = ({ image, section, name }: Props) => (
  <div className={styles.projects__desktopView}>
    <div className={styles.projects__desktopView_textSectionWrapper}>
      <TextSection {...section} />
      <Button name={name} />
    </div>
    <ProjectThumbnail {...image} hasBackground />
  </div>
);

export default DesktopView;
