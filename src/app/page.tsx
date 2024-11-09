import Footer from '@/app/_components/footer'
import Header from '@/app/_components/header'
import { BannerLight } from '@/app/_images/banner'
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import {
  IoLogoApple,
  IoLogoGoogle,
  IoLogoMicrosoft,
  IoMail,
} from 'react-icons/io5'

export default async function Page() {
  // await new Promise((resolve) => setTimeout(resolve, 100000))

  return (
    <>
      <Header showSignIn={true} showSignUp={true} />

      {/* Main Content */}
      <main
        className="flex min-h-[calc(100vh-72px-59px)] flex-col items-center overflow-hidden"
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
                href="/signin"
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
              <Link href="/signup" className="font-bold hover:underline">
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

      <Footer />
    </>
  )
}
