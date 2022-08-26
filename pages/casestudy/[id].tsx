import { useRouter } from "next/router";
import { content } from "../../public/content";
import { useEffect, useState } from "react";
import { CaseStudyData } from "../../public/contentTypes";
import { isTextInObjectKeys } from "../../helpers/isTextInObjectKeys";
import TextSection from "../../components/TextSection";
import styles from "../../styles/CaseStudy.module.sass";

type PathName = keyof typeof content.casestudy;

const CaseStudy = () => {
  const [data, setData] = useState<CaseStudyData | null>(null);
  const { asPath } = useRouter();

  useEffect(() => {
    const id = asPath.split("/").pop() as PathName;
    const isPathLoaded = isTextInObjectKeys(content.casestudy, id);
    if (isPathLoaded) setData(content.casestudy[id]);
  }, [asPath]);

  return (
    data && (
      <div className={styles.caseStudy__mobileView}>
        <TextSection
          title={data.title}
          subtitle={data.subtitle}
          description={data.description}
        />
      </div>
    )
  );
};

export default CaseStudy;
