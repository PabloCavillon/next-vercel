import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'


export default function ContactPage() {
  return (
    <MainLayout>
        <h1>Contact</h1>
        <h1 className={'title'}>
          Ir a <Link href='/home'> Home</Link>
        </h1>
        <p>
          HOLA!!!
          <code className={'code'}>pages/contact.js</code>
        </p>
    </MainLayout>
  )
}