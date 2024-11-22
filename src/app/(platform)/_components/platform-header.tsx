"use client";

import {
  NavigationItemDesktop,
  NavigationItemMobile,
} from "@/app/(platform)/_components/navigation-item";
import { Icon } from "@/app/_images/icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Role } from "@prisma/client";
import { signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  IoBriefcase,
  IoBriefcaseOutline,
  IoChatbubbleEllipses,
  IoChatbubbleEllipsesOutline,
  IoChevronDown,
  IoCog,
  IoContrast,
  IoHome,
  IoHomeOutline,
  IoMoon,
  IoNotifications,
  IoNotificationsOutline,
  IoPencil,
  IoPeople,
  IoPeopleOutline,
  IoSearch,
  IoSearchOutline,
  IoSunny,
} from "react-icons/io5";
import { LuHistory, LuLogOut, LuSettings, LuUser } from "react-icons/lu";

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
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const [open, setOpen] = useState(false); // Command Dialog State

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      // Open Command Dialog using Ctrl + / or Cmd + / on Mac
      if (e.key === "/" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <header
        className={cn(
          "flex h-[var(--header-height)] w-full flex-row items-center",
          className
        )}
      >
        <div className="mx-auto flex w-full max-w-[100vw] flex-row items-center justify-between gap-2 px-6">
          <div
            className={cn(
              "flex w-full min-w-fit flex-row items-center justify-between gap-2",
              "md:w-[calc(var(--left-sidebar-width)-120px)] md:flex-shrink-0",
              "lg:w-[calc(var(--left-sidebar-width)-60px)]",
              "xl:w-[var(--left-sidebar-width)]"
            )}
          >
            <Link
              href={`/`}
              className="flex flex-shrink-0 items-center justify-between"
            >
              <span className="sr-only hidden">Connector</span>
              <Image
                src={Icon.default}
                alt="Connector Icon"
                className="h-8 w-auto dark:invert"
                priority
              />
            </Link>
            <Button
              variant="outline"
              className="w-full rounded-full"
              onClick={() => setOpen(true)}
            >
              <IoSearch />
              <span className="mr-auto">Search</span>
              <div className="pointer-events-none hidden select-none flex-row gap-1 font-mono xl:flex">
                <kbd className="flex items-center rounded-md border px-1">
                  Ctrl
                </kbd>
                <kbd className="flex items-center rounded-md border px-1">
                  /
                </kbd>
              </div>
            </Button>
          </div>

          <div
            className={cn(
              "hidden h-[var(--header-height)] flex-row flex-nowrap items-center justify-between gap-1 overflow-hidden",
              "md:flex md:w-[var(--main-content-width)]"
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
                "lg:w-[calc(var(--right-sidebar-width)-120px)] lg:flex-shrink-0",
                "xl:w-[var(--right-sidebar-width)]"
              )}
            />
          ) : (
            <div
              className={cn(
                "flex w-fit min-w-fit flex-row items-center justify-end gap-2",
                "lg:w-[calc(var(--right-sidebar-width)-120px)] lg:flex-shrink-0",
                "xl:w-[var(--right-sidebar-width)]"
              )}
            >
              {session.data?.user.profile.role === Role.RECRUITER && (
                <>
                  <Button
                    asChild
                    size="default"
                    variant="secondary"
                    className={cn(
                      "group w-10 rounded-full p-0 transition-all duration-300 ease-in-out hover:w-32 hover:px-4 hover:py-2 md:flex [&_svg]:size-5"
                    )}
                  >
                    <Link href={`/job-posting`}>
                      <IoPencil />
                      <span className="mx-auto hidden overflow-hidden transition-all duration-1000 ease-in-out group-hover:inline">
                        Post a job
                      </span>
                    </Link>
                  </Button>
                  {/* <Button
                    asChild
                    size="icon"
                    variant="secondary"
                    className={cn(
                      "rounded-full md:hidden",
                      `${pathname === "/job-posting" && "border-2 border-foreground"}`
                    )}
                  >
                    <Link href={`/job-posting`}>
                      <LuPencil />
                    </Link>
                  </Button> */}
                </>
              )}

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="group relative h-10 w-10 cursor-pointer active:scale-95">
                    <Avatar
                      className={cn(
                        "select-none shadow-[inset_0px_0px_0px_1px] shadow-border group-hover:hover:brightness-90 group-active:active:brightness-75"
                      )}
                    >
                      <AvatarImage
                        src={
                          session.data?.user?.image
                            ? session.data?.user?.image
                            : "https://github.com/shadcn.png"
                        }
                      />
                      <AvatarFallback>
                        {session.data?.user?.name?.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <IoChevronDown className="absolute bottom-0 right-0 h-4 w-4 translate-x-[20%] translate-y-[20%] rounded-full border-2 border-background bg-secondary" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="-mr-10 mt-[52px] w-fit min-w-[calc(40px+8px+128px)]"
                  side="left"
                  sideOffset={0}
                >
                  <DropdownMenuLabel>
                    {session.data?.user?.name}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <Link href={`/`}></Link>
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() =>
                        router.push(`/in/${session.data?.user?.id}`)
                      }
                    >
                      <LuUser />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => router.push(`/history`)}
                      disabled
                    >
                      <LuHistory />
                      <span>History</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => router.push(`/settings`)}
                      disabled
                    >
                      <LuSettings />
                      <span>Settings</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <IoContrast />
                      <span>Display</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem
                          className={`cursor-pointer ${theme === "system" && "font-bold"}`}
                          onClick={() => setTheme("system")}
                        >
                          <IoCog />
                          <span>Automatic</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className={`cursor-pointer ${theme === "light" && "font-bold"}`}
                          onClick={() => setTheme("light")}
                        >
                          <IoSunny />
                          <span>Light</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className={`cursor-pointer ${theme === "dark" && "font-bold"}`}
                          onClick={() => setTheme("dark")}
                        >
                          <IoMoon />
                          <span>Dark</span>
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={() => signOut({ redirectTo: "/" })}
                  >
                    <LuLogOut />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>
      </header>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        className={cn(
          "top-[calc(var(--header-height)+8px)] w-[calc(100%-24px)] translate-y-[0%] rounded-md",
          "md:top-[calc(var(--header-height)+8px)] md:w-full"
        )}
      >
        <CommandInput placeholder="Search" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <IoSearchOutline />
              <span>interview tips</span>
            </CommandItem>
            <CommandItem>
              <IoSearchOutline />
              <span>latest in ai</span>
            </CommandItem>
            <CommandItem>
              <IoSearchOutline />
              <span>balancing work and life balance</span>
            </CommandItem>
            <CommandItem>
              <IoSearchOutline />
              <span>remote work</span>
            </CommandItem>
            <CommandItem>
              <IoSearchOutline />
              <span>when&apos;s the best time to switch jobs</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          {/* <CommandGroup heading="History">
          </CommandGroup> */}
        </CommandList>
      </CommandDialog>

      <nav className="fixed bottom-0 z-50 flex h-[var(--header-height)] w-screen flex-row bg-background shadow-[inset_0px_1px_0px_0px] shadow-border md:hidden">
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
