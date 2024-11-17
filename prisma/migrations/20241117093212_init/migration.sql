/*
  Warnings:

  - You are about to drop the `SkillsOnProfiles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SkillsOnProfiles" DROP CONSTRAINT "SkillsOnProfiles_profileId_fkey";

-- DropForeignKey
ALTER TABLE "SkillsOnProfiles" DROP CONSTRAINT "SkillsOnProfiles_skillId_fkey";

-- AlterTable
ALTER TABLE "profiles" ADD COLUMN     "custom_url" TEXT;

-- DropTable
DROP TABLE "SkillsOnProfiles";

-- CreateTable
CREATE TABLE "profiles_skills" (
    "profileId" TEXT NOT NULL,
    "skillId" TEXT NOT NULL,

    CONSTRAINT "profiles_skills_pkey" PRIMARY KEY ("profileId","skillId")
);

-- AddForeignKey
ALTER TABLE "profiles_skills" ADD CONSTRAINT "profiles_skills_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profiles_skills" ADD CONSTRAINT "profiles_skills_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "skills"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
