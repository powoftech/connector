"use client";
import { BackgroundBeams } from "@/components/aceternity/background-beams";
import {
  FOOTER_HEIGHT_DESKTOP,
  FOOTER_HEIGHT_MOBILE,
  HEADER_HEIGHT,
} from "@/lib/constants";

export default function CTA() {
  return (
    <div
      className={`relative flex min-h-[calc(100vh-${HEADER_HEIGHT}px-${FOOTER_HEIGHT_MOBILE}px)] w-full flex-col items-center justify-center bg-neutral-50 dark:bg-neutral-950 sm:min-h-[calc(100vh-${HEADER_HEIGHT}px-${FOOTER_HEIGHT_DESKTOP}px)]`}
    >
      <div className="mx-auto flex min-h-fit max-w-screen-2xl flex-col items-center justify-center gap-3 p-6">
        <p className="relative z-10 w-full bg-gradient-to-b from-neutral-800 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent dark:from-neutral-200 dark:to-neutral-600 sm:text-6xl">
          Ready to Elevate
          <br className="lg:hidden" /> Your Career?
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
