"use server";

import prisma from "@/lib/prisma";

export async function getProfileExisted(userId: string) {
  return await prisma.profile.findUnique({
    where: { userId },
    select: {
      id: true,
    },
  });
}
