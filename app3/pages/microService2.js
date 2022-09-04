import dynamic from 'next/dynamic'

const MicroService2 = dynamic(
  () => import("app2/microService2"),
  { ssr: false }
)

const App2 = () => (<MicroService2 />)

export default App2
