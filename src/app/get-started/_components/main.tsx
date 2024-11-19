"use client";

import {
  CityCombobox,
  CountryCombobox,
  RoleCombobox,
} from "@/app/get-started/_components/comboboxes";
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
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { ProfileInputs, ProfileSchema } from "@/lib/definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const steps = [
  {
    id: "1",
    name: "Basic info",
    fields: ["name", "role", "headline", "about"],
  },
  {
    id: "2",
    name: "Location",
    fields: ["country", "city"],
  },
  {
    id: "3",
    name: "Education",
    fields: ["education"],
  },
  {
    id: "4",
    name: "Experience",
    fields: ["experience"],
  },
  {
    id: "5",
    name: "Skills",
    fields: ["skills"],
  },
  { id: "6", name: "Review" },
];

export default function Main() {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const delta = currentStep - previousStep;

  const profileForm = useForm<ProfileInputs>({
    resolver: zodResolver(ProfileSchema),
  });

  const handleSubmit = profileForm.handleSubmit((data) => {
    console.log(data);
    profileForm.reset();
  });

  type FieldName = keyof ProfileInputs;

  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await profileForm.trigger(fields as FieldName[], {
      shouldFocus: true,
    });

    if (!output) {
      return;
    }

    if (currentStep < steps.length - 1) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <main className="flex min-h-[calc(100vh-64px)] flex-col items-center sm:p-6">
      <Card className="h-full w-full border-none shadow-none sm:m-auto sm:max-w-screen-md sm:border-solid sm:border-border sm:shadow">
        <CardHeader>
          <CardTitle>Get Started</CardTitle>
          <CardDescription>Let&apos;s create your profile.</CardDescription>
        </CardHeader>

        <CardContent className="space-y-6 sm:h-[576px] sm:min-h-fit">
          <div className="space-y-1.5">
            <div className="flex flex-row justify-between text-lg font-medium leading-none tracking-tight">
              <span>{steps[currentStep].name}</span>
              <span className="text-muted-foreground">
                Step {currentStep + 1} of {steps.length}
              </span>
            </div>
            <Progress
              value={((currentStep + 1) / steps.length) * 100}
              className="h-2"
            />
          </div>

          <Form {...profileForm}>
            <form id="profileForm" onSubmit={handleSubmit}>
              {currentStep === 0 && (
                <motion.div
                  initial={{ x: delta >= 0 ? "5%" : "-5%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="space-y-3"
                >
                  <FormField
                    control={profileForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormLabel>Display name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            disabled={profileForm.formState.isSubmitting}
                          />
                        </FormControl>
                        <FormDescription>
                          This will be your public name.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  ></FormField>

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
                  ></FormField>

                  <FormField
                    control={profileForm.control}
                    name="headline"
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormLabel>Headline</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            disabled={profileForm.formState.isSubmitting}
                          />
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
                        <FormLabel>About</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            disabled={profileForm.formState.isSubmitting}
                          />
                        </FormControl>
                        <FormDescription>
                          You can write about your years of experience,
                          industry, or skills. People also talk about their
                          achievements or previous job experiences.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  ></FormField>
                </motion.div>
              )}
              {currentStep === 1 && (
                <motion.div
                  initial={{ x: delta >= 0 ? "5%" : "-5%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="space-y-3"
                >
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
                              // Reset city field when country changes
                              profileForm.setValue("city", "");
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
                </motion.div>
              )}
              {currentStep === 2 && (
                <motion.div
                  initial={{ x: delta >= 0 ? "5%" : "-5%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  {/* <p className="text-xl leading-none tracking-tight">
                  {steps[currentStep - 1].name}
                </p> */}
                </motion.div>
              )}
              {currentStep === 3 && (
                <motion.div
                  initial={{ x: delta >= 0 ? "5%" : "-5%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  {/* <p className="text-xl leading-none tracking-tight">
                  {steps[currentStep - 1].name}
                </p> */}
                </motion.div>
              )}
              {currentStep === 4 && (
                <motion.div
                  initial={{ x: delta >= 0 ? "5%" : "-5%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  {/* <p className="text-xl leading-none tracking-tight">
                  {steps[currentStep - 1].name}
                </p> */}
                </motion.div>
              )}
              {currentStep === 5 && (
                <motion.div
                  initial={{ x: delta >= 0 ? "5%" : "-5%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  {/* <p className="text-xl leading-none tracking-tight">
                  {steps[currentStep - 1].name}
                </p> */}
                </motion.div>
              )}
            </form>
          </Form>
        </CardContent>

        <CardFooter className="flex justify-between">
          <div className="space-x-1.5">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              disabled={currentStep === 0}
            >
              <IoChevronBack />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              disabled={currentStep === steps.length - 1}
            >
              <IoChevronForward />
            </Button>
          </div>
          <Button
            form="profileForm"
            type="submit"
            disabled={currentStep !== steps.length - 1}
          >
            Submit
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
