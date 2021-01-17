import Head from "next/head";
import styles from "../styles/Home.module.css";
import LoginButton from "../components/login";
import Profile from "../components/profile";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cambios Flaites</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginButton />
      <Profile />

      <main className={styles.main}>
        <div>
          <label htmlFor="email">
            Email:
            <input id="email" type="email" name="user[email]" />
          </label>
          <label htmlFor="password">
            Contraseña:
            <input id="password" type="password" name="user[password]" />
          </label>
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
