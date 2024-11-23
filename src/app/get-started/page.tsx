import { getProfileExisted } from "@/app/(platform)/actions";
import Footer from "@/app/_components/footer";
import Header from "@/app/_components/header";
import Main from "@/app/get-started/main";
import getSession from "@/lib/get-session";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getSession();

  if (!session || !session.user || !session.user.id) {
    redirect("/join");
  }

  const isProfileExisted = await getProfileExisted(session.user.id);

  if (isProfileExisted) {
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
