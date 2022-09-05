import dynamic from 'next/dynamic'

const Todos = dynamic(
    () => import("app1/microService1"),
    { ssr: false }
)

const App1 = () => (<Todos />)

export default App1
