/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `cities` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `countries` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[code]` on the table `countries` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "cities_name_key" ON "cities"("name");

-- CreateIndex
CREATE UNIQUE INDEX "countries_name_key" ON "countries"("name");

-- CreateIndex
CREATE UNIQUE INDEX "countries_code_key" ON "countries"("code");
