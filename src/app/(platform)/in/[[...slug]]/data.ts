"use server";

import prisma from "@/lib/prisma";
import { cache } from "react";

export type UserWithProfile = Awaited<ReturnType<typeof fetchUserWithProfile>>;

export const fetchUserWithProfile = cache(async (profileUrl: string) => {
  return await prisma.user.findFirst({
    where: {
      OR: [
        {
          profile: {
            customURL: profileUrl,
          },
        },
        {
          id: profileUrl,
        },
      ],
    },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      profile: {
        select: {
          customURL: true,
          headline: true,
          about: true,
          city: {
            select: {
              name: true,
            },
          },
          country: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });
});
