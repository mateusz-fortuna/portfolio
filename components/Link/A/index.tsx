import { CSSProperties } from "react";
import AnimatedText from "../../AnimatedText";
import ExternalLinkIcon from "../../ExternalLinkIcon";

export type Props = {
  href: string;
  children: string;
  isTargetBlank?: boolean;
  nth?: number;
  style?: CSSProperties;
};

const A = ({ href, isTargetBlank, style, children, nth }: Props) => (
  <a
    href={href}
    target={isTargetBlank ? "_blank" : undefined}
    rel="noreferrer"
    style={style}
  >
    <AnimatedText nth={nth ? nth + 1 : undefined}>{children}</AnimatedText>
    {isTargetBlank && <ExternalLinkIcon />}
  </a>
);

export default A;
