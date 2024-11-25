"use client";

import AvatarDropdownMenu from "@/app/(platform)/_components/avatar-dropdown-menu";
import {
  NavigationItemDesktop,
  NavigationItemMobile,
} from "@/app/(platform)/_components/navigation-item";
import SearchBox from "@/app/(platform)/_components/search-box";
import { Icon } from "@/app/_images/icon";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Role } from "@prisma/client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IoBriefcase,
  IoBriefcaseOutline,
  IoChatbubbleEllipses,
  IoChatbubbleEllipsesOutline,
  IoCreateOutline,
  IoHome,
  IoHomeOutline,
  IoNotifications,
  IoNotificationsOutline,
  IoPeople,
  IoPeopleOutline,
} from "react-icons/io5";

const navigationItems = [
  {
    name: "Home",
    href: "/feed",
    icon: { filled: <IoHome />, outline: <IoHomeOutline /> },
  },
  {
    name: "My Network",
    href: "/mynetwork",
    icon: { filled: <IoPeople />, outline: <IoPeopleOutline /> },
  },
  {
    name: "Jobs",
    href: "/jobs",
    icon: { filled: <IoBriefcase />, outline: <IoBriefcaseOutline /> },
  },
  {
    name: "Messaging",
    href: "/messaging",
    icon: {
      filled: <IoChatbubbleEllipses />,
      outline: <IoChatbubbleEllipsesOutline />,
    },
  },
  {
    name: "Notifications",
    href: "/notifications",
    icon: { filled: <IoNotifications />, outline: <IoNotificationsOutline /> },
  },
];

export default function PlatformHeader({ className }: { className?: string }) {
  const session = useSession();
  const pathname = usePathname();

  return (
    <>
      <header
        className={cn(
          "flex h-[var(--header-height)] w-full flex-row items-center",
          className
        )}
      >
        <div className="mx-auto flex w-full max-w-[100vw] flex-row items-center justify-between gap-2 px-6 md:gap-4">
          <div
            className={cn(
              "flex w-full min-w-fit flex-row items-center justify-start gap-2",
              "md:w-fit",
              "lg:w-[calc(var(--left-sidebar-width)-120px)] lg:flex-shrink-0",
              "xl:w-[var(--left-sidebar-width)]"
            )}
          >
            <Link
              href={`/`}
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center"
            >
              <span className="sr-only hidden">Connector</span>
              <Image
                src={Icon.default}
                alt="Connector Icon"
                className="h-8 w-auto dark:invert"
                priority
              />
            </Link>

            <SearchBox />
          </div>

          <div
            className={cn(
              "hidden h-[var(--header-height)] flex-row flex-nowrap items-center justify-between gap-1 overflow-hidden",
              "md:flex md:w-[calc(var(--main-content-width)-240px)] lg:w-[var(--main-content-width)]"
            )}
          >
            {navigationItems.map((item) => (
              <NavigationItemDesktop
                key={item.href}
                href={item.href}
                currentPath={pathname}
                icon={item.icon}
              />
            ))}
          </div>

          {session.status === "loading" ? (
            <Skeleton
              className={cn(
                "h-10 w-fit min-w-[40px] rounded-full",
                "md:min-w-[calc(2*40px+8px)]",
                "lg:w-[calc(var(--right-sidebar-width)-120px)] lg:flex-shrink-0",
                "xl:w-[var(--right-sidebar-width)]"
              )}
            />
          ) : (
            <div
              className={cn(
                "flex w-fit min-w-fit flex-row items-center justify-end gap-2",
                "md:min-w-[calc(2*40px+8px)]",
                "lg:w-[calc(var(--right-sidebar-width)-120px)] lg:flex-shrink-0",
                "xl:w-[var(--right-sidebar-width)]"
              )}
            >
              {session.data?.user.profile.role === Role.RECRUITER && (
                <>
                  <Button
                    asChild
                    size="default"
                    variant="ghost"
                    className={cn(
                      "group hidden w-10 rounded-full transition-all duration-300 ease-in-out hover:w-36 lg:flex [&_svg]:size-6"
                    )}
                  >
                    <Link href={`/job-posting`}>
                      <IoCreateOutline />
                      <span className="mx-auto hidden overflow-hidden transition-all duration-1000 ease-in-out group-hover:inline">
                        Job posting
                      </span>
                    </Link>
                  </Button>

                  <Button
                    asChild
                    size="icon"
                    variant="ghost"
                    className={cn("rounded-full lg:hidden [&_svg]:size-6")}
                  >
                    <Link href={`/job-posting`}>
                      <IoCreateOutline />
                    </Link>
                  </Button>
                </>
              )}

              <AvatarDropdownMenu
                image={session.data?.user.image ?? ""}
                name={session.data?.user.name ?? ""}
              />
            </div>
          )}
        </div>
      </header>

      <nav className="fixed bottom-0 z-50 flex h-[var(--header-height)] w-screen flex-row bg-background md:hidden">
        {navigationItems.map((item) => (
          <NavigationItemMobile
            key={item.href}
            href={item.href}
            name={item.name}
            currentPath={pathname}
            icon={item.icon}
          />
        ))}
      </nav>
    </>
  );
}
