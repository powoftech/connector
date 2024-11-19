/*
  Warnings:

  - You are about to drop the column `city` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the `profiles_skills` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "profiles_skills" DROP CONSTRAINT "profiles_skills_profileId_fkey";

-- DropForeignKey
ALTER TABLE "profiles_skills" DROP CONSTRAINT "profiles_skills_skillId_fkey";

-- AlterTable
ALTER TABLE "profiles" DROP COLUMN "city",
DROP COLUMN "country",
ADD COLUMN     "cityid" TEXT,
ADD COLUMN     "countryid" TEXT;

-- DropTable
DROP TABLE "profiles_skills";

-- CreateTable
CREATE TABLE "_ProfileToSkill" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProfileToSkill_AB_unique" ON "_ProfileToSkill"("A", "B");

-- CreateIndex
CREATE INDEX "_ProfileToSkill_B_index" ON "_ProfileToSkill"("B");

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_countryid_fkey" FOREIGN KEY ("countryid") REFERENCES "countries"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_cityid_fkey" FOREIGN KEY ("cityid") REFERENCES "cities"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProfileToSkill" ADD CONSTRAINT "_ProfileToSkill_A_fkey" FOREIGN KEY ("A") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProfileToSkill" ADD CONSTRAINT "_ProfileToSkill_B_fkey" FOREIGN KEY ("B") REFERENCES "skills"("id") ON DELETE CASCADE ON UPDATE CASCADE;
