import AnimatedText from "../AnimatedText";
import Logo from "../Logo";
import styles from "../../styles/CaseStudy.module.sass";

export type Technology =
  | "nextjs"
  | "nodejs"
  | "react"
  | "redux"
  | "sass"
  | "typescript";

type Props = {
  technologies: Technology[];
  tools: string[];
};

const Technologies = ({ technologies, tools }: Props) => {
  return (
    <div className={styles.caseStudy__technologies}>
      <h2>
        <AnimatedText>Technologies</AnimatedText>
      </h2>
      <div className={styles.caseStudy__technologies_logos}>
        {technologies.map((name) => (
          <Logo technology={name} key={name} />
        ))}
      </div>
      <div className={styles.caseStudy__technologies_tools}>
        <AnimatedText nth={1}>Other libraries and tools</AnimatedText>
        <ol>
          {tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Technologies;
