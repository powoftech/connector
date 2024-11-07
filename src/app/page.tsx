import logo from '@/app/logo.svg'
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import {
  FaBriefcase,
  FaGamepad,
  FaLaptop,
  FaNewspaper,
  FaPlay,
  FaUsers
} from 'react-icons/fa'

export default async function Page() {
  // await new Promise((resolve) => setTimeout(resolve, 1000))

  return (
    <>
      {/* Header */}
      <nav className="relative m-auto flex max-w-6xl flex-wrap items-center justify-between px-4 py-3 md:flex-nowrap">
        <Link
          href="/"
          className="z-0 mr-auto flex min-h-12 items-center md:z-[100]"
        >
          <span className="sr-only">Connector</span>
          <div className="order-1 flex items-center gap-x-2">
            <Image
              src={logo}
              alt="Connector Logo"
              className="h-12 w-12 dark:invert"
              priority
            />
            <h1 className="hidden text-2xl font-bold md:block w-44">Connector</h1>
          </div>
        </Link>
        <ul className="order-last ml-auto flex w-full items-center justify-between overflow-x-auto pt-2 md:order-3 md:w-max md:justify-start md:pt-0">
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
        <div className="order-3 flex min-w-24 flex-shrink-0 flex-wrap justify-end gap-x-2 md:flex-nowrap">
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
      {/* Content */}
      <div>
        <p>Content</p>
      </div>
    </>
  )
}
