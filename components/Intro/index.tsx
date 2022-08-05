import { content } from "../../public/content";
import styles from "../../styles/Intro.module.sass";
import IntroImage from "../ImageWithBackground";
import TextSection from "../TextSection";

const Intro = () => {
  const { section, image } = content.intro;
  return (
    <section className={styles.intro} id={Object.keys(content)[0]}>
      <>
        <IntroImage {...image} />
        <TextSection
          title={section.title}
          subtitle={section.subtitle}
          description={section.description}
        />
      </>
    </section>
  );
};

export default Intro;
