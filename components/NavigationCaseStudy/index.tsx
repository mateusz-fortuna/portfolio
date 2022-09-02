import { useEffect, useState } from "react";
import { useIsLandscape } from "../../hooks/useIsLandscape";
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
  const hasDeviceLandscapeOrientation = useIsLandscape();
  const [state, setState] = useState<State>({
    previous: undefined,
    next: undefined,
  });

  const defaultArrowClassName = styles.caseStudy__navigation_arrow;
  const leftArrowClassName = `${defaultArrowClassName} ${styles.caseStudy__navigation_arrowLeft}`;
  const rightArrowClassName = `${defaultArrowClassName} ${styles.caseStudy__navigation_arrowRight}`;
  const navigationClassName =
    !hasDeviceLandscapeOrientation && state.previous && state.next
      ? `${styles.caseStudy__navigation} ${styles.caseStudy__navigation_high}`
      : styles.caseStudy__navigation;

  useEffect(() => {
    const caseStudyNames = Object.keys(content.casestudy) as PathName[];
    const index = caseStudyNames.indexOf(caseStudyName);
    const count = caseStudyNames.length;
    const previous = index === 0 ? undefined : caseStudyNames[index - 1];
    const next = index === count ? undefined : caseStudyNames[index + 1];
    setState({ previous, next });
  }, [caseStudyName]);

  return (
    <div className={navigationClassName}>
      {state.previous && (
        <div className={leftArrowClassName}>
          <Button direction="left" name={state.previous}>
            {content.casestudy[state.previous].title}
          </Button>
        </div>
      )}
      {state.next && (
        <div className={rightArrowClassName}>
          <Button direction="right" name={state.next}>
            {content.casestudy[state.next].title}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Navigation;
