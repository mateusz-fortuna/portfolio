import styles from "../../../styles/Menu.module.sass";

export type IconProps = {
  hasExitState?: boolean;
};

const Icon = ({ hasExitState }: IconProps) => (
  <div
    className={
      hasExitState
        ? `${styles.menu__icon} ${styles.menu__icon_exit}`
        : styles.menu__icon
    }
  >
    <span className={styles.menu__icon_span} />
    <span className={styles.menu__icon_span} />
    <span className={styles.menu__icon_span} />
  </div>
);

export default Icon;
