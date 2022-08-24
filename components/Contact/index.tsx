import { useIsLandscape } from "../../hooks/useIsLandscape";
import { content } from "../../public/content";
import Section from "../Section";
import AnimatedText from "../AnimatedText";
import Link from "../Link";
import styles from "../../styles/Contact.module.sass";
import variables from "../../styles/variables.module.sass";

const Contact = () => {
  const { description, email, github, linkedin } = content.contact;
  const hasDeviceLandscapeOrientation = useIsLandscape();
  const className = hasDeviceLandscapeOrientation
    ? styles.contact__desktopView
    : styles.contact__mobileView;
  const emailStyle = {
    fontSize: "1.25rem",
  };

  return (
    <Section className={className} portraitDeviceId="contact">
      {!hasDeviceLandscapeOrientation && (
        <h1>
          <AnimatedText>Contact</AnimatedText>
        </h1>
      )}
      <AnimatedText>{description}</AnimatedText>
      <div style={{ marginBottom: variables.marginStandard }}>
        <Link label="e-mail:" href={email.href} nth={1} style={emailStyle}>
          {email.text}
        </Link>
      </div>
      <Link label="LinkedIn:" href={linkedin.href} nth={3} isTargetBlank>
        {linkedin.text}
      </Link>
      <Link label="Github:" href={github.href} nth={5} isTargetBlank>
        {github.text}
      </Link>
    </Section>
  );
};

export default Contact;
