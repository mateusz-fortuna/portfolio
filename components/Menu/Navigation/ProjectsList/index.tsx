import { content } from "../../../../public/content";
import { Props } from "../SectionsList";
import AnimatedText from "../../../AnimatedText";
import Item from "../Item";

const ProjectsList = ({ isMounted }: Props) => (
  <ol>
    {Object.keys(content.projects).map((projectName, index) => (
      <Item url={"/casestudy/" + projectName} key={projectName}>
        <h2>
          <AnimatedText mount={isMounted} nth={index + 1}>
            {projectName}
          </AnimatedText>
        </h2>
      </Item>
    ))}
  </ol>
);

export default ProjectsList;
