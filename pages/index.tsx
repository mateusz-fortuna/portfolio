import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef } from "react";
import { useIsLandscape } from "../hooks/useIsLandscape";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import styles from "../styles/Home.module.sass";

const Home: NextPage = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const hasDeviceLandscapeOrientation = useIsLandscape();

  useEffect(() => {
    const handleHorizontalScrolling = (event: WheelEvent) => {
      if (hasDeviceLandscapeOrientation && containerRef.current) {
        containerRef.current.scrollLeft += event.deltaY;
      }
    };
    window.addEventListener("wheel", handleHorizontalScrolling);
    return () => {
      window.removeEventListener("wheel", handleHorizontalScrolling);
    };
  }, [hasDeviceLandscapeOrientation]);

  return (
    <div className={styles.home__container} ref={containerRef}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta lang="en-gb" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
      <Projects />
    </div>
  );
};

export default Home;
