import Footer from "@/app/_components/footer";
import Header from "@/app/_components/header";
import Main from "@/app/get-started/main";
import getSession from "@/lib/get-session";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getSession();

  if (!session || !session.user || !session.user.id) {
    redirect("/join");
  }

  const profile = await prisma.profile.findUnique({
    where: { userId: session.user.id },
  });

  if (profile) {
    redirect("/feed");
  }

  return (
    <>
      <Header />

      <Main user={session.user} />

      <Footer />
    </>
  );
}
