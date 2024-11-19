import { NextResponse } from "next/server";

// import prisma from '@/lib/prisma'
// import csv from 'csv-parser'
// import fs from 'fs'

// async function importCSV(filePath: string) {
//   try {
//     const data: { name: string; code: string; cities: string[] }[] = []

//     await new Promise((resolve, reject) => {
//       fs.createReadStream(filePath)
//         .pipe(csv())
//         .on('data', (row) => {
//           const countryName = row['country']
//           const countryCode = row['iso3']
//           const cityName = row['combined_city']

//           // Find existing country data or create a new one
//           const countryData = data.find((c) => c.code === countryCode)
//           if (countryData) {
//             countryData.cities.push(cityName)
//           } else {
//             data.push({
//               name: countryName,
//               code: countryCode,
//               cities: [cityName],
//             })
//           }
//         })
//         .on('end', resolve)
//         .on('error', reject)
//     })

//     // console.log('Data length: ', data.length);
//     // let citiesLength = 0;
//     // data.forEach(async (country) => {
//     //   console.log(`Importing country: ${country.name} (${country.code}) - Cities: ${country.cities.length}`)
//     //   citiesLength += country.cities.length;
//     // })
//     // console.log('Cities length: ', citiesLength);

//     data.forEach(async (country) => {
//       console.log(`Importing country: ${country.name} (${country.code})`)

//       await prisma.country.create({
//         data: {
//           name: country.name,
//           code: country.code,
//           cities: {
//             create: country.cities.map((city) => ({ name: city })),
//           },
//         },
//       })
//     })

//     return true
//   } catch (error) {
//     console.error('Error importing CSV:', error)
//     throw error
//   }
// }

// export async function GET() {
//   importCSV('database/worldcities_edited.csv').catch(
//     (err) => console.error('Error importing data:', err),
//   )

//   return NextResponse.json({ message: 'Success' })
// }

export async function GET() {
  return NextResponse.json({ message: "This route is disabled" });
}