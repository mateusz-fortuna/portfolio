import { content } from "../../public/content";
import Project from "../Project";
import styles from "../../styles/Projects.module.sass";
import { useIsLandscape } from "../../hooks/useIsLandscape";

const Projects = () => {
  const hasDevicePortraitOrientation = !useIsLandscape();

  return (
    <section
      className={styles.projects}
      //id={hasDevicePortraitOrientation ? "projects" : undefined}
    >
      {Object.entries(content.projects).map((entry) => (
        <Project key={entry[0]} name={entry[0]} {...entry[1]} />
      ))}
    </section>
  );
};

export default Projects;
