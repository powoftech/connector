"use client";

import {
  CityCombobox,
  CountryCombobox,
  RoleCombobox,
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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ProfileInputs, ProfileSchema } from "@/lib/definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { Metadata } from "next";
import { User } from "next-auth";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export const metadata: Metadata = {
  title: "Get Started",
};

export default function Main({ user }: { user: User }) {
  const { toast } = useToast();
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
      toast({
        title: "Success",
        description:
          "Your profile has been submitted. You can now access the platform.",
      });
      router.push("/feed");
    } catch (error) {
      console.error("Error signing in:", error);
      toast({
        title: "Error",
        description: "An error occurred while submitting your profile.",
        variant: "destructive",
      });
    } finally {
    }
  }

  return (
    <main className="flex min-h-[calc(100vh-64px)] flex-col items-center sm:p-6">
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
              className="space-y-3 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0"
            >
              <FormField
                control={profileForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel>Display name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={profileForm.control}
                name="role"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel>Role</FormLabel>
                    <FormControl>
                      <RoleCombobox field={field} />
                    </FormControl>
                    <FormDescription>
                      This will be your main role in the platform.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={profileForm.control}
                name="country"
                render={({ field }) => (
                  <FormItem className="space-y-1">
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
                    <FormDescription>
                      Your current country or region.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={profileForm.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <CityCombobox
                        field={field}
                        countryName={profileForm.getValues("country")}
                      />
                    </FormControl>
                    <FormDescription>Your current city.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={profileForm.control}
                name="headline"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel>Headline (optional)</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      A catchy phrase to describe yourself.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={profileForm.control}
                name="about"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel>About (optional)</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormDescription>
                      You can write about your years of experience, industry, or
                      skills. People also talk about their achievements or
                      previous job experiences.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <Button
            form="profile-form"
            type="submit"
            disabled={profileForm.formState.isSubmitting}
          >
            {profileForm.formState.isSubmitting && (
              <Loader2 className="animate-spin" />
            )}
            Submit
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
