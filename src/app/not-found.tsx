import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import Footer from './_components/footer'
import Header from './_components/header'

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex h-[calc(100vh-72px-1px-60px)] min-h-fit">
        <div className="m-auto flex flex-col items-center gap-y-8">
          <h1 className="w-full text-center text-4xl font-extrabold">
            Page not found
          </h1>
          <p>We couldn&apos;t find the page you were looking for.</p>
          <Link
            href="/"
            className={`${buttonVariants({ variant: 'outline', size: 'lg' })}`}
          >
            Go to your feed
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
