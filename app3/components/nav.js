import Link from 'next/link'

const Nav = () => (
  <div>
    <Link href="/microService1">Micro-Service 1</Link>
    <Link href="/">Home</Link>
    <Link href="/microService2">Micro-Service 2</Link>
  </div>
)

export default Nav
