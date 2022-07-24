import { CloseMenu } from "../../..";
import AnimatedText from "../../../../AnimatedText";
import DefaultItem from "../../Item";

type Props = {
  isMounted: boolean;
  name: string;
  nth: number;
  closeMenu: CloseMenu;
  children?: React.ReactElement;
};

const Item = ({ isMounted, name, nth, children, closeMenu }: Props) => (
  <>
    <DefaultItem url={"/#" + name} onClick={closeMenu}>
      <h1>
        <AnimatedText mount={isMounted} nth={nth}>
          {name}
        </AnimatedText>
      </h1>
    </DefaultItem>
    {children}
  </>
);

export default Item;
