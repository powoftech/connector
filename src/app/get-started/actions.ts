"use server";

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
