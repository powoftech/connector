"use client";

import { updateProfile } from "@/app/(platform)/in/[[...slug]]/actions";
import {
  CityCombobox,
  CountryCombobox,
} from "@/app/get-started/_components/comboboxes";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ProfileInputs, ProfileSchema } from "@/lib/definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Role } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { LuLoader2 } from "react-icons/lu";
import { toast } from "sonner";

const roles = Object.values(Role).map((role) => ({
  label: role.charAt(0).toUpperCase() + role.slice(1).toLowerCase(),
  value: role,
}));

export default function EditProfileForm() {
  const session = useSession();
  const router = useRouter();

  console.log(session.data?.user);

  const profileForm = useForm<ProfileInputs>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      name: session.data?.user.name,
      role: session.data?.user.profile.role as Role,
      country: session.data?.user.profile.country.name,
      city: session.data?.user.profile.city.name,
      headline: session.data?.user.profile.headline ?? "",
      about: session.data?.user.profile.about ?? "",
    },
  });

  async function onSubmit(data: ProfileInputs) {
    try {
      if (!session.data?.user.id) {
        throw new Error("User ID not found.");
      }
      await updateProfile(session.data?.user.id, data);
      toast.success("Your profile has been updated successfully.");
      toast.info("Profile page will refresh in a moment.");
      router.refresh();
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("An error occurred while updating your profile.");
    }
  }

  return (
    <>
      <Form {...profileForm}>
        <form
          id="update-profile-form"
          onSubmit={profileForm.handleSubmit(onSubmit)}
          className="grid gap-4 md:gap-2 py-4"
        >
          <FormField
            control={profileForm.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex flex-col md:grid md:grid-cols-4 md:items-center md:gap-4">
                <FormLabel className="text-left">Display name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    autoComplete="name"
                    className="w-full text-base md:col-span-3 md:text-sm"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={profileForm.control}
            name="role"
            render={({ field }) => (
              <FormItem className="flex flex-col md:grid md:grid-cols-4 md:items-center md:gap-4">
                <FormLabel className="text-left">Role</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  name="role"
                >
                  <FormControl className="w-full text-base md:col-span-3 md:text-sm">
                    <SelectTrigger>
                      <SelectValue placeholder="Select role..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {roles.map((role) => (
                      <SelectItem key={role.value} value={role.value}>
                        {role.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={profileForm.control}
            name="country"
            render={({ field }) => (
              <FormItem className="flex flex-col md:grid md:grid-cols-4 md:items-center md:gap-4">
                <FormLabel className="text-left">Country/Region</FormLabel>
                <FormControl>
                  <CountryCombobox
                    field={field}
                    className="w-full md:col-span-3"
                    onCountryChange={() => {
                      profileForm.resetField("city", {
                        keepDirty: false,
                        keepTouched: true,
                        keepError: false,
                        defaultValue: "",
                      });
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={profileForm.control}
            name="city"
            render={({ field }) => (
              <FormItem className="flex flex-col md:grid md:grid-cols-4 md:items-center md:gap-4">
                <FormLabel className="text-left">City</FormLabel>
                <FormControl>
                  <CityCombobox
                    field={field}
                    className="w-full md:col-span-3"
                    countryName={profileForm.getValues("country")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={profileForm.control}
            name="headline"
            render={({ field }) => (
              <FormItem className="flex flex-col md:grid md:grid-cols-4 md:items-center md:gap-4">
                <FormLabel className="text-left">Headline</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    autoComplete="headline"
                    className="w-full text-base md:col-span-3 md:text-sm"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={profileForm.control}
            name="about"
            render={({ field }) => (
              <FormItem className="flex flex-col md:grid md:grid-cols-4 md:items-center md:gap-4">
                <FormLabel className="text-left">About</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    autoComplete="about"
                    className="w-full text-base md:col-span-3 md:text-sm"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <DialogFooter>
        <Button
          form="update-profile-form"
          type="submit"
          disabled={profileForm.formState.isSubmitting}
        >
          {profileForm.formState.isSubmitting ?? (
            <LuLoader2 className="animate-spin" />
          )}
          <span className="mx-auto">Save changes</span>
        </Button>
      </DialogFooter>
    </>
  );
}
