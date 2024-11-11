'use client'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

export default function CTA() {
  return (
    <div className="relative flex h-screen min-h-fit w-full flex-col items-center justify-center bg-secondary antialiased sm:h-[50vh]">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-3 p-6 sm:gap-6">
        <p className="relative z-10 w-full bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-center text-4xl font-bold text-transparent sm:text-6xl">
          Ready to Elevate
          <br className="lg:hidden" /> Your Career?
        </p>
        <p className="relative z-10 mx-auto my-2 w-full text-center text-neutral-500 md:text-xl">
          Join Connector, the professional network that empowers your career
          growth and connects you with opportunities worldwide.
        </p>
        <Link
          href="/signup"
          className={`${buttonVariants({ variant: 'default' })} relative z-10`}
        >
          Join Now
        </Link>
      </div>
      <BackgroundBeams />
    </div>
  )
}
