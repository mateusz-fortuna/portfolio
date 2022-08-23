import { useIsLandscape } from "../../hooks/useIsLandscape";
import { content } from "../../public/content";
import styles from "../../styles/Intro.module.sass";
import IntroImage from "../ImageWithBackground";
import TextSection from "../TextSection";

const Intro = () => {
  const hasDeviceLandscapeOrientation = useIsLandscape();
  const { section, image } = content.intro;

  const introImage = <IntroImage {...image} />;
  const text = (
    <TextSection
      title={section.title}
      subtitle={section.subtitle}
      description={section.description}
    />
  );

  return (
    <section
      className={styles.intro}
      //id={hasDeviceLandscapeOrientation ? undefined : "intro"}
    >
      <>
        {hasDeviceLandscapeOrientation
          ? [text, introImage]
          : [introImage, text]}
      </>
    </section>
  );
};

export default Intro;
