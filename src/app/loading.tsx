"use client";

import { Icon } from "@/app/_images/icon";
import { LogoLight } from "@/app/_images/logo";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center text-center">
      <div className="flex flex-col items-center justify-center gap-8 sm:gap-12">
        <Image
          src={LogoLight.default}
          alt="Connector Logo"
          height={96}
          className="hidden dark:invert sm:block"
          priority
        />
        <Image
          src={Icon.default}
          alt="Connector Logo"
          height={96}
          className="block dark:invert sm:hidden"
          priority
        />
      </div>
    </div>
  );
}
