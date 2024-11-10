import { LogoLight } from '@/app/_images/logo'
import ThemeSwitcher from '@/components/theme-switcher'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function Footer({ className }: { className?: string }) {
  return (
    <>
      <hr className="bg-secondary" />
      <footer
        className={cn(
          'relative m-auto flex max-w-7xl flex-nowrap items-center justify-between p-3',
          className,
        )}
      >
        <div className="flex h-9 flex-shrink flex-nowrap items-center gap-x-2">
          <Image
            src={LogoLight.default}
            alt="Connector Logo"
            className="h-5 w-auto dark:invert"
            priority
          />
          <p className="text-sm font-light text-muted-foreground">
            © {new Date().getFullYear()}
          </p>
        </div>
        <ThemeSwitcher />
      </footer>
    </>
  )
}
