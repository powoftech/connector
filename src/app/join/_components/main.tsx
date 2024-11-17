'use client'

import { SocialButton } from '@/app/join/_components/social-button'
import { AuthProvider, signInWithRedirect } from '@/app/join/actions'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'
import { EmailFormSchema } from '@/lib/definitions'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function Main() {
  const { toast } = useToast()
  const [isPending, startTransition] = useTransition()

  const emailForm = useForm<z.infer<typeof EmailFormSchema>>({
    resolver: zodResolver(EmailFormSchema),
    defaultValues: {
      email: '',
    },
  })

  function handleSignIn(
    provider: AuthProvider,
    data?: z.infer<typeof EmailFormSchema>,
  ) {
    startTransition(() => {
      try {
        signInWithRedirect(provider, data)
        toast({
          title: 'Success',
          description: `We've sent a verification email to ${data?.email}.`,
        })
      } catch (error) {
        console.error('Error signing in:', error)
        toast({
          title: 'Error',
          description: 'An error occurred while signing in.',
          variant: 'destructive',
        })
      }
    })
  }

  return (
    <>
      <main className="flex min-h-[calc(100vh-64px)] flex-col items-center sm:p-12">
        <Card className="min-h-fit border-none shadow-none sm:m-auto sm:border-solid sm:border-border sm:shadow">
          <CardHeader className="sm:items-center sm:justify-center">
            <CardTitle>Join Now</CardTitle>
            <CardDescription>
              Make the most of your professional life.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Socials */}
            <div className="mx-auto flex w-full flex-col items-center justify-between gap-4 sm:w-1/2 sm:min-w-[432px]">
              <SocialButton
                provider="google"
                providerName="Google"
                isPending={isPending}
                onSignIn={handleSignIn}
              />
              <SocialButton
                provider="github"
                providerName="GitHub"
                isPending={isPending}
                onSignIn={handleSignIn}
              />
            </div>

            {/* Divider */}
            <div className="relative mx-auto py-8 sm:w-2/3 sm:min-w-[432px]">
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
                className="mx-auto flex w-full flex-col items-center gap-4 sm:w-1/2 sm:min-w-[432px]"
                onSubmit={emailForm.handleSubmit((data) => {
                  try {
                    handleSignIn('resend', data)
                  } catch {
                  } finally {
                    emailForm.reset()
                  }
                })}
              >
                <FormField
                  control={emailForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
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
                <Button
                  size="lg"
                  type="submit"
                  className="w-full"
                  disabled={isPending}
                >
                  {isPending && <Loader2 className="animate-spin" />}
                  <span className="m-auto">Continue with Email</span>
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter>
            <p className="mx-auto h-full w-full text-center text-xs leading-5 text-muted-foreground">
              By joining, you agree to our{' '}
              <Link
                href="#"
                className="font-medium text-primary hover:underline"
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                href="#"
                className="font-medium text-primary hover:underline"
              >
                Privacy Policy
              </Link>
            </p>
          </CardFooter>
        </Card>
      </main>
    </>
  )
}
