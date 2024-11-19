import Footer from "@/app/_components/footer";
import Header from "@/app/_components/header";
import Main from "@/app/get-started/_components/main";
import getSession from "@/lib/get-session";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getSession();

  if (!session || !session.user) {
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

      <Main />

      <Footer />
    </>
  );
}
