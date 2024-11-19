import Footer from "@/app/_components/footer";
import Header from "@/app/_components/header";
import Main from "@/app/join/_components/main";
import getSession from "@/lib/get-session";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getSession();

  if (!!session) {
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
