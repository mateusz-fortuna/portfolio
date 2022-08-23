import "../styles/globals.sass";
import { useEffect, useRef } from "react";
import { useIsLandscape } from "../hooks/useIsLandscape";
import Layout from "../components/Layout";
import Home from ".";
import HorizontalNavigation from "../components/HorizontalNavigation";

function MyApp() {
  const hasScreenLandscapeOrientation = useIsLandscape();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.location.hash = "";
  }, []);

  return (
    <Layout>
      {hasScreenLandscapeOrientation ? (
        <HorizontalNavigation containerRef={containerRef}>
          <Home ref={containerRef} />
        </HorizontalNavigation>
      ) : (
        <Home />
      )}
    </Layout>
  );
}

export default MyApp;
