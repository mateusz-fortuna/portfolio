import { GetServerSideProps } from "next";
import { content } from "../../public/content";
import TextSection from "../../components/TextSection";
import styles from "../../styles/CaseStudy.module.sass";

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
  const { title, subtitle, description } = content.casestudy[id];

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
