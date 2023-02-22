import Head from 'next/head';
import styles from '../styles/Home.module.css';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import logo from '../images/logo_trans.png';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hero Game Countdown</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <main>
        <Image className='logo' src={logo} width={200} height={200} />
        <h1 className={styles.title}>
          Hero Game 
        </h1>
        <p className={styles.subtitle}>
          Coming soon...
        </p>
        <FlipClockCountdown className='flip-clock' labelStyle={{ fontSize: 16, fontWeight: 500, textTransform: 'uppercase'}} digitBlockStyle={{ width: 40, height: 60, fontSize: 30 }} to='2023-03-07T16:00:00.000Z' />
      </main>

      <style jsx>{`
        main {
          background: #000000;
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #000000;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          background: #000000;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
