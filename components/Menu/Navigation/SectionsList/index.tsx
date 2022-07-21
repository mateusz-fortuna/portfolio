import { content } from "../../../../public/content";
import AnimatedText from "../../../AnimatedText";
import Item from "../Item";
import ProjectsList from "../ProjectsList";

export type Props = {
  isMounted: boolean;
};

const SectionsList = ({ isMounted }: Props) => (
  <ol>
    {Object.keys(content).map((sectionName) => {
      if (sectionName === "projects")
        return (
          <>
            <Item url={"/#" + sectionName} key={sectionName}>
              <h1>
                <AnimatedText mount={isMounted}>{sectionName}</AnimatedText>
              </h1>
            </Item>
            <ProjectsList isMounted={isMounted} />
          </>
        );
      return (
        <Item url={"/#" + sectionName} key={sectionName}>
          <h1>
            <AnimatedText mount={isMounted}>{sectionName}</AnimatedText>
          </h1>
        </Item>
      );
    })}
  </ol>
);

export default SectionsList;
