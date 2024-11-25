"use server";

import prisma from "@/lib/prisma";
import { cache } from "react";

export const getProfileExisted = cache(async (userId: string) => {
  return await prisma.profile.findUnique({
    where: { userId },
    select: {
      id: true,
    },
  });
});
