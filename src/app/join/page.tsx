import Footer from '@/app/_components/footer'
import Header from '@/app/_components/header'
import getSession from '@/lib/get-session'
import { redirect } from 'next/navigation'
import Main from './_components/main'

export default async function Page() {
  const session = await getSession()

  if (!!session) {
    redirect('/feed')
  }

  return (
    <>
      <Header />

      <Main />

      <Footer />
    </>
  )
}
