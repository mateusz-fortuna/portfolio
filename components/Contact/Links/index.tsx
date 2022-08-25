import { content } from "../../../public/content";
import Link from "../../Link";
import variables from "../../../styles/variables.module.sass";

const Links = () => {
  const { email, github, linkedin } = content.home.contact;

  const emailStyle = {
    fontSize: "1.25rem",
  };

  return (
    <>
      <div style={{ marginBottom: variables.marginStandard }}>
        <Link label="e-mail:" href={email.href} nth={1} style={emailStyle}>
          {email.text}
        </Link>
      </div>
      <Link label="LinkedIn:" href={linkedin.href} nth={3} isTargetBlank>
        {linkedin.text}
      </Link>
      <Link label="Github:" href={github.href} nth={5} isTargetBlank>
        {github.text}
      </Link>
    </>
  );
};

export default Links;
