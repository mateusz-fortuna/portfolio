import styles from "../../../styles/Image.module.sass";
import { Size as Props } from "..";
import { isLandscape } from "../../../helpers/isLandscape";

const Background = ({ height, width }: Props) => (
  <div
    style={{
      height,
      width,
    }}
    className={`${styles.image__background} ${
      isLandscape(width / height)
        ? styles.image__background_landscape
        : styles.image__background_mobile
    }`}
  />
);

export default Background;
