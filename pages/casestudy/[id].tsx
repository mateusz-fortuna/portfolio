import { content } from "../../public/content";
import TextSection from "../../components/TextSection";
import styles from "../../styles/CaseStudy.module.sass";

type PathName = keyof typeof content.casestudy;

const CaseStudy = () => {
  const pathname = location.pathname.split("/").pop() as PathName;
  const { title, subtitle, description } = content.casestudy[pathname];

  return (
    <div className={styles.caseStudy__mobileView}>
      <TextSection
        title={title}
        subtitle={subtitle}
        description={description}
      />
    </div>
  );
};

export default CaseStudy;
