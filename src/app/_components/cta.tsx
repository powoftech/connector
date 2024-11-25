import { BackgroundBeams } from "@/components/aceternity/background-beams";

export default function CTA() {
  return (
    <div className="relative flex min-h-[calc(100vh-var(--header-height)-var(--footer-height-mobile))] w-full flex-col items-center justify-center bg-neutral-50 dark:bg-neutral-950 sm:min-h-[calc(100vh-var(--header-height)-var(--footer-height-desktop))]">
      <div className="mx-auto flex min-h-fit max-w-screen-2xl flex-col items-center justify-center gap-3 p-6">
        <p className="relative z-10 min-h-16 w-full bg-gradient-to-b from-neutral-800 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent dark:from-neutral-200 dark:to-neutral-600 sm:text-6xl">
          Ready to Elevate
          <br className="md:hidden" /> Your Career?
        </p>
        <p className="relative z-10 mx-auto my-2 w-full text-center text-neutral-500 sm:text-xl">
          Join Connector, the professional network that empowers your career
          growth and connects you with opportunities worldwide.
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
