"use server";

import { ProfileInputs } from "@/lib/definitions";
import prisma from "@/lib/prisma";

export async function submitProfileForm(userId: string, data: ProfileInputs) {
  const country = await prisma.country.findUnique({
    where: {
      name: data.country,
    },
    select: {
      id: true,
    },
  });

  const city = await prisma.city.findFirst({
    where: {
      name: data.city,
    },
    select: {
      id: true,
    },
  });

  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      name: data.name,
      profile: {
        create: {
          customURL: userId,
          role: data.role,
          headline: data.headline,
          about: data.about,
          countryId: country?.id,
          cityId: city?.id,
        },
      },
    },
  });
}
