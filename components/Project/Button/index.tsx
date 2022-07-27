import Link from "next/link";
import DefaultButton from "../../Button";
import styles from "../../../styles/Projects.module.sass";

type Props = {
  name: string;
};

const Button = ({ name }: Props) => (
  <DefaultButton>
    <Link href={"/casestudy/" + name}>
      <div className={styles.project__button_arrow}>
        <h2>Case study</h2>
        <span className={styles.project__button_arrow_core} />
        <span className={styles.project__button_arrow_head}>{">"}</span>
      </div>
    </Link>
  </DefaultButton>
);

export default Button;
