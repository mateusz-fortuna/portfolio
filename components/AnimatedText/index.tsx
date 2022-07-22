import { Transition, TransitionGroup } from "react-transition-group";
import { transitionStyles } from "./transitionStyles";
import styles from "../../styles/AnimatedText.module.sass";

type Props = {
  mount: boolean;
  children: string;
  nth?: number;
  style?: React.CSSProperties;
};

const splitText = (txt: string) => {
  const linesSplittingRegex = /.{1,65}(\s|$)/g;
  return txt.match(linesSplittingRegex)?.map((line) => line.trimEnd()) || [txt];
};

const AnimatedText = ({
  mount,
  children,
  nth = 0,
  style,
}: Props): JSX.Element => {
  const textLines = splitText(children);
  const animationDelay = 50;
  const componentDelay = nth * animationDelay;
  const animationDuration = 1000 + componentDelay;

  return (
    <TransitionGroup>
      <p style={style}>
        {textLines.map((line, index) => (
          <div className={styles.text__wrapper} key={`line${index}`}>
            <Transition
              in={mount}
              timeout={{
                enter: 0,
                exit: animationDuration + index * animationDelay,
              }}
              appear
              unmountOnExit
            >
              {(status) => (
                <span
                  className={`${styles.text}`}
                  style={{
                    transitionDelay: `${
                      index * animationDelay + componentDelay
                    }ms`,
                    ...transitionStyles[status],
                  }}
                >
                  {line}
                </span>
              )}
            </Transition>
          </div>
        ))}
      </p>
    </TransitionGroup>
  );
};

export default AnimatedText;
