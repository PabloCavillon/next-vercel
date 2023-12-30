import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'
import { DarkLayout } from '../../components/layouts/DarkLayout'

export default function PricingPage() {
  return (
    <>
      <h1>Pricing</h1>
      <h1 className={'title'}>
        Ir a <Link href='/'> Home</Link>
      </h1>
      <p>
        HOLA!!!
        <code className={'code'}>pages/pricing.js</code>
      </p>
    </>
  )
}

PricingPage.getLayout = function getLayout (page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}