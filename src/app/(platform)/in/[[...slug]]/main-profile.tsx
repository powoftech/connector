"use client";

import BasicInformationCard from "@/app/(platform)/in/[[...slug]]/_components/basic-information-card";
import {
  getUserWithProfile,
  UserWithProfile,
} from "@/app/(platform)/in/[[...slug]]/actions";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

export default function MainProfile({
  profileUrl,
  isSelfProfile,
}: {
  profileUrl: string;
  isSelfProfile: boolean;
}) {
  const session = useSession();
  const [otherUser, setOtherUser] = useState<UserWithProfile>();

  useEffect(() => {
    if (!isSelfProfile) {
      getUserWithProfile(profileUrl).then((foundUser) => {
        if (foundUser) {
          setOtherUser(foundUser);
        } else {
          notFound();
        }
      });
    }
  });

  return (
    <div className="py-4 md:px-6">
      <div
        className={cn(
          "mx-auto flex w-full flex-col items-center justify-between gap-4",
          "md:max-w-6xl md:flex-row md:items-start"
        )}
      >
        <main className="flex w-full flex-initial flex-shrink flex-col items-center justify-start gap-4">
          {session.status === "loading" ? (
            <AspectRatio ratio={3 / 2}>
              <Skeleton className="h-full w-full rounded-t-md border bg-card md:rounded-md" />
            </AspectRatio>
          ) : (
            <>
              {isSelfProfile ? (
                <BasicInformationCard
                  isSelfProfile={isSelfProfile}
                  image={session.data?.user.image}
                  name={session.data?.user.name}
                  headline={session.data?.user.profile.headline}
                  cityName={session.data?.user.profile.city.name}
                  countryName={session.data?.user.profile.country.name}
                />
              ) : (
                <BasicInformationCard
                  isSelfProfile={isSelfProfile}
                  image={otherUser?.image}
                  name={otherUser?.name}
                  headline={otherUser?.profile?.headline}
                  cityName={otherUser?.profile?.city?.name}
                  countryName={otherUser?.profile?.country?.name}
                />
              )}
            </>
          )}

          <section className="w-full">
            <div className="relative h-48 w-full bg-chart-4 md:rounded-md"></div>
          </section>
        </main>

        <aside className="block h-screen w-full flex-none border md:w-80 md:rounded-md"></aside>
      </div>
    </div>
  );
}
