import { content } from "../../public/content";
import Project from "../Project";

const Projects = () => (
  <section className="">
    {Object.entries(content.projects).map((entry) => (
      <Project key={entry[0]} {...entry[1]} />
    ))}
  </section>
);

export default Projects;
