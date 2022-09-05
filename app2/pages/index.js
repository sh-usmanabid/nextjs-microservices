import Head from 'next/head'
import MicroService2 from '../components/microService2'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Microservice App 2</title>
        <meta name="description" content="This is Microservice App 2" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MicroService2 />
    </div>
  )
}
