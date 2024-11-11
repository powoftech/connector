'use client'
import { BackgroundBeams } from '@/components/aceternity/background-beams'

export default function CTA() {
  return (
    <div className="relative flex min-h-[calc(100vh-164px-64px)] w-full flex-col items-center justify-center bg-neutral-950 sm:min-h-[calc(100vh-100px-64px)]">
      <div className="mx-auto flex min-h-fit max-w-screen-xl flex-col items-center justify-center gap-3 p-6">
        <p className="relative z-10 w-full bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-center text-4xl font-bold text-transparent sm:text-6xl">
          Ready to Elevate
          <br className="lg:hidden" /> Your Career?
        </p>
        <p className="relative z-10 mx-auto my-2 w-full text-center text-neutral-500 md:text-xl">
          Join Connector, the professional network that empowers your career
          growth and connects you with opportunities worldwide.
        </p>
        {/* <Link
          href="/signup"
          className={`${buttonVariants({ variant: 'default' })} relative z-10 bg-neutral-50 text-neutral-950 hover:bg-neutral-50/90`}
        >
          Join Now
        </Link> */}
      </div>
      <BackgroundBeams />
    </div>
  )
}
