import dynamic from 'next/dynamic'

const Faqs = dynamic(
  () => import("app2/microService2"),
  { ssr: false }
)

const App2 = () => (<Faqs />)

export default App2
