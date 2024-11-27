import { NextResponse } from "next/server";

// import prisma from "@/lib/prisma";
// import csv from "csv-parser";
// import fs from "fs";

// async function importCSV(filePath: string) {
//   try {
//     const data: { name: string; code: string; cities: string[] }[] = [];

//     await new Promise((resolve, reject) => {
//       fs.createReadStream(filePath)
//         .pipe(csv())
//         .on("data", (row) => {
//           const countryName = row["country"];
//           const countryCode = row["iso3"];
//           const cityName = row["combined_city"];

//           const countryData = data.find((c) => c.code === countryCode);
//           if (countryData) {
//             countryData.cities.push(cityName);
//           } else {
//             data.push({
//               name: countryName,
//               code: countryCode,
//               cities: [cityName],
//             });
//           }
//         })
//         .on("end", resolve)
//         .on("error", reject);
//     });

//     // console.log("Data length: ", data.length);
//     // let citiesLength = 0;
//     // data.forEach(async (country) => {
//     //   console.log(
//     //     `Importing country: ${country.name} (${country.code}) - Cities: ${country.cities.length}`
//     //   );
//     //   citiesLength += country.cities.length;
//     // });
//     // console.log("Cities length: ", citiesLength);

//     data.forEach(async (country) => {
//       console.log(`Importing country: ${country.name} (${country.code})`);

//       await prisma.country.create({
//         data: {
//           name: country.name,
//           code: country.code,
//           cities: {
//             create: country.cities.map((city) => ({ name: city })),
//           },
//         },
//       });
//     });

//     return true;
//   } catch (error) {
//     throw error;
//   }
// }

// export async function GET() {
//   try {
//     await importCSV("database/worldcities_edited.csv");
//     return NextResponse.json({ message: "Success" }, { status: 200 });
//   } catch (error) {
//     console.error("Error importing data:", error);
//     return NextResponse.json(
//       { message: "Error", details: error },
//       { status: 500 }
//     );
//   }
// }

export async function POST() {
  return NextResponse.json({ message: "Success" }, { status: 200 });
}
