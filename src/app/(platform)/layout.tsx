import PlatformHeader from "@/app/(platform)/_components/platform-header";
import getSession from "@/lib/get-session";
import prisma from "@/lib/prisma";
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

  const profile = await prisma.profile.findUnique({
    where: { userId: session.user.id },
  });

  if (!profile) {
    redirect("/get-started");
  }

  return (
    <SessionProvider>
      <PlatformHeader className="sticky top-0 z-50 border-b border-border bg-background shadow-md" />
      {children}
    </SessionProvider>
  );
}
