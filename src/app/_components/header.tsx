import { Icon } from "@/app/_images/icon";
import { LogoLight } from "@/app/_images/logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Header({
  className,
  showJoin = false,
}: {
  className?: string;
  showJoin?: boolean;
}) {
  return (
    <header className={cn("flex h-16 w-full flex-row items-center", className)}>
      <div className="mx-auto flex w-full max-w-screen-xl flex-row items-center justify-between px-6">
        <Link href="/" className="flex flex-shrink-0">
          <span className="sr-only">Connector</span>
          <Image
            src={LogoLight.default}
            alt="Connector Logo"
            // height={32}
            // width={150}
            className="hidden h-8 w-auto dark:invert sm:block"
            priority
          />
          <Image
            src={Icon.default}
            alt="Connector Icon"
            // height={32}
            // width={32}
            className="block h-8 w-auto dark:invert sm:hidden"
            priority
          />
        </Link>

        <div className="flex flex-shrink-0 flex-row flex-nowrap items-center gap-3">
          {showJoin && (
            <Link
              href="/join"
              className={cn(` ${buttonVariants({ variant: "default" })} `, "")}
            >
              Join Now
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
