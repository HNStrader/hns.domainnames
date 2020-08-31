import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         <a href="https://namebase.io">Buy.HNS.Domainnames</a>
        </h1>

     
        <div className={styles.grid}>
          <a href="https://handshake.org/" className={styles.card}>
            <h3>Handshake</h3>
            <p>Decentralized naming</p>
          </a>

          <a href="https://www.namebase.io/" className={styles.card}>
            <h3>Namebase</h3>
            <p>Own your name on the new Internet</p>
          </a>

          <a
            href="https://hnsbroker.com"
            className={styles.card}
          >
            <h3>HNSBroker</h3>
            <p>Buy and Selling HNS Domainnames</p>
          </a>

          <a
            href="https://hns.to/"
            className={styles.card}
          >
            <h3>HNS.TO</h3>
            <p>
              The gateway to Handshake domains.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://hnsbroker.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Me
         
        </a>
      </footer>
    </div>
  )
}
