"use server";

import { ProfileInputs } from "@/lib/definitions";
import prisma from "@/lib/prisma";

export async function getCountries() {
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
}

export async function getCities(countryName: string) {
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
}

export async function submitProfileForm(userId: string, data: ProfileInputs) {
  const user = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      name: data.name,
    },
  });

  const country = await prisma.country.findFirst({
    where: {
      name: data.country,
    },
    select: {
      id: true,
      name: true,
      code: true,
    },
  });

  const city = await prisma.city.findFirst({
    where: {
      name: data.city,
    },
    select: {
      id: true,
      name: true,
    },
  });
  const profile = await prisma.profile.create({
    data: {
      userId: user.id,
      role: data.role,
      headline: data.headline,
      about: data.about,
      countryId: country?.id,
      cityId: city?.id,
    },
  });

  return profile;
}
