import Head from "next/head";
import styles from "../styles/Home.module.css";
import LoginButton from "../components/login";
import LogoutButton from "../components/logout";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cambios Flaites</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Bienvenido a Cambios Flaites</h1>

        <p className={styles.description}>
          Para empezar, lo primero que debes hacer es registrarte o loguearte{" "}
          <LoginButton />
          <LogoutButton />
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>Uno</div>
          <div className={styles.card}>Dos</div>
          <div className={styles.card}>Tres</div>
          <div className={styles.card}>Cuatro</div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
