import { Icon } from '@/app/_images/icon'
import { LogoLight } from '@/app/_images/logo'
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

// import {
//     IoBriefcase,
//     IoGameController,
//     IoLaptop,
//     IoNewspaper,
//     IoPeople,
//     IoPlay,
// } from 'react-icons/io5'

export default function Header({
  className,
  showSignIn = false,
  showSignUp = false,
}: {
  className?: string
  showSignIn?: boolean
  showSignUp?: boolean
}) {
  return (
    <div className={className}>
      <header
        className="relative m-auto flex max-w-6xl flex-nowrap items-center justify-between px-4 py-3"
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

        {/* <ul className="order-last ml-auto hidden w-full items-center justify-between overflow-x-auto pt-2 md:order-3 md:ml-6 md:mr-6 md:flex md:w-max md:justify-start md:pt-0">
          <li>
            <Link
              href="/"
              className="mx-0 flex min-h-12 w-16 flex-col items-center justify-center text-neutral-500 hover:text-primary md:mx-2"
            >
              <IoPeople className="flex h-6 w-6 flex-shrink-0 justify-center" />
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
              <IoBriefcase className="flex h-6 w-6 flex-shrink-0 justify-center" />
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
              <IoNewspaper className="flex h-6 w-6 flex-shrink-0 justify-center" />
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
              <IoPlay className="flex h-6 w-6 flex-shrink-0 justify-center" />
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
              <IoGameController className="flex h-6 w-6 flex-shrink-0 justify-center" />
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
              <IoLaptop className="flex h-6 w-6 flex-shrink-0 justify-center" />
              <span className="text-center text-xs font-normal leading-tight">
                Get the app
              </span>
            </Link>
          </li>
        </ul> */}

        <div className="order-3 box-border flex min-w-24 flex-shrink-0 flex-wrap justify-end gap-x-2 md:flex-nowrap">
          {showSignIn && (
            <Link
              href="/signin"
              className={`${buttonVariants({ variant: 'outline' })} ml-6 h-min min-h-12 px-6 py-3 text-center text-base font-semibold`}
            >
              Sign In
            </Link>
          )}
          {showSignUp && (
            <Link
              href="/signup"
              className={`${buttonVariants({ variant: 'default' })} h-min min-h-12 px-6 py-3 text-center text-base font-semibold`}
            >
              Join Now
            </Link>
          )}
        </div>
      </header>
    </div>
  )
}
