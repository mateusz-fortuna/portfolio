import { useIsLandscape } from "../../hooks/useIsLandscape";
import { content } from "../../public/content";
import Section from "../Section";
import AnimatedText from "../AnimatedText";
import Title from "../Title";
import Links from "./Links";
import styles from "../../styles/Contact.module.sass";

const Contact = () => {
  const { description } = content.contact;
  const hasDeviceLandscapeOrientation = useIsLandscape();

  const sectionClassName = hasDeviceLandscapeOrientation
    ? styles.contact__desktopView
    : styles.contact__mobileView;

  const contentClassName = hasDeviceLandscapeOrientation
    ? styles.contact__content_desktopView
    : styles.contact__content_mobileView;

  return (
    <Section className={sectionClassName} portraitDeviceId="contact">
      {hasDeviceLandscapeOrientation ? (
        <Title>Contact</Title>
      ) : (
        <h1>
          <AnimatedText>Contact</AnimatedText>
        </h1>
      )}
      <div className={contentClassName}>
        <AnimatedText>{description}</AnimatedText>
        <Links />
      </div>
    </Section>
  );
};

export default Contact;
