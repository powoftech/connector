"use client";

import { AuroraBackground } from "@/components/aceternity/aurora-background";
import { HEADER_HEIGHT } from "@/lib/constants";
import { motion } from "framer-motion";
import React from "react";

export default function Hero() {
  return (
    <AuroraBackground className={`min-h-[calc(100vh-${HEADER_HEIGHT}px)]`}>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="m-auto flex min-h-fit w-full max-w-screen-2xl flex-shrink-0 flex-col items-center justify-center gap-6 p-6 text-center text-5xl font-bold leading-none text-foreground sm:gap-10 sm:text-8xl"
      >
        <p>Connect.</p>
        <p>Collaborate.</p>
        <p>Advance.</p>
      </motion.div>
    </AuroraBackground>
  );
}
