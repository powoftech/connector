-- DropForeignKey
ALTER TABLE "cities" DROP CONSTRAINT "cities_country_id_fkey";

-- AddForeignKey
ALTER TABLE "cities" ADD CONSTRAINT "cities_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "countries"("id") ON DELETE CASCADE ON UPDATE CASCADE;
