import {
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { lerp } from "../../helpers/lerp";
import { clamp } from "../../helpers/clamp";
import { useRouter } from "next/router";

type Props = {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  children: ReactNode;
};

const HorizontalNavigation = ({ children, containerRef }: Props) => {
  const animationFrameRef = useRef(0);
  const [scroll, setScroll] = useState({
    current: 0,
    target: 0,
    limit: 0,
    ease: 0.05,
  });
  const router = useRouter();

  useEffect(() => {
    // ----------HANDLE SMOOTH SCROLLING---------- //

    const smoothScroll = () => {
      if (containerRef.current) {
        const scrollLimit =
          containerRef.current.scrollWidth - window.innerWidth;
        scroll.target = clamp(0, scrollLimit, scroll.target);
        const transition = lerp(scroll.current, scroll.target, scroll.ease);
        scroll.current = transition;
        containerRef.current.style.transform = `translate3d(-${transition}px,0,0)`;
        animationFrameRef.current = requestAnimationFrame(smoothScroll);
      }
    };
    smoothScroll();

    // ----------HANDLE MOUSE WHEEL---------- //

    const setScrollTarget = ({ deltaY }: WheelEvent) => {
      scroll.target += deltaY;
    };

    // ----------HANDLE HASH CHANGE---------- //

    const introElement = containerRef.current?.children[0];

    const posX = {
      intro: 0,
      projects: introElement?.clientWidth || 0,
      contact: containerRef.current?.scrollWidth || 0,
    };

    const goToHashPosition = () => {
      const hash = document.location.hash.slice(1);
      switch (hash) {
        case "intro":
          setScroll((scroll) => ({ ...scroll, target: posX.intro }));
          break;
        case "projects":
          setScroll((scroll) => ({ ...scroll, target: posX.projects }));
          break;
        case "contact":
          setScroll((scroll) => ({ ...scroll, target: posX.contact }));
          break;
        default:
          scroll.target = 0;
      }
    };

    // ----------EVENT LISTENERS---------- //

    router.events.on("hashChangeComplete", goToHashPosition);
    window.addEventListener("wheel", setScrollTarget);
    return () => {
      router.events.off("hashChangeComplete", goToHashPosition);
      window.removeEventListener("wheel", setScrollTarget);
      window.cancelAnimationFrame(animationFrameRef.current);
    };
  }, [containerRef, router, scroll]);
  return <>{children}</>;
};

export default HorizontalNavigation;
