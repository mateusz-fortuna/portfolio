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
  direction: "horizontal" | "vertical";
  containerRef: MutableRefObject<HTMLDivElement | null>;
  children: ReactNode;
};

const Navigation = ({ children, containerRef, direction }: Props) => {
  const animationFrameRef = useRef(0);
  const [scroll, setScroll] = useState({
    current: 0,
    target: 0,
    limit: 0,
    ease: 0.05,
  });
  const router = useRouter();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // ----------HANDLE SMOOTH SCROLLING---------- //

    const smoothScroll = () => {
      if (containerRef.current) {
        const scrollLimit =
          direction === "horizontal"
            ? containerRef.current.scrollWidth - window.innerWidth
            : containerRef.current.scrollHeight - window.innerHeight;

        scroll.target = clamp(0, scrollLimit, scroll.target);
        const transition = lerp(scroll.current, scroll.target, scroll.ease);
        scroll.current = transition;

        containerRef.current.style.transform =
          direction === "horizontal"
            ? `translate3d(-${transition}px,0,0)`
            : `translate3d(0,-${transition}px,0)`;

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
    const hash = document.location.hash.slice(1) as keyof typeof posX;

    const goToHashPosition = () => {
      setScroll((scroll) => ({ ...scroll, target: posX[hash] }));
    };

    if (isFirstRender.current && scroll.target !== posX[hash])
      goToHashPosition();
    isFirstRender.current = false;

    // ----------EVENT LISTENERS---------- //

    router.events.on("hashChangeComplete", goToHashPosition);
    window.addEventListener("wheel", setScrollTarget);
    return () => {
      router.events.off("hashChangeComplete", goToHashPosition);
      window.removeEventListener("wheel", setScrollTarget);
      window.cancelAnimationFrame(animationFrameRef.current);
    };
  }, [containerRef, router, scroll, direction]);
  return <>{children}</>;
};

export default Navigation;
