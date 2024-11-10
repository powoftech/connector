import Footer from '@/app/_components/footer'
import Header from '@/app/_components/header'
import { BannerLight } from '@/app/_images/banner'
import { Button, buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import {
  IoLogoApple,
  IoLogoGithub,
  IoLogoGoogle,
  IoMail,
} from 'react-icons/io5'

export default async function Page() {
  // await new Promise((resolve) => setTimeout(resolve, 100000))

  return (
    <>
      <div className="min-h-screen">
        <Header showSignIn={true} showSignUp={true} />

        {/* Main Content */}
        <main className="flex flex-col items-center overflow-hidden">
          <section className="relative flex w-full max-w-7xl flex-col flex-nowrap items-center justify-between p-3 md:flex-row md:py-6">
            <div className="relative mx-auto w-3/4 min-w-fit flex-shrink-0 self-start md:w-1/2">
              <p className="pb-6 text-center text-3xl font-normal leading-tight text-muted-foreground md:w-max md:pb-12 md:text-left md:text-5xl">
                Welcome to your
                <br />
                professional community
              </p>
              <div className="mx-auto grid w-full gap-y-6 pb-6 md:mx-0 md:w-3/4">
                <Link
                  href="/signin"
                  className={`${buttonVariants({ variant: 'outline', size: 'lg' })}`}
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

                <Button size={'lg'}>
                  <IoLogoGoogle />
                  Google
                </Button>
                <Button size={'lg'}>
                  <IoLogoApple />
                  Apple
                </Button>
                <Button size={'lg'}>
                  <IoLogoGithub />
                  GitHub
                </Button>

                <p className="pb-4 text-center text-xs text-muted-foreground">
                  By continuing, you agree to our{' '}
                  <Link
                    // href="/legal/terms-of-service"
                    href="/"
                    className="font-medium text-primary underline"
                  >
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link
                    // href="/legal/privacy-policy"
                    href="/"
                    className="font-medium text-primary underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
              <p className="w-full space-y-1 text-center md:w-3/4">
                <span className="text-muted-foreground">
                  New to Connector?{' '}
                </span>
                <Link
                  href="/signup"
                  className="block font-semibold underline md:inline"
                >
                  Join now
                </Link>
              </p>
            </div>
            <Image
              src={BannerLight.default}
              alt="Banner Illustration"
              className="relative hidden h-[512px] w-auto self-start dark:invert md:block"
              priority
            />
          </section>
        </main>
      </div>

      <Footer />
    </>
  )
}
