import { Icon } from '@/app/_images/icon'
import { LogoLight } from '@/app/_images/logo'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
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
    <header
      className={cn(
        'relative m-auto flex max-w-7xl flex-nowrap items-center justify-between p-3',
        className,
      )}
      aria-label="Primary"
    >
      <Link href="/" className="flex min-h-12 items-center">
        <span className="sr-only">Connector</span>
        <Image
          src={LogoLight.default}
          alt="Connector Logo"
          // height={32}
          // width={150}
          className="hidden h-10 w-auto dark:invert mobile:block"
          priority
        />
        <Image
          src={Icon.default}
          alt="Connector Icon"
          // height={32}
          // width={32}
          className="block h-10 w-auto dark:invert mobile:hidden"
          priority
        />
      </Link>

      <div className="flex min-h-12 flex-shrink-0 flex-nowrap items-center gap-x-1.5">
        {showSignUp && (
          <Link
            href="/signup"
            className={`${buttonVariants({ variant: 'ghost', size: 'default' })} min-h-12 min-w-24 font-semibold`}
          >
            Join Now
          </Link>
        )}
        {showSignIn && (
          <Link
            href="/signin"
            className={`${buttonVariants({ variant: 'outline', size: 'default' })} min-h-12 min-w-24 font-semibold`}
          >
            Sign In
          </Link>
        )}
      </div>
    </header>
  )
}
