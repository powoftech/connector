import { BannerLight } from '@/app/_images/banner'
import { Logo } from '@/app/_images/logo'
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { FaGoogle, FaMicrosoft } from 'react-icons/fa'
// import {
//   FaBriefcase,
//   FaGamepad,
//   FaLaptop,
//   FaNewspaper,
//   FaPlay,
//   FaUsers,
// } from 'react-icons/fa'

export default async function Page() {
  // await new Promise((resolve) => setTimeout(resolve, 100000))

  return (
    <>
      {/* Navigation Bar */}
      <nav
        className="relative m-auto flex max-w-6xl flex-nowrap items-center justify-between px-4 py-3 lg:pb-4 lg:pt-3"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="z-0 mr-auto flex min-h-12 items-center md:z-[100]"
        >
          <span className="sr-only">Connector</span>
          <div className="order-1 flex w-max items-center gap-x-1">
            <Image
              src={Logo}
              alt="Connector Logo"
              className="w-8 dark:invert"
              priority
            />
            <p className="mobile:block hidden w-fit font-title text-2xl font-medium leading-none">
              CONNECTOR
            </p>
          </div>
        </Link>
        {/* <ul className="order-last ml-auto flex w-full items-center justify-between overflow-x-auto pt-2 md:order-3 md:ml-8 md:mr-6 md:w-max md:justify-start md:pt-0">
          <li>
            <Link
              href="/"
              className="mx-0 flex min-h-12 w-16 flex-col items-center justify-center text-neutral-500 hover:text-primary md:mx-2"
            >
              <FaUsers className="flex h-6 w-6 flex-shrink-0 justify-center" />
              <span className="text-center text-xs font-normal leading-tight">
                People
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="mx-0 flex min-h-12 w-16 flex-col items-center justify-center text-neutral-500 hover:text-primary md:mx-2"
            >
              <FaBriefcase className="flex h-6 w-6 flex-shrink-0 justify-center" />
              <span className="text-center text-xs font-normal leading-tight">
                Jobs
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="mx-0 flex min-h-12 w-16 flex-col items-center justify-center text-neutral-500 hover:text-primary md:mx-2"
            >
              <FaNewspaper className="flex h-6 w-6 flex-shrink-0 justify-center" />
              <span className="text-center text-xs font-normal leading-tight">
                Articles
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="mx-0 flex min-h-12 w-16 flex-col items-center justify-center text-neutral-500 hover:text-primary md:mx-2"
            >
              <FaPlay className="flex h-6 w-6 flex-shrink-0 justify-center" />
              <span className="text-center text-xs font-normal leading-tight">
                Learning
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="mx-0 flex min-h-12 w-16 flex-col items-center justify-center text-neutral-500 hover:text-primary md:mx-2"
            >
              <FaGamepad className="flex h-6 w-6 flex-shrink-0 justify-center" />
              <span className="text-center text-xs font-normal leading-tight">
                Games
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="mx-0 flex min-h-12 w-24 flex-col items-center justify-center border-l-[1px] border-r-0 border-solid border-border px-2 text-neutral-500 hover:text-primary md:mx-2 md:border-r-[1px]"
            >
              <FaLaptop className="flex h-6 w-6 flex-shrink-0 justify-center" />
              <span className="text-center text-xs font-normal leading-tight">
                Get the app
              </span>
            </Link>
          </li>
        </ul> */}
        <div className="order-3 box-border flex min-w-24 flex-shrink-0 flex-wrap justify-end gap-x-2 md:flex-nowrap">
          <Link
            href="/signin"
            className={`${buttonVariants({ variant: 'outline' })} ml-6 h-min min-h-12 px-6 py-3 text-center text-base font-semibold`}
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className={`${buttonVariants({ variant: 'default' })} h-min min-h-12 px-6 py-3 text-center text-base font-semibold`}
          >
            Join now
          </Link>
        </div>
      </nav>
      {/* Main Content */}
      <main
        className="flex flex-col items-center overflow-hidden"
        role="main"
        id="main-content"
      >
        <section className="relative flex min-h-0 w-full max-w-6xl flex-col flex-nowrap items-center justify-between px-4 pt-6 md:min-h-[36rem] md:flex-row md:pt-12">
          <div className="relative w-full flex-shrink-0 self-start pr-0 md:w-[55%] md:pr-12">
            <h1 className="pb-6 text-center text-3xl font-normal leading-tight text-muted-foreground md:w-128 md:pb-0 md:text-left md:text-[2.5rem]">
              Welcome to your professional community
            </h1>
            <div className="mt-0 grid w-full max-w-[400px] gap-y-6 place-self-center md:mt-6 md:w-[429px] md:place-self-auto">
              <Link
                href="/"
                className={`${buttonVariants({ variant: 'default' })} block h-min min-h-10 w-full px-6 py-2 text-center text-base font-semibold md:w-auto`}
              >
                <FaGoogle />
                Continue with Google<span className="text-destructive">*</span>
              </Link>
              <Link
                href="/"
                className={`${buttonVariants({ variant: 'default' })} block h-min min-h-10 w-full px-6 py-2 text-center text-base font-semibold md:w-auto`}
              >
                <FaMicrosoft />
                Continue with Microsoft
                <span className="text-destructive">*</span>
              </Link>
              <Link
                href="/signin"
                className={`${buttonVariants({ variant: 'outline' })} block h-min min-h-10 w-full px-6 py-2 text-center text-base font-semibold md:w-auto`}
              >
                Sign in with email
              </Link>

              <p className="pb-4 text-center text-xs text-muted-foreground">
                By continuing, you agree to our{' '}
                <Link
                  // href="/legal/terms-of-use"
                  href="/"
                  className="font-medium text-primary hover:underline"
                >
                  Terms of Use
                </Link>{' '}
                and{' '}
                <Link
                  // href="/legal/privacy-policy"
                  href="/"
                  className="font-medium text-primary hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
            <p className="my-4 hidden w-full text-center md:block md:w-[25rem]">
              New to Connector?{' '}
              <Link href="/signup" className="font-bold hover:underline">
                Join now
              </Link>
            </p>
          </div>
          <Image
            src={BannerLight}
            alt="Banner Illustration"
            className="relative z-[-100] hidden h-[26rem] w-auto place-self-start dark:invert md:block"
            priority
          />
          {/* <Image
            src={BannerDark}
            alt="Banner Illustration"
            className="hidden dark:block "
            priority
          />
          <Image
            src={BannerLight}
            alt="Banner Illustration"
            className="dark:hidden"
            priority
          /> */}
        </section>
      </main>
      {/* Footer */}
      <footer></footer>
    </>
  )
}
