"use server";

import { ProfileInputs } from "@/lib/definitions";
import prisma from "@/lib/prisma";
import { cache } from "react";

export const getCountries = cache(async () => {
  const countries = await prisma.country.findMany({
    select: {
      id: true,
      name: true,
    },
    orderBy: {
      name: "asc",
    },
  });

  return countries;
});

export const getCities = cache(async (countryName: string) => {
  const country = await prisma.country.findFirst({
    where: {
      name: countryName,
    },
    select: {
      id: true,
      cities: {
        select: {
          id: true,
          name: true,
        },
        orderBy: {
          name: "asc",
        },
      },
    },
  });

  const cities = country?.cities;

  return cities;
});

export async function submitProfileForm(userId: string, data: ProfileInputs) {
  const country = await prisma.country.findFirst({
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
