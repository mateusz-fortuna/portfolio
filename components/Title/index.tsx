import AnimatedText from "../AnimatedText";
import styles from "../../styles/Title.module.sass";

type Props = {
  children: string;
  nth?: number;
};

const Title = ({ children, nth }: Props) => (
  <h1 className={styles.title}>
    <AnimatedText nth={nth}>{children}</AnimatedText>
  </h1>
);

export default Title;
