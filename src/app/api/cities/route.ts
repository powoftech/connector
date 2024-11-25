import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const countryName = req.nextUrl.searchParams.get("countryName");

  if (!countryName) {
    return NextResponse.json(
      { error: "countryName is required" },
      { status: 400 }
    );
  }

  const country = await prisma.country.findUnique({
    where: {
      name: countryName,
    },
    select: {
      id: true,
    },
  });

  const data = await prisma.city.findMany({
    where: {
      countryId: country?.id,
    },
    select: {
      name: true,
    },
    orderBy: {
      name: "asc",
    },
  });

  return NextResponse.json(data, { status: 200 });
}
