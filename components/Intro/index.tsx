import { content } from "../../public/content";
import styles from "../../styles/Intro.module.sass";
import Image from "../Image";
import TextSection from "../TextSection";

const Intro = () => {
  const { title, subtitle, description } = content.intro.section;
  const { src, alt } = content.intro.image;

  return (
    <section className={styles.intro} id={Object.keys(content)[0]}>
      <Image src={src} alt={alt} hasBackground />
      <TextSection
        title={title}
        subtitle={subtitle}
        description={description}
      />
    </section>
  );
};

export default Intro;
