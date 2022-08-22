import { MutableRefObject, ReactNode, useEffect, useRef } from "react";
import { lerp } from "../../helpers/lerp";
import { clamp } from "../../helpers/clamp";
import { toFixed } from "../../helpers/toFixed";

type Props = {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  children: ReactNode;
};

const HorizontalNavigation = ({ children, containerRef }: Props) => {
  const animationFrameRef = useRef(0);

  useEffect(() => {
    const scroll = {
      current: 0,
      target: 0,
      limit: 0,
      ease: 0.05,
    };

    const smoothScroll = () => {
      if (containerRef.current) {
        const scrollLimit =
          containerRef.current.scrollWidth - window.innerWidth;

        scroll.target = clamp(0, scrollLimit, scroll.target);
        const transition = lerp(scroll.current, scroll.target, scroll.ease);
        scroll.current = toFixed(transition, 2);

        containerRef.current.style.transform = `translate3d(-${transition}px,0,0)`;
        animationFrameRef.current = requestAnimationFrame(smoothScroll);
      }
    };
    smoothScroll();

    const setScrollTarget = ({ deltaY }: WheelEvent) => {
      scroll.target += deltaY;
    };

    window.addEventListener("wheel", setScrollTarget);
    return () => {
      window.removeEventListener("wheel", setScrollTarget);
      window.cancelAnimationFrame(animationFrameRef.current);
    };
  }, [containerRef]);
  return <>{children}</>;
};

export default HorizontalNavigation;
