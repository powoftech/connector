import CTA from '@/app/_components/cta'
import Features from '@/app/_components/features'
import Footer from '@/app/_components/footer'
import Header from '@/app/_components/header'
import Hero from '@/app/_components/hero'

export default function Page() {
  // await new Promise((resolve) => setTimeout(resolve, 100000))

  return (
    <>
      <Header showSignIn={true} showSignUp={true} className="" />

      <main className="">
        <div className="grid">
          <Hero />
          <Features />
          <CTA />
        </div>
      </main>

      <Footer />
    </>
  )
}
