"use client";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { IoCheckmark } from "react-icons/io5";
import { LuChevronsUpDown } from "react-icons/lu";

export function CountryCombobox({
  field,
  className,
  onCountryChange,
}: {
  field: { value: string; onChange: (value: string) => void };
  className?: string;
  onCountryChange?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  const countries = useRef<{ label: string; value: string }[]>([]);

  useEffect(() => {
    async function fetchCountries() {
      const res = await fetch("/api/countries");
      const data: { name: string }[] = res.ok ? await res.json() : [];

      countries.current = Object.values(data).map((country) => ({
        label: country.name,
        value: country.name,
      }));
    }
    fetchCountries();
  }, []);

  if (!isMobile) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "flex w-full justify-between text-base font-normal md:text-sm",
              className
            )}
          >
            {field.value
              ? countries.current.find(
                  (country) => country.value === field.value
                )?.label
              : "Select country or region..."}
            <LuChevronsUpDown className="opacity-50" />
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
                {countries.current.map((country) => (
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

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "flex w-full justify-between text-base font-normal md:text-sm",
            className
          )}
        >
          {field.value
            ? countries.current.find((country) => country.value === field.value)
                ?.label
            : "Select country or region..."}
          <LuChevronsUpDown className="opacity-50" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <Command>
            <CommandInput placeholder="Search country or region..." />
            <CommandList className="max-h-[512px]">
              <CommandEmpty>No country or region found.</CommandEmpty>
              <CommandGroup>
                {countries.current.map((country) => (
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
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export function CityCombobox({
  field,
  className,
  countryName,
}: {
  field: { value: string; onChange: (value: string) => void };
  className?: string;
  countryName: string;
}) {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  const cities = useRef<{ label: string; value: string }[]>([]);

  useEffect(() => {
    async function fetchCountries() {
      const res = await fetch(`/api/cities?countryName=${countryName}`);
      const data: { name: string }[] = res.ok ? await res.json() : [];

      cities.current = Object.values(data).map((city) => ({
        label: city.name,
        value: city.name,
      }));
    }
    fetchCountries();
  }, [countryName]);

  if (!isMobile) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "flex w-full justify-between text-base font-normal md:text-sm",
              className
            )}
            disabled={!countryName}
          >
            {field.value && field.value !== ""
              ? cities.current.find((city) => city.value === field.value)?.label
              : "Select city..."}
            <LuChevronsUpDown className="opacity-50" />
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
                {cities.current.map((city) => (
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

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "flex w-full justify-between text-base font-normal md:text-sm",
            className
          )}
          disabled={!countryName}
        >
          {field.value && field.value !== ""
            ? cities.current.find((city) => city.value === field.value)?.label
            : "Select city..."}
          <LuChevronsUpDown className="opacity-50" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <Command>
            <CommandInput placeholder="Search city..." />
            <CommandList className="max-h-[512px]">
              <CommandEmpty>No city found.</CommandEmpty>
              <CommandGroup>
                {cities.current.map((city) => (
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
        </div>
      </DrawerContent>
    </Drawer>
  );
}
