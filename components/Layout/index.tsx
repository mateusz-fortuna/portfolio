import { ReactElement } from "react";
import styles from "../../styles/Layout.module.sass";
import Menu from "../Menu";

type Props = {
  children: ReactElement;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.layout}>
      {children}
      <Menu />
    </div>
  );
};

export default Layout;
