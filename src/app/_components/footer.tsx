import { Icon } from '@/app/_images/icon'
import { LogoLight } from '@/app/_images/logo'
import ThemeSwitcher from '@/components/theme-switcher'
import Image from 'next/image'

export default function Footer({ className }: { className?: string }) {
  return (
    <div className={className}>
      {/* <div className="border-t"></div> */}
      <hr className="bg-secondary" />
      <footer className="relative m-auto flex max-w-6xl flex-nowrap items-center justify-between px-4 py-3">
        <div className="box-border flex flex-shrink flex-row items-center justify-start gap-2 min-h-9">
          <Image
            src={LogoLight.default}
            alt="Connector Logo"
            className="hidden h-5 w-auto dark:invert sm:block"
            priority
          />
          <Image
            src={Icon.default}
            alt="Connector Icon"
            // height={32}
            // width={32}
            className="block h-5 w-auto dark:invert sm:hidden"
            priority
          />
          <p className="text-sm font-light text-muted-foreground">
            © {new Date().getFullYear()}
          </p>
        </div>
        <div className="box-border flex flex-shrink flex-row items-center justify-end">
          <ThemeSwitcher />
        </div>
      </footer>
    </div>
  )
}
