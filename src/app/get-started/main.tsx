"use client";

import {
  CityCombobox,
  CountryCombobox,
} from "@/app/get-started/_components/comboboxes";
import { submitProfileForm } from "@/app/get-started/actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { Metadata } from "next";
import { User } from "next-auth";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { IoEnterOutline } from "react-icons/io5";
import { LuLoader2 } from "react-icons/lu";
import { toast } from "sonner";

export const metadata: Metadata = {
  title: "Get Started",
};

const roles = Object.values(Role).map((role) => ({
  label: role.charAt(0).toUpperCase() + role.slice(1).toLowerCase(),
  value: role,
}));

export default function Main({ user }: { user: User }) {
  const router = useRouter();

  const profileForm = useForm<ProfileInputs>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      name: user?.name ?? undefined,
    },
  });

  async function onSubmit(data: ProfileInputs) {
    try {
      if (!user?.id) {
        throw new Error("User ID is missing.");
      }
      await submitProfileForm(user.id, data);
      toast.success("Your profile has been submitted successfully.");
      toast.info("You will be redirected to the feed shortly.");
      router.push("/feed");
    } catch (error) {
      console.error("Error submitting profile:", error);
      toast.error("An error occurred while submitting your profile.");
    }
  }

  return (
    <main className="flex min-h-[calc(100vh-var(--header-height))] flex-col items-center sm:p-6">
      <Card className="h-full w-full border-none shadow-none sm:m-auto sm:max-w-screen-lg sm:border-solid sm:border-border sm:shadow">
        <CardHeader>
          <CardTitle>Get Started</CardTitle>
          <CardDescription>Let&apos;s create your profile.</CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...profileForm}>
            <form
              id="profile-form"
              onSubmit={profileForm.handleSubmit(onSubmit)}
              className="grid gap-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-4"
            >
              <FormField
                control={profileForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Display name</FormLabel>
                    <FormControl>
                      <Input autoComplete="name" {...field} />
                    </FormControl>
                    {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={profileForm.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      name="role"
                    >
                      <FormControl>
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
                    {/* <FormDescription>
                      This will be your main role in the platform.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={profileForm.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country/Region</FormLabel>
                    <FormControl>
                      <CountryCombobox
                        field={field}
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
                    {/* <FormDescription>
                      Your current country or region.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={profileForm.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <CityCombobox
                        field={field}
                        countryName={profileForm.getValues("country")}
                      />
                    </FormControl>
                    {/* <FormDescription>Your current city.</FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={profileForm.control}
                name="headline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Headline (optional)</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="A catchy phrase to describe yourself."
                      />
                    </FormControl>
                    {/* <FormDescription>
                      A catchy phrase to describe yourself.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={profileForm.control}
                name="about"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>About (optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="min-h-[120px] sm:min-h-20"
                        placeholder="You can write about your years of experience, industry, or skills. People also talk about their achievements or previous job experiences."
                      />
                    </FormControl>
                    {/* <FormDescription>
                      You can write about your years of experience, industry, or
                      skills. People also talk about their achievements or
                      previous job experiences.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
            </form>
          </Form>
        </CardContent>

        <CardFooter className="justify-end">
          <Button
            form="profile-form"
            type="submit"
            disabled={profileForm.formState.isSubmitting}
          >
            {profileForm.formState.isSubmitting ? (
              <LuLoader2 className="animate-spin" />
            ) : (
              <IoEnterOutline />
            )}
            Submit
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
