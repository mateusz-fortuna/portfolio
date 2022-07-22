import { content } from "../../../../public/content";
import ProjectsList from "../ProjectsList";
import Item from "./Item";

export type Props = {
  isMounted: boolean;
};

const projectNames = Object.keys(content);

const SectionsList = ({ isMounted }: Props) => (
  <ol>
    <Item isMounted={isMounted} name={projectNames[0]} nth={0} />
    <Item isMounted={isMounted} name={projectNames[1]} nth={1}>
      <ProjectsList isMounted={isMounted} />
    </Item>
    <Item isMounted={isMounted} name={projectNames[2]} nth={5} />
  </ol>
);

export default SectionsList;
