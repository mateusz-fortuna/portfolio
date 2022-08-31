import { GetServerSideProps } from "next";
import { useRef } from "react";
import { useIsLandscape } from "../../hooks/useIsLandscape";
import { content } from "../../public/content";
import TextSection from "../../components/TextSection";
import Navigation from "../../components/Navigation";
import ScreenshotsDesktopLayout from "../../components/Screenshots/DesktopView";
import ScreenshotsMobileLayout from "../../components/Screenshots/MobileView";
import styles from "../../styles/CaseStudy.module.sass";
import Technologies from "../../components/Technologies";

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
  const { title, subtitle, description, screenshots, technologies } =
    content.casestudy[id];
  const containerRef = useRef<HTMLDivElement | null>(null);
  const hasDeviceLandscapeOrientation = useIsLandscape();
  const containerClassName = hasDeviceLandscapeOrientation
    ? styles.caseStudy__desktopView
    : styles.caseStudy__mobileView;

  return (
    <Navigation direction="vertical" containerRef={containerRef}>
      <div className={containerClassName} ref={containerRef}>
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
        <Technologies
          technologies={technologies.names}
          tools={technologies.tools}
        />
      </div>
    </Navigation>
  );
};

export default CaseStudy;
