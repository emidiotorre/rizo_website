import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rizo</title>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>We are Rizo</h1>

        <p className={styles.subtitle}>Dream, build, repeat.</p>
        <p className={styles.description}>What can we help you with?</p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Crafting code</h3>
            <p>
              Be it Javascript, C# or Golang, don't worry, we have got you
              covered!
            </p>
          </div>

          <div className={styles.card}>
            <h3>Designing Experiences </h3>
            <p>
              We think about flows, and sketch them into screens, ready to be
              born!
            </p>
          </div>

          <div className={styles.card}>
            <h3>Strategy </h3>
            <p>
              Everything we do is part of a quest to make new leads, and
              increase the conversion rates for our clients.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Mantain and manage </h3>
            <p>
              New techonologies are on the rise, and leaders know when it's the
              right moment to take the leap.
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        crafted with&nbsp;<b>love</b>&nbsp;❤️
      </footer>
    </div>
  );
}
