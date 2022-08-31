import { useEffect, useState } from "react";
import { PathName } from "../../pages/casestudy/[id]";
import { content } from "../../public/content";
import styles from "../../styles/CaseStudy.module.sass";
import Button from "./Button";

type State = {
  previous: PathName | undefined;
  next: PathName | undefined;
};
type Props = {
  caseStudyName: PathName;
};

const Navigation = ({ caseStudyName }: Props) => {
  const [state, setState] = useState<State>({
    previous: undefined,
    next: undefined,
  });

  const defaultArrowClassName = styles.caseStudy__navigation_arrow;
  const leftArrowClassName = `${defaultArrowClassName} ${styles.caseStudy__navigation_arrowLeft}`;
  const rightArrowClassName = `${defaultArrowClassName} ${styles.caseStudy__navigation_arrowRight}`;

  useEffect(() => {
    const caseStudyNames = Object.keys(content.casestudy) as PathName[];
    const index = caseStudyNames.indexOf(caseStudyName);
    const count = caseStudyNames.length;
    const previous = index === 0 ? undefined : caseStudyNames[index - 1];
    const next = index === count ? undefined : caseStudyNames[index + 1];
    setState({ previous, next });
  }, [caseStudyName]);

  return (
    <div className={styles.caseStudy__navigation}>
      {state.previous && (
        <div className={leftArrowClassName}>
          <Button direction="left" name={state.previous} />
        </div>
      )}
      {state.next && (
        <div className={rightArrowClassName}>
          <Button direction="right" name={state.next} />
        </div>
      )}
    </div>
  );
};

export default Navigation;
