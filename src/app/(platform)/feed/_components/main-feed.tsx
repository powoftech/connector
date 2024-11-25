import UserInfoCard from "@/app/(platform)/feed/_components/user-info-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IoBookmark, IoCalendar, IoNewspaper, IoPeople } from "react-icons/io5";

export default function MainFeed() {
  return (
    <main>
      <div className="flex flex-row items-start justify-between gap-4 px-6">
        {/* Left Sidebar */}
        <div
          className={cn(
            "sticky top-[calc(var(--header-height)+16px)] z-10 hidden h-[calc(100vh-var(--header-height)-2*16px)] flex-col items-center gap-4 overflow-y-auto rounded-md bg-background",
            "lg:flex lg:w-[calc(var(--left-sidebar-width)-120px)] lg:flex-shrink-0",
            "xl:w-[var(--left-sidebar-width)]"
          )}
        >
          <UserInfoCard />

          <Separator className="w-[calc(100%-24px)]" />

          <div className="flex w-full flex-col">
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="h-12 w-full justify-start gap-3 px-6 text-base font-medium leading-none tracking-tight [&_svg]:size-6"
            >
              <Link href={"#"}>
                {/* <Link href={`/my-items`}> */}
                <IoBookmark />
                <span>Saved Items</span>
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="ghost"
              className="h-12 w-full justify-start gap-3 px-6 text-base font-medium leading-none tracking-tight [&_svg]:size-6"
            >
              <Link href={"#"}>
                {/* <Link href={`/groups`}> */}
                <IoPeople />
                <span>Groups</span>
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="ghost"
              className="h-12 w-full justify-start gap-3 px-6 text-base font-medium leading-none tracking-tight [&_svg]:size-6"
            >
              <Link href={"#"}>
                {/* <Link href={`/newsletters`}> */}
                <IoNewspaper />
                <span>Newsletters</span>
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="ghost"
              className="h-12 w-full justify-start gap-3 px-6 text-base font-medium leading-none tracking-tight [&_svg]:size-6"
            >
              <Link href={"#"}>
                {/* <Link href={`/events`}> */}
                <IoCalendar />
                <span>Events</span>
              </Link>
            </Button>
          </div>

          <Separator className="w-[calc(100%-24px)]" />

          <div className="flex-grow"></div>

          <div className="mx-auto flex w-full flex-col gap-4 p-6">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Connector
            </p>
            <nav className="flex w-full flex-col gap-2 text-sm font-medium text-muted-foreground">
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
        </div>

        {/* Feed */}
        <div
          className={cn(
            "my-4 flex h-[2000px] w-full rounded-md bg-gradient-to-b from-cyan-500 to-blue-500",
            "lg:w-[var(--main-content-width)]"
          )}
        ></div>

        {/* Right Sidebar */}
        <div
          className={cn(
            "my-4 hidden h-[2000px] w-[var(--right-sidebar-width)] flex-shrink-0 rounded-md bg-gradient-to-b from-purple-500 to-pink-500",
            "lg:flex lg:w-[calc(var(--right-sidebar-width)-120px)] lg:flex-shrink-0",
            "xl:w-[var(--right-sidebar-width)]"
          )}
        ></div>
      </div>
    </main>
  );
}
