"use client";

import { getCities, getCountries } from "@/app/get-started/actions";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { City, Country } from "@prisma/client";
import { ChevronsUpDown } from "lucide-react";
import { useEffect, useState } from "react";
import { IoCheckmark } from "react-icons/io5";

export function CountryCombobox({
  field,
  onCountryChange,
}: {
  field: { value: string; onChange: (value: string) => void };
  onCountryChange?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [countries, setCountries] = useState<
    { label: Country["name"]; value: Country["id"] }[]
  >([]);

  useEffect(() => {
    getCountries().then((countries) => {
      setCountries(
        Object.values(countries).map((country) => ({
          label: country.name,
          //   value: country.id,
          value: country.name,
        }))
      );
    });
  }, []);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="flex w-full justify-between"
        >
          {field.value
            ? countries.find((country) => country.value === field.value)?.label
            : "Select country or region..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="p-0"
        style={{ width: "var(--radix-popover-trigger-width)" }}
      >
        <Command>
          <CommandInput placeholder="Search country or region..." />
          <CommandList>
            <CommandEmpty>No country or region found.</CommandEmpty>
            <CommandGroup>
              {countries.map((country) => (
                <CommandItem
                  key={country.value}
                  value={country.value}
                  onSelect={() => {
                    field.onChange(country.value);
                    setOpen(false);
                    onCountryChange?.();
                  }}
                >
                  {country.label}
                  <IoCheckmark
                    className={cn(
                      "ml-auto",
                      field.value === country.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export function CityCombobox({
  field,
  countryName,
}: {
  field: { value: string; onChange: (value: string) => void };
  countryName: string;
}) {
  const [open, setOpen] = useState(false);
  const [cities, setCities] = useState<
    { label: City["name"]; value: City["id"] }[]
  >([]);

  useEffect(() => {
    if (!countryName || countryName === "") {
      return;
    }

    getCities(countryName).then((cities) => {
      if (cities) {
        setCities(
          Object.values(cities).map((city) => ({
            label: city.name,
            //   value: city.id,
            value: city.name,
          }))
        );
      }
    });
  }, [countryName]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="flex w-full justify-between"
          disabled={!countryName}
        >
          {field.value && field.value !== ""
            ? cities.find((city) => city.value === field.value)?.label
            : "Select city..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="p-0"
        style={{ width: "var(--radix-popover-trigger-width)" }}
      >
        <Command>
          <CommandInput placeholder="Search city..." />
          <CommandList>
            <CommandEmpty>No city found.</CommandEmpty>
            <CommandGroup>
              {cities.map((city) => (
                <CommandItem
                  key={city.value}
                  value={city.value}
                  onSelect={() => {
                    field.onChange(city.value);
                    setOpen(false);
                  }}
                >
                  {city.label}
                  <IoCheckmark
                    className={cn(
                      "ml-auto",
                      field.value === city.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
