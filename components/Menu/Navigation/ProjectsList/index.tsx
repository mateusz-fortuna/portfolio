import styles from "../../../../styles/Menu.module.sass";
import { content } from "../../../../public/content";
import { Props } from "../SectionsList";
import AnimatedText from "../../../AnimatedText";
import Item from "../Item";

const ProjectsList = ({ isMounted, closeMenu }: Props) => (
  <ol className={styles.menu__navigation_projects_list}>
    {Object.entries(content.home.projects).map(([key, value], index) => (
      <Item key={key} url={"/casestudy/" + key} onClick={closeMenu}>
        <h2>
          <AnimatedText mount={isMounted} nth={index + 1}>
            {value.section.title.split("\n")[0]}
          </AnimatedText>
        </h2>
      </Item>
    ))}
  </ol>
);

export default ProjectsList;
