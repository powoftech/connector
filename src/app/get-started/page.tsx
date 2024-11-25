import Footer from "@/app/_components/footer";
import Header from "@/app/_components/header";
import { fetchProfileId } from "@/app/data";
import Main from "@/app/get-started/main";
import getSession from "@/lib/get-session";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getSession();

  if (!session || !session.user || !session.user.id) {
    redirect("/join");
  }

  const isUserProfileAvailable = await fetchProfileId(session.user.id);

  if (isUserProfileAvailable) {
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
