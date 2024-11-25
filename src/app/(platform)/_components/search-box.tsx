"use client";

import { HoverBorderGradient } from "@/components/aceternity/hover-border-gradient";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function SearchBox() {
  const [open, setOpen] = useState(false); // Command Dialog State

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      // Open Command Dialog using Ctrl + / or Cmd + / on Mac
      if (e.key === "/" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <HoverBorderGradient
        as={"div"}
        containerClassName="flex w-full items-center justify-center rounded-full border-0 p-0"
        className="flex w-full items-center justify-center space-x-0 space-y-0 rounded-full border-0 p-0"
      >
        <Button
          variant={"outline"}
          className="flex w-full rounded-full border-0 text-base font-normal text-muted-foreground shadow-[inset_0px_0px_0px_1px] shadow-border transition-all duration-100 ease-in-out hover:bg-background hover:opacity-60 active:opacity-30 md:hidden lg:flex [&_svg]:size-6"
          onClick={() => setOpen(true)}
        >
          <IoSearchOutline />
          <span className="mr-auto">Search</span>
          <div className="pointer-events-none hidden select-none flex-row gap-1 font-mono text-sm xl:flex">
            <kbd className="flex items-center rounded-md border px-1">Ctrl</kbd>
            <kbd className="flex items-center rounded-md border px-1">/</kbd>
          </div>
        </Button>
        <Button
          size={"icon"}
          variant={"outline"}
          className="hidden h-10 w-10 rounded-full border-0 text-base font-normal text-muted-foreground shadow-[inset_0px_0px_0px_1px] shadow-border transition-all duration-100 ease-in-out hover:bg-background hover:opacity-60 active:opacity-30 md:flex lg:hidden [&_svg]:size-6"
          onClick={() => setOpen(true)}
        >
          <IoSearchOutline />
        </Button>
      </HoverBorderGradient>

      {/* Command Dialog */}
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        className={cn(
          "top-[calc(var(--header-height)+8px)] w-[calc(100%-24px)] max-w-[calc(var(--main-content-width)+2*8px)] -translate-x-1/2 translate-y-0 rounded-md",
          "md:top-[calc(var(--header-height)+8px)] md:w-full"
        )}
      >
        <CommandInput
          placeholder="Search"
          className="flex w-[200rem] flex-shrink-0"
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <IoSearchOutline />
              <span>interview tips</span>
            </CommandItem>
            <CommandItem>
              <IoSearchOutline />
              <span>latest in ai</span>
            </CommandItem>
            <CommandItem>
              <IoSearchOutline />
              <span>balancing work and life balance</span>
            </CommandItem>
            <CommandItem>
              <IoSearchOutline />
              <span>remote work</span>
            </CommandItem>
            <CommandItem>
              <IoSearchOutline />
              <span>when&apos;s the best time to switch jobs</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          {/* <CommandGroup heading="History">
          </CommandGroup> */}
        </CommandList>
      </CommandDialog>
    </>
  );
}
