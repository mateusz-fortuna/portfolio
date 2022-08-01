import { isLandscape } from "../../helpers/isLandscape";
import { useViewportDimensions } from "../../hooks/useViewportDimensions";
import { content } from "../../public/content";
import styles from "../../styles/Intro.module.sass";
import Image from "../Image";
import TextSection from "../TextSection";

const Intro = () => {
  const { title, subtitle, description } = content.intro.section;
  const { src, alt } = content.intro.image;
  const viewportDimensions = useViewportDimensions();
  const isLandscapeOrientation =
    viewportDimensions &&
    isLandscape(viewportDimensions.width / viewportDimensions.height);

  return (
    viewportDimensions && (
      <section className={styles.intro} id={Object.keys(content)[0]}>
        {isLandscapeOrientation ? (
          <>
            <TextSection
              title={title}
              subtitle={subtitle}
              description={description}
            />
            <Image src={src} alt={alt} />
          </>
        ) : (
          <>
            <Image src={src} alt={alt} />
            <TextSection
              title={title}
              subtitle={subtitle}
              description={description}
            />
          </>
        )}
      </section>
    )
  );
};

export default Intro;
