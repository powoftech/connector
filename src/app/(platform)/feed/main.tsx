"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { IoBookmark, IoCalendar } from "react-icons/io5";

export default function Main() {
  const session = useSession();
  console.log(session);

  return (
    <>
      {session.status === "loading" ? (
        <Skeleton className="min-h-[calc(100vh-var(--header-height))]" />
      ) : (
        <>
          <main>
            <div className="flex flex-row items-start justify-between gap-2 px-6">
              {/* Left Sidebar */}
              <div className="sticky top-[calc(var(--header-height)+16px)] z-10 hidden h-[calc(100vh-var(--header-height)-32px)] w-[calc(360px)] min-w-fit flex-col items-center rounded-md bg-background lg:flex">
                <Link href={`/in/${session.data?.user.id}`} className="w-full">
                  <Card className="w-full">
                    <CardHeader className="">
                      <CardTitle className="flex flex-row items-center gap-3 text-xl font-medium leading-none">
                        <Avatar className="h-9 w-9 select-none">
                          <AvatarImage src={session.data?.user?.image} />
                          <AvatarFallback>
                            {session.data?.user?.name?.charAt(0).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <span>{session.data?.user.name}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-2">
                      {!session.data?.user.profile?.headline ||
                      session.data?.user.profile?.headline === "" ? (
                        <Skeleton className="h-[20px] w-full" />
                      ) : (
                        session.data?.user.profile?.headline
                      )}
                      <p className="text-sm text-muted-foreground">
                        {session.data?.user.profile.city.name}
                      </p>
                    </CardContent>
                    {/* <CardFooter>
                  </CardFooter> */}
                  </Card>
                </Link>

                <Separator className="my-4 w-[calc(100%-12px)]" />

                <div className="flex w-full flex-col">
                  <Button
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-[60px] w-full justify-start gap-3 px-6 text-xl font-medium leading-none tracking-tight [&_svg]:size-8"
                  >
                    <Link href={`/my-items`}>
                      <IoBookmark />
                      <span>Saved Items</span>
                    </Link>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-[60px] w-full justify-start gap-3 px-6 text-xl font-medium leading-none tracking-tight [&_svg]:size-8"
                  >
                    <Link href={`/events`}>
                      <IoCalendar />
                      <span>Events</span>
                    </Link>
                  </Button>
                </div>

                <Separator className="my-4 w-[calc(100%-12px)]" />

                <div className="flex-grow"></div>

                <div className="flex w-full flex-col gap-4 p-6">
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
              <div className="my-4 flex h-[2000px] w-full rounded-md bg-chart-1 bg-gradient-to-b from-cyan-500 to-blue-500 lg:w-[700px]"></div>
              <div className="my-4 hidden h-[2000px] w-[300px] rounded-md bg-chart-2 bg-gradient-to-b from-purple-500 to-pink-500 lg:flex"></div>
            </div>
          </main>
        </>
      )}
    </>
  );
}
