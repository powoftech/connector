"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LuContact } from "react-icons/lu";

export default function OpenToWorkCard() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Alert className="mt-6 w-full cursor-pointer border-0 bg-secondary lg:w-4/5 xl:w-3/4">
            <LuContact className="h-5 w-5" />
            <AlertTitle className="font-semibold leading-tight">
              Open to work
            </AlertTitle>
            <AlertDescription>
              <p className="truncate text-nowrap">
                Data Engineer and Software Engineer roles
              </p>
              <p className="h-fit w-fit cursor-pointer font-medium text-muted-foreground hover:text-foreground hover:underline">
                Show details
              </p>
            </AlertDescription>
            <AlertDescription></AlertDescription>
          </Alert>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                defaultValue="Pedro Duarte"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                defaultValue="@peduarte"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
