import Footer from "@/app/_components/footer";
import Header from "@/app/_components/header";
import Main from "@/app/join/main";
import getSession from "@/lib/get-session";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Join Now",
};

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
