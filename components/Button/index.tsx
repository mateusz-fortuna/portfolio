import { ReactElement, CSSProperties } from "react";
import styles from "../../styles/Button.module.sass";

export type Props = {
  onClick: () => void;
  children?: ReactElement;
  style?: CSSProperties;
  className?: string;
};

const Button = ({ onClick, children, style, className }: Props) => {
  const buttonClassName = className
    ? `${styles.button} ${className}`
    : styles.button;

  return (
    <button onClick={onClick} className={buttonClassName} style={style}>
      {children}
    </button>
  );
};

export default Button;
