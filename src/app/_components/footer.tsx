import ThemeSwitcher from "@/components/theme-switcher";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Footer({ className }: { className?: string }) {
  return (
    <>
      {/* shadow-[inset_0_1px_0_0] shadow-border */}
      <footer
        className={cn(
          "flex h-fit flex-col shadow-[inset_0_1px_0_0] shadow-border",
          className
        )}
      >
        <div className="mx-auto flex h-full w-full max-w-screen-2xl flex-col gap-4 px-6 py-3">
          <div className="mx-auto flex min-h-6 w-full flex-row items-center justify-between">
            <div className="flex flex-shrink-0 items-center gap-2">
              <p className="text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} Connector
              </p>
            </div>
            <ThemeSwitcher />
          </div>
          <nav className="mx-auto flex w-full flex-col gap-2 text-sm font-medium text-muted-foreground sm:flex-row sm:gap-10">
            <Link className="hover:text-primary" href={`#`}>
              Terms of Service
            </Link>
            <Link className="hover:text-primary" href={`#`}>
              Privacy Policy
            </Link>
            <Link className="hover:text-primary" href={`#`}>
              Cookie Policy
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
}
