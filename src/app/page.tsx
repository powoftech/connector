import { BannerLight } from '@/app/_images/banner'
import { Icon } from '@/app/_images/icon'
import { LogoLight } from '@/app/_images/logo'
import ThemeSwitcher from '@/components/theme-switcher'
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import {
  IoLogoApple,
  IoLogoGoogle,
  IoLogoMicrosoft,
  IoMail,
} from 'react-icons/io5'
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
      <header
        className="relative m-auto flex max-w-6xl flex-nowrap items-center justify-between px-4 py-3 lg:pb-4 lg:pt-3"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="z-0 mr-auto flex min-h-12 items-center md:z-[100]"
        >
          <span className="sr-only">Connector</span>
          <Image
            src={LogoLight.default}
            alt="Connector Logo"
            // height={32}
            // width={150}
            className="hidden h-10 w-auto dark:invert sm:block"
            priority
          />
          <Image
            src={Icon.default}
            alt="Connector Icon"
            // height={32}
            // width={32}
            className="block h-10 w-auto dark:invert sm:hidden"
            priority
          />
        </Link>
        {/*         
        <ul className="order-last ml-auto hidden w-full items-center justify-between overflow-x-auto pt-2 md:order-3 md:ml-8 md:mr-6 md:flex md:w-max md:justify-start md:pt-0">
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
        </ul>
         */}
        <div className="order-3 box-border flex min-w-24 flex-shrink-0 flex-wrap justify-end gap-x-2 md:flex-nowrap">
          <Link
            href="/sign-in"
            className={`${buttonVariants({ variant: 'outline' })} ml-6 h-min min-h-12 px-6 py-3 text-center text-base font-semibold`}
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className={`${buttonVariants({ variant: 'default' })} h-min min-h-12 px-6 py-3 text-center text-base font-semibold`}
          >
            Join Now
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main
        className="flex min-h-[calc(100vh-72px-64px)] flex-col items-center overflow-hidden"
        role="main"
        id="main-content"
      >
        <section className="relative flex min-h-0 w-full max-w-6xl flex-col flex-nowrap items-center justify-between px-4 pt-6 md:min-h-[36rem] md:flex-row md:pt-12">
          <div className="relative w-full flex-shrink-0 self-start md:w-[55%] lg:w-[50%] xl:w-[45%]">
            <h1 className="pb-6 text-center text-3xl font-normal leading-tight text-muted-foreground md:w-max md:pb-0 md:text-left md:text-[2.5rem]">
              Welcome to your
              <br />
              professional community
            </h1>
            <div className="mx-auto mt-0 grid w-full max-w-[400px] gap-y-6 md:mx-0 md:mt-6 md:w-[429px]">
              <Link
                href="/sign-in"
                className={`${buttonVariants({ variant: 'outline' })} block h-min min-h-10 w-full px-6 py-2 text-center text-base font-semibold md:w-auto`}
              >
                <IoMail />
                Sign In with Email
              </Link>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>

              <Link
                href="/"
                className={`${buttonVariants({ variant: 'default' })} block h-min min-h-10 w-full px-6 py-2 text-center text-base font-semibold md:w-auto`}
              >
                <IoLogoGoogle />
                Google
              </Link>
              <Link
                href="/"
                className={`${buttonVariants({ variant: 'default' })} block h-min min-h-10 w-full px-6 py-2 text-center text-base font-semibold md:w-auto`}
              >
                <IoLogoMicrosoft />
                Microsoft
              </Link>
              <Link
                href="/"
                className={`${buttonVariants({ variant: 'default' })} block h-min min-h-10 w-full px-6 py-2 text-center text-base font-semibold md:w-auto`}
              >
                <IoLogoApple />
                Apple
              </Link>

              <p className="pb-4 text-center text-xs text-muted-foreground">
                By continuing, you agree to our{' '}
                <Link
                  // href="/legal/terms-of-service"
                  href="/"
                  className="font-medium text-primary hover:underline"
                >
                  Terms of Service
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
            <p className="my-4 w-full text-center md:w-[25rem]">
              New to Connector?{' '}
              <Link href="/sign-up" className="font-bold hover:underline">
                Join now
              </Link>
            </p>
          </div>
          <Image
            src={BannerLight.default}
            alt="Banner Illustration"
            className="relative z-[-100] hidden h-[30rem] w-auto place-self-start dark:invert md:block"
            priority
          />
        </section>
      </main>

      {/* Footer */}
      <div className="border-t"></div>
      <footer className="relative m-auto flex max-w-6xl flex-nowrap items-center justify-between px-4 py-3">
        <div className="box-border flex flex-shrink flex-row items-center justify-start gap-2">
          <Image
            src={LogoLight.default}
            alt="Connector Logo"
            className="hidden h-7 w-auto dark:invert sm:block"
            priority
          />
          <Image
            src={Icon.default}
            alt="Connector Icon"
            // height={32}
            // width={32}
            className="block h-7 w-auto dark:invert sm:hidden"
            priority
          />
          <p className="text-lg font-light">© {new Date().getFullYear()}</p>
        </div>
        <div className="box-border flex flex-shrink flex-row items-center justify-end">
          <ThemeSwitcher />
        </div>
      </footer>
    </>
  )
}
