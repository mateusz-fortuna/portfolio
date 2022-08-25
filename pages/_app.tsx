import { AppProps } from "next/app";
import { useEffect } from "react";
import Layout from "../components/Layout";
import "../styles/globals.sass";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    window.location.hash = "";
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
