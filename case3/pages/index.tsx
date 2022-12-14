import type { NextPage } from 'next'
import Head from 'next/head'
import { WeeksWidget } from '../components/WeeksWidget'
const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Case3</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="d-flex justify-content-center align-items-center">
        <WeeksWidget />
      </main>
    </div>
  )
}

export default Home
