"use client";

import { OAuthButton } from "@/app/join/_components/oauth-button";
import {
  OAuthProvider,
  signInMagicLinks,
  signInOAuth,
} from "@/app/join/actions";
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
import { useToast } from "@/hooks/use-toast";
import { EmailFormInputs, EmailFormSchema } from "@/lib/definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { IoMailOutline } from "react-icons/io5";

export default function Main() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  function handleSubmitOAuth(provider: OAuthProvider) {
    startTransition(async () => {
      try {
        await signInOAuth(provider);
      } catch (error) {
        console.error("Error signing in:", error);
        toast({
          title: "Error",
          description: "An error occurred while signing in.",
          variant: "destructive",
        });
      }
    });
  }

  const emailForm = useForm<EmailFormInputs>({
    resolver: zodResolver(EmailFormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmitMagicLinks(data: EmailFormInputs) {
    startTransition(async () => {
      try {
        await signInMagicLinks("resend", data);
        toast({
          title: "Success",
          description: `We have sent a verification email to ${data.email}.`,
        });
      } catch (error) {
        console.error("Error signing in:", error);
        toast({
          title: "Error",
          description: "An error occurred while signing in.",
          variant: "destructive",
        });
      } finally {
        emailForm.reset();
      }
    });
  }

  return (
    <>
      <main className="flex min-h-[calc(100vh-64px)] flex-col items-center sm:p-6">
        <Card className="min-h-fit w-full border-none shadow-none sm:m-auto sm:w-auto sm:border-solid sm:border-border sm:shadow">
          <CardHeader className="text-center">
            <CardTitle>Join Now</CardTitle>
            <CardDescription>
              Make the most of your professional life.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {/* Socials */}
            <div className="mx-auto grid w-full gap-4">
              <OAuthButton
                provider="google"
                displayName="Google"
                handleSubmit={handleSubmitOAuth}
                isPending={isPending}
              />
              <OAuthButton
                provider="github"
                displayName="GitHub"
                handleSubmit={handleSubmitOAuth}
                isPending={isPending}
              />
            </div>

            {/* Divider */}
            <div className="relative mx-auto w-full">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  or
                </span>
              </div>
            </div>

            <Form {...emailForm}>
              <form
                className="mx-auto grid w-full gap-6"
                onSubmit={emailForm.handleSubmit(onSubmitMagicLinks)}
              >
                <FormField
                  control={emailForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="name@example.com"
                          {...field}
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
                <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <IoMailOutline />
                  )}
                  Continue with Email
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter>
            <p className="mx-auto h-full w-full text-wrap px-8 text-center text-sm text-muted-foreground">
              By joining, you agree to our{" "}
              <Link
                href="#"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="#"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
            </p>
          </CardFooter>
        </Card>
      </main>
    </>
  );
}
