import { content } from "../../public/content";
import { useIsLandscape } from "../../hooks/useIsLandscape";
import Project from "../Project";
import Section from "../Section";
import styles from "../../styles/Projects.module.sass";
import Title from "../Title";

const Projects = () => {
  const hasDeviceLandscapeOrientation = useIsLandscape();

  return (
    <Section className={styles.projects} portraitDeviceId="projects">
      {hasDeviceLandscapeOrientation && (
        <div className={styles.project__titleWrapper}>
          <Title>Projects</Title>
        </div>
      )}
      {Object.entries(content.projects).map((entry) => (
        <Project key={entry[0]} name={entry[0]} {...entry[1]} />
      ))}
    </Section>
  );
};
export default Projects;
