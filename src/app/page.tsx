import CTA from "@/app/_components/cta";
import Features from "@/app/_components/features";
import Footer from "@/app/_components/footer";
import Header from "@/app/_components/header";
import Hero from "@/app/_components/hero";
import getSession from "@/lib/get-session";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getSession();

  if (session) {
    redirect("/feed");
  }

  return (
    <>
      <Header
        showJoin={true}
        className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border"
      />

      <main>
        <div className="grid">
          <Hero />
          <Features />
          <CTA />
        </div>
      </main>

      <Footer />
    </>
  );
}
