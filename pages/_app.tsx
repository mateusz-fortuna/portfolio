import "../styles/globals.sass";
import Layout from "../components/Layout";
import Home from ".";
import { useRef } from "react";
import { useIsLandscape } from "../hooks/useIsLandscape";
import HorizontalNavigation from "../components/HorizontalNavigation";

function MyApp() {
  const hasScreenLandscapeOrientation = useIsLandscape();
  const containerRef = useRef<HTMLDivElement | null>(null);

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
