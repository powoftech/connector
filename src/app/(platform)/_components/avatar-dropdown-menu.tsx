"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { cn } from "@/lib/utils";
import { signOut } from "next-auth/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  IoChevronDown,
  IoContrastOutline,
  IoLaptopOutline,
  IoLogOutOutline,
  IoMoonOutline,
  IoPersonOutline,
  IoSettingsOutline,
  IoSunnyOutline,
  IoTimeOutline,
} from "react-icons/io5";

export default function AvatarDropdownMenu({
  image,
  name,
}: {
  image: string;
  name: string;
}) {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="group relative h-10 w-10 cursor-pointer active:scale-95">
          <Avatar
            className={cn(
              "select-none shadow-[inset_0px_0px_0px_1px] shadow-border group-hover:hover:brightness-90 group-active:active:brightness-75"
            )}
          >
            <AvatarImage src={image} />
            <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          <IoChevronDown className="absolute bottom-0 right-0 h-4 w-4 translate-x-[20%] translate-y-[20%] rounded-full border-2 border-background bg-secondary" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="-mr-10 mt-[52px] w-fit min-w-[calc(40px+8px+144px)]"
        side="left"
        sideOffset={0}
      >
        <DropdownMenuLabel className="max-w-[var(--right-sidebar-width)] truncate">
          {name}
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
  );
}
