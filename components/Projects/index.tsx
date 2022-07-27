import { content } from "../../public/content";
import Project from "../Project";
import styles from "../../styles/Projects.module.sass";

const Projects = () => (
  <section className={styles.projects}>
    {Object.entries(content.projects).map((entry) => (
      <Project key={entry[0]} name={entry[0]} {...entry[1]} />
    ))}
  </section>
);

export default Projects;
