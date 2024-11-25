"use server";

import prisma from "@/lib/prisma";
import { cache } from "react";

export const fetchProfileId = cache(async (userId: string) => {
  return await prisma.profile.findUnique({
    where: { userId },
    select: { id: true },
  });
});
