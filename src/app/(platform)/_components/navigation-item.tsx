import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavigationItemProps {
  href: string;
  name?: string;
  currentPath: string;
  icon: {
    filled: React.ReactNode;
    outline: React.ReactNode;
  };
}

export function NavigationItemDesktop({
  href,
  currentPath,
  icon,
}: NavigationItemProps) {
  const isActive = currentPath === href;

  return (
    <div
      className={cn(
        "flex h-full w-[calc(var(--main-content-width)/5)] min-w-fit items-center justify-center py-1",
        "transition-all duration-200 ease-in-out",
        isActive ? "shadow-[inset_0px_-2px_0px_0px] shadow-foreground" : ""
      )}
    >
      <Link
        href={href}
        className={cn(
          buttonVariants({ size: "icon", variant: "ghost" }),
          "h-full w-full [&_svg]:size-6",
          "transition-all duration-200",
          isActive ? "hover:bg-background" : ""
        )}
      >
        {isActive ? icon.filled : icon.outline}
      </Link>
    </div>
  );
}

export function NavigationItemMobile({
  href,
  name,
  currentPath,
  icon,
}: NavigationItemProps) {
  const isActive = currentPath === href;

  return (
    <div
      className={cn(
        "flex h-full w-[calc(100vw/5)] min-w-fit items-center justify-center py-1",
        isActive ? "shadow-[inset_0px_2px_0px_0px] shadow-foreground" : ""
      )}
    >
      <Link
        href={href}
        className={cn(
          buttonVariants({ size: "icon", variant: "ghost" }),
          "flex h-full w-full flex-col items-center justify-center gap-1 overflow-hidden text-xs font-normal [&_svg]:size-6",
          isActive ? "hover:bg-background" : ""
        )}
      >
        {isActive ? icon.filled : icon.outline}
        {name}
      </Link>
    </div>
  );
}
