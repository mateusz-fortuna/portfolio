import { GetServerSideProps } from "next";
import { CSSProperties, useRef } from "react";
import { useIsLandscape } from "../../hooks/useIsLandscape";
import { content } from "../../public/content";
import TextSection from "../../components/TextSection";
import styles from "../../styles/CaseStudy.module.sass";
import Navigation from "../../components/Navigation";
import ScreenshotsDesktopLayout from "../../components/Screenshots/DesktopView";
import ScreenshotsMobileLayout from "../../components/Screenshots/MobileView";
import variables from "../../styles/variables.module.sass";

type PathName = keyof typeof content.casestudy;
type Props = {
  id: PathName;
};

export const getServerSideProps: GetServerSideProps = async (context) => ({
  props: {
    id: context.query.id,
  },
});

const CaseStudy = ({ id }: Props) => {
  const { title, subtitle, description, screenshots } = content.casestudy[id];
  const containerRef = useRef<HTMLDivElement | null>(null);
  const hasDeviceLandscapeOrientation = useIsLandscape();

  const containerStyle = {
    paddingTop: hasDeviceLandscapeOrientation
      ? `calc(2 * ${variables.marginStandard})`
      : 0,
    paddingBottom: hasDeviceLandscapeOrientation
      ? `calc(2 * ${variables.marginStandard})`
      : 0,
  } as CSSProperties;

  return (
    <Navigation direction="vertical" containerRef={containerRef}>
      <div
        className={styles.caseStudy__mobileView}
        ref={containerRef}
        style={containerStyle}
      >
        <TextSection
          title={title}
          subtitle={subtitle}
          description={description}
        />
        {hasDeviceLandscapeOrientation ? (
          <ScreenshotsDesktopLayout screenshots={screenshots} nth={3} />
        ) : (
          <ScreenshotsMobileLayout screenshots={screenshots} nth={3} />
        )}
      </div>
    </Navigation>
  );
};

export default CaseStudy;
