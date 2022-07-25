import { content } from "../../public/content";
import styles from "../../styles/Intro.module.sass";
import TextSection from "../TextSection";

const Intro = () => {
  const { title, subtitle, description } = content.intro.section;

  return (
    <section className={styles.intro}>
      <TextSection
        title={title}
        subtitle={subtitle}
        description={description}
      />
    </section>
  );
};

export default Intro;
