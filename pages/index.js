import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LumeDAO</title>
        <meta name="LumeDAO" content="A shapeshifting scaffold and canvas for the most immersive events, experiences and web3 enabled creative gatherings at the intersection of art & technology." />
        <link rel="icon" href="/faviconn.ico" />
      </Head>
      <Header />

      <main className={styles.main}>
        <video autoPlay muted loop className={styles.video}>
          <source src="/video/home.mp4" type="video/mp4" />
        </video>
      </main>

      <Footer />
    </div>
  );
}
