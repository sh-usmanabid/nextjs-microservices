import Header from '../components/header'
import '../styles/globals.css'

const sections = [
    { title: 'Home', url: '/' },
    { title: 'Todo List', url: 'microService1' },
    { title: 'FAQs', url: 'microService2' },
];

function MyApp({ Component, pageProps }) {
  return ( 
    <>
        <Header title="NextJS Micro-Services" sections={sections} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
