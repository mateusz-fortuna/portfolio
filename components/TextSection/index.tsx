import { Section as Props } from "../../public/content";
import AnimatedText from "../AnimatedText";

const TextSection = ({ title, subtitle, description }: Props) => (
  <div id="textSection">
    <h1>
      <AnimatedText mount nth={0}>
        {title}
      </AnimatedText>
    </h1>
    <h2>
      <AnimatedText mount nth={1}>
        {subtitle}
      </AnimatedText>
    </h2>
    <AnimatedText mount nth={2}>
      {description}
    </AnimatedText>
  </div>
);

export default TextSection;
