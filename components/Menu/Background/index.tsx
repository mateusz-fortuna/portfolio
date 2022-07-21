import styles from "../../../styles/Menu.module.sass";

type Props = {
  isMounted: boolean;
};

const Background = ({ isMounted }: Props) => {
  const className = isMounted
    ? `${styles.menu__background} ${styles.menu__background_opened}`
    : styles.menu__background;

  return <div className={className} />;
};

export default Background;
