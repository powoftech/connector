"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function UserInfoCard() {
  const session = useSession();
  const user = session.data?.user;

  return (
    <Card className="w-full">
      <CardHeader className="">
        <Link href={`/in`} className="w-full">
          <CardTitle className="flex flex-row items-center gap-3 text-xl font-medium">
            <Avatar className="h-8 w-8 shrink-0 select-none">
              <AvatarImage src={user?.image} />
              <AvatarFallback>
                {user?.name?.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <span className="truncate">{user?.name}</span>
          </CardTitle>
        </Link>
      </CardHeader>
      <CardContent className="grid gap-2">
        {!user?.profile?.headline || user.profile?.headline === "" ? (
          <Skeleton className="h-[20px] w-full" />
        ) : (
          user.profile?.headline
        )}
        <p className="text-sm text-muted-foreground">
          {user?.profile.city.name}
        </p>
      </CardContent>
    </Card>
  );
}
