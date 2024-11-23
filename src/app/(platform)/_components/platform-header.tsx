"use client";

import {
  NavigationItemDesktop,
  NavigationItemMobile,
} from "@/app/(platform)/_components/navigation-item";
import { Icon } from "@/app/_images/icon";
import { HoverBorderGradient } from "@/components/aceternity/hover-border-gradient";
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
  IoContrastOutline,
  IoCreateOutline,
  IoHome,
  IoHomeOutline,
  IoLaptopOutline,
  IoLogOutOutline,
  IoMoonOutline,
  IoNotifications,
  IoNotificationsOutline,
  IoPeople,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoSettingsOutline,
  IoSunnyOutline,
  IoTimeOutline,
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

            <HoverBorderGradient
              as={"div"}
              containerClassName="flex w-full items-center justify-center rounded-full border-0 p-0"
              className="flex w-full items-center justify-center space-x-0 space-y-0 rounded-full border-0 p-0"
            >
              <Button
                variant={"outline"}
                className="flex w-full rounded-full border-0 text-base font-normal text-muted-foreground shadow-[inset_0px_0px_0px_1px] shadow-border transition-all duration-100 ease-in-out hover:bg-background hover:opacity-60 active:opacity-30 md:hidden lg:flex [&_svg]:size-6"
                onClick={() => setOpen(true)}
              >
                <IoSearchOutline />
                <span className="mr-auto">Search</span>
                <div className="pointer-events-none hidden select-none flex-row gap-1 font-mono text-sm xl:flex">
                  <kbd className="flex items-center rounded-md border px-1">
                    Ctrl
                  </kbd>
                  <kbd className="flex items-center rounded-md border px-1">
                    /
                  </kbd>
                </div>
              </Button>
              <Button
                size={"icon"}
                variant={"outline"}
                className="hidden h-10 w-10 rounded-full border-0 text-base font-normal text-muted-foreground shadow-[inset_0px_0px_0px_1px] shadow-border transition-all duration-100 ease-in-out hover:bg-background hover:opacity-60 active:opacity-30 md:flex lg:hidden [&_svg]:size-6"
                onClick={() => setOpen(true)}
              >
                <IoSearchOutline />
              </Button>
            </HoverBorderGradient>
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
                  className="-mr-10 mt-[52px] w-fit min-w-[calc(40px+8px+144px)]"
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
                      onClick={() => router.push(`/in`)}
                    >
                      <IoPersonOutline />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => router.push(`/history`)}
                      disabled
                    >
                      <IoTimeOutline />
                      <span>History</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => router.push(`/settings`)}
                      disabled
                    >
                      <IoSettingsOutline />
                      <span>Settings</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <IoContrastOutline />
                      <span>Theme</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem
                          className={`cursor-pointer ${theme === "system" && "bg-accent"}`}
                          onClick={() => setTheme("system")}
                        >
                          <IoLaptopOutline />
                          <span>System</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className={`cursor-pointer ${theme === "light" && "bg-accent"}`}
                          onClick={() => setTheme("light")}
                        >
                          <IoSunnyOutline />
                          <span>Light</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className={`cursor-pointer ${theme === "dark" && "bg-accent"}`}
                          onClick={() => setTheme("dark")}
                        >
                          <IoMoonOutline />
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
                    <IoLogOutOutline />
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
          "top-[calc(var(--header-height)+8px)] w-[calc(100%-24px)] max-w-[calc(var(--main-content-width)+2*8px)] -translate-x-1/2 translate-y-0 rounded-md",
          "md:top-[calc(var(--header-height)+8px)] md:w-full"
        )}
      >
        <CommandInput
          placeholder="Search"
          className="flex w-[200rem] flex-shrink-0"
        />
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
