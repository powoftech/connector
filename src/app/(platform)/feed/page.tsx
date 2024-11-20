import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import getSession from "@/lib/get-session";
import prisma from "@/lib/prisma";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Feed",
};

export default async function Page() {
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
    <>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/join", redirect: true });
        }}
      >
        <Button type="submit">Sign out</Button>
      </form>
    </>
  );
}
