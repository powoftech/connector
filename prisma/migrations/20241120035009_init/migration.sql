/*
  Warnings:

  - You are about to drop the column `cityid` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the column `countryid` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `users` table. All the data in the column will be lost.
  - Added the required column `role` to the `profiles` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "profiles" DROP CONSTRAINT "profiles_cityid_fkey";

-- DropForeignKey
ALTER TABLE "profiles" DROP CONSTRAINT "profiles_countryid_fkey";

-- AlterTable
ALTER TABLE "profiles" DROP COLUMN "cityid",
DROP COLUMN "countryid",
ADD COLUMN     "city_id" TEXT,
ADD COLUMN     "country_id" TEXT,
ADD COLUMN     "role" "Role" NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "role";

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "countries"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "cities"("id") ON DELETE SET NULL ON UPDATE CASCADE;
