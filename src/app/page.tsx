import CTA from "@/app/_components/cta";
import Features from "@/app/_components/features";
import Footer from "@/app/_components/footer";
import Header from "@/app/_components/header";
import Hero from "@/app/_components/hero";
import { HEADER_HEIGHT } from "@/lib/constants";

export default function Page() {
  // await new Promise((resolve) => setTimeout(resolve, 100000))

  return (
    <>
      <Header
        showJoin={true}
        className="fixed z-50 bg-background/75 backdrop-blur"
      />

      <main className={`pt-[${HEADER_HEIGHT}px]`}>
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
