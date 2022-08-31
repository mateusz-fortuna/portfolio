import { ReactNode } from "react";
import styles from "../../styles/InteractiveArrow.module.sass";

export type Direction = "left" | "right";
type Props = {
  direction?: Direction;
  children?: ReactNode;
};

const InteractiveArrow = ({ children, direction = "right" }: Props) => {
  const coreClassName =
    direction === "left"
      ? `${styles.arrow_core} ${styles.arrow_core_right}`
      : `${styles.arrow_core} ${styles.arrow_core_left}`;

  const headClassName =
    direction === "left"
      ? `${styles.arrow_head} ${styles.arrow_head_right}`
      : `${styles.arrow_head} ${styles.arrow_head_left}`;

  return (
    <div className={styles.arrow}>
      {children}
      <span className={styles.line + " " + coreClassName} />
      <div className={headClassName}>
        <span className={styles.line} />
        <span className={styles.line} />
      </div>
    </div>
  );
};

export default InteractiveArrow;
