import styles from "../../../styles/Image.module.sass";
import { Size as Props } from "..";

const Background = ({ height, width }: Props) => (
  <div
    style={{
      height,
      width,
    }}
    className={styles.image__background}
  />
);

export default Background;
