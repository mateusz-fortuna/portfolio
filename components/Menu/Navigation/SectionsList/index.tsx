import { CloseMenu } from "../..";
import { content } from "../../../../public/content";
import ProjectsList from "../ProjectsList";
import Item from "./Item";

export type Props = {
  isMounted: boolean;
  closeMenu: CloseMenu;
};

const projectNames = Object.keys(content.home);

const SectionsList = ({ isMounted, closeMenu }: Props) => {
  const itemDefaultProps = {
    isMounted,
    closeMenu,
  };
  return (
    <ol>
      <Item name={projectNames[0]} nth={0} {...itemDefaultProps} />
      <Item name={projectNames[1]} nth={1} {...itemDefaultProps}>
        <ProjectsList {...itemDefaultProps} />
      </Item>
      <Item name={projectNames[2]} nth={5} {...itemDefaultProps} />
    </ol>
  );
};

export default SectionsList;
