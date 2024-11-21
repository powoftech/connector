import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavigationItemProps {
  href: string;
  currentPath: string;
  icon: {
    filled: React.ReactNode;
    outline: React.ReactNode;
  };
}

export default function NavigationItem({
  href,
  currentPath,
  icon,
}: NavigationItemProps) {
  const isActive = currentPath === href;

  return (
    <div
      className={cn(
        "flex h-full w-28 min-w-fit items-center justify-center py-1",
        isActive ? "shadow-[inset_0px_-2px_0px_0px] shadow-foreground" : ""
      )}
    >
      <Link
        href={href}
        className={cn(
          buttonVariants({ size: "icon", variant: "ghost" }),
          "h-full w-full [&_svg]:size-6",
          isActive ? "hover:bg-background" : ""
        )}
      >
        {isActive ? icon.filled : icon.outline}
      </Link>
    </div>
  );
}