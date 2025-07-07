import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Step Into Mucks - Top Muck Boots</title>
        <meta name="description" content="Waterproof. Insulated. Trusted by farmers, hunters, and outdoor pros." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.container}>
        <header className={styles.header}>
          <h1>Tough Conditions? Step Into Muck.</h1>
          <p>Waterproof. Insulated. Trusted by farmers, hunters, and outdoor pros.</p>
          <a href="https://www.jdoqocy.com/click-101363858-15341659" className={`${styles.cta} ${styles.blue}`}>
            Shop Men’s Bestsellers
          </a>
        </header>

        <section className={styles.card}>
          <h2>🥇 Best for Work: Men’s Chore Mid</h2>
          <p>Trusted by farmers, landscapers, and ranchers. 100% waterproof, steel toe, breathable lining—built for daily muck.</p>
          <a href="https://www.jdoqocy.com/click-101363858-15341659" className={`${styles.cta} ${styles.green}`}>
            Buy the Chore Mid
          </a>
        </section>

        <section className={styles.card}>
          <h2>❄️ Best for Winter: Women’s Arctic Sport II Tall</h2>
          <p>Fleece-lined and insulated for deep snow and icy temps. Great for dog walks, chores, and outdoor life.</p>
          <a href="https://www.tkqlhce.com/click-101363858-15909052" className={`${styles.cta} ${styles.blue}`}>
            Shop Arctic Sport Boots
          </a>
        </section>

        <section className={styles.card}>
          <h2>👩‍🌾 Everyday Comfort: Women’s Muckster II</h2>
          <p>Slip-on, flexible, and waterproof. Ideal for gardening, dog walks, and yard chores.</p>
          <a href="https://www.tkqlhce.com/click-101363858-15909052" className={`${styles.cta} ${styles.purple}`}>
            Get the Muckster II
          </a>
        </section>

        <section className={styles.card}>
          <h2>🎁 Gifting Season Picks</h2>
          <ul>
            <li>✨ <strong>Women’s Originals Ankle Boot</strong> -
              <a href="https://www.kqzyfj.com/click-101363858-16962510" className={`${styles.cta} ${styles.gold}`}>
                Buy the Gift Boot
              </a>
            </li>
            <li>🌿 <strong>Garden Booties - Lightweight & Durable</strong> -
              <a href="https://www.dpbolvw.net/click-101363858-16962513" className={`${styles.cta} ${styles.green}`}>
                Shop Garden Boot
              </a>
            </li>
          </ul>
        </section>

        <footer className={styles.footer}>
          <p>*As an affiliate, Step.into Mucks earns from qualifying purchases at no extra cost to you.*</p>
        </footer>
      </main>
    </>
  );
}
