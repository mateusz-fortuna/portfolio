import type { NextPage } from "next";
import Head from "next/head";
import Intro from "../components/Intro";
import styles from "../styles/Home.module.sass";

const Home: NextPage = () => {
  return (
    <div className={styles.home__container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta lang="en-gb" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
    </div>
  );
};

export default Home;
