"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { useSession } from "next-auth/react";

export const metadata: Metadata = {};

export default function MainProfile({ slug }: { slug: string }) {
  const session = useSession();

  if (session.status === "loading") {
    return <Skeleton className="min-h-[calc(100vh-var(--header-height))]" />;
  }

  const isOwner =
    session.data?.user.id === slug ||
    session.data?.user.profile.customURL === slug;

  return (
    <main className="px-6 py-4">
      <div
        className={cn(
          "mx-auto flex w-full flex-col items-center justify-between gap-4 md:w-full",
          "md:max-w-6xl md:flex-row md:items-start"
        )}
      >
        <div className="flex h-screen w-full rounded-md bg-green-500"></div>
        <div className="flex h-screen w-full flex-shrink-0 rounded-md bg-yellow-500 md:w-80"></div>
      </div>
    </main>
  );
}
