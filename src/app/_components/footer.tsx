import { Icon } from '@/app/_images/icon'
import ThemeSwitcher from '@/components/theme-switcher'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer({ className }: { className?: string }) {
  const currentYear = new Date().getFullYear()

  return (
    <>
      {/* shadow-[inset_0_1px_0_0] shadow-border */}
      <footer
        className={cn(
          'flex h-fit flex-col shadow-[inset_0_1px_0_0] shadow-border',
          className,
        )}
      >
        <div className="mx-auto flex h-full w-full max-w-screen-xl flex-col gap-4 px-6 py-4">
          <div className="mx-auto flex min-h-8 w-full flex-row items-center justify-between">
            <div className="flex flex-shrink-0 items-center gap-2">
              <Image
                src={Icon.default}
                alt="Connector Logo"
                className="h-5 w-auto dark:invert"
                priority
              />
              <p className="text-center text-sm text-muted-foreground">
                © {currentYear} Connector.
              </p>
            </div>
            <ThemeSwitcher />
          </div>
          <nav className="mx-auto flex w-full max-w-screen-xl flex-col items-start gap-x-9 gap-y-3 text-muted-foreground sm:flex-row">
            <Link
              className="text-center text-sm font-medium hover:text-primary"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-center text-sm font-medium hover:text-primary"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-center text-sm font-medium hover:text-primary"
              href="#"
            >
              Cookie Policy
            </Link>
          </nav>
        </div>
      </footer>
    </>
  )
}
