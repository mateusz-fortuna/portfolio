import A, { Props as AProps } from "./A";
import AnimatedText from "../AnimatedText";
import styles from "../../styles/Link.module.sass";

type Props = AProps & {
  label: string;
};

const Link = ({ label, href, children, isTargetBlank, nth, style }: Props) => (
  <div className={styles.link}>
    <AnimatedText nth={nth}>{label}</AnimatedText>
    <A href={href} isTargetBlank={isTargetBlank} style={style}>
      {children}
    </A>
  </div>
);

export default Link;
