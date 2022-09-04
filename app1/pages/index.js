import Head from 'next/head'
import MicroService1 from '../components/microService1'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Micro-Service App 1</title>
        <meta name="description" content="This is Micro-Service App 1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MicroService1 />
    </div>
  )
}
