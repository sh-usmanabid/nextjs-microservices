import dynamic from 'next/dynamic'

const MicroService1 = dynamic(
    () => import("app1/microService1"),
    { ssr: false }
)

const App1 = () => (<MicroService1 />)

export default App1
