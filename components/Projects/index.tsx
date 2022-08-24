import { content } from "../../public/content";
import Project from "../Project";
import Section from "../Section";
import styles from "../../styles/Projects.module.sass";

const Projects = () => (
  <Section className={styles.projects} portraitDeviceId="projects">
    {Object.entries(content.projects).map((entry) => (
      <Project key={entry[0]} name={entry[0]} {...entry[1]} />
    ))}
  </Section>
);
export default Projects;
