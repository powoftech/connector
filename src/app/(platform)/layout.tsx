import PlatformHeader from "@/app/(platform)/_components/platform-header";
import { fetchProfileId } from "@/app/data";
import getSession from "@/lib/get-session";
import { SessionProvider } from "next-auth/react";
import { redirect } from "next/navigation";

export default async function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session || !session.user || !session.user.id) {
    redirect("/join");
  }

  const isUserProfileAvailable = await fetchProfileId(session.user.id);

  if (!isUserProfileAvailable) {
    redirect("/get-started");
  }

  return (
    <SessionProvider>
      <PlatformHeader className="top-0 z-40 border-b border-border bg-background md:sticky md:shadow-md" />
      <div className="h-full w-full pb-[var(--header-height)] md:pb-0">
        {children}
      </div>
    </SessionProvider>
  );
}
