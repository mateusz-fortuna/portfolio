import { useIsLandscape } from "../../hooks/useIsLandscape";
import { content } from "../../public/content";
import styles from "../../styles/Intro.module.sass";
import IntroImage from "../ImageWithBackground";
import Section from "../Section";
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
    <Section className={styles.intro} portraitDeviceId="intro">
      <>
        {hasDeviceLandscapeOrientation
          ? [text, introImage]
          : [introImage, text]}
      </>
    </Section>
  );
};

export default Intro;
