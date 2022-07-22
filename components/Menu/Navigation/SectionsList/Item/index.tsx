import AnimatedText from "../../../../AnimatedText";
import DefaultItem from "../../Item";

type Props = {
  isMounted: boolean;
  name: string;
  nth: number;
  children?: React.ReactElement;
};

const Item = ({ isMounted, name, nth, children }: Props) => (
  <>
    <DefaultItem url={"/#" + name}>
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
