'use client'

import Footer from '@/app/_components/footer'
import { LogoLight } from '@/app/_images/logo'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {
  IoEyeOffOutline,
  IoEyeOutline,
  IoLogoGithub,
  IoLogoGoogle,
} from 'react-icons/io5'

export default function Page() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      <main className="flex min-h-screen flex-col items-center from-secondary to-background sm:bg-gradient-to-b sm:p-12">
        <Card className="min-h-fit w-full rounded-none border-none shadow-none sm:m-auto sm:max-w-4xl sm:rounded-xl sm:border-solid sm:border-border sm:shadow">
          <CardHeader className="flex items-center gap-y-2">
            <Link href="/" className="">
              <Image
                src={LogoLight.default}
                alt="Connector logo"
                className="h-10 w-auto dark:invert"
                priority
              />
            </Link>
            {/* <p className="text-center text-2xl font-bold sm:text-4xl">
              Sign In to Connector
            </p> */}
          </CardHeader>
          <CardContent>
            <form
              className="mx-auto flex w-full flex-col items-center gap-4 sm:w-1/2 sm:min-w-[432px]"
              onSubmit={() => {}}
            >
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="h-12 rounded"
                  required
                />
              </div>
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="password">Password (6+ characters)</Label>
                <div className="relative w-full">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    placeholder="Password"
                    className="h-12 pr-12"
                    minLength={6}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-12 w-12 text-primary"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <IoEyeOutline className="" />
                    ) : (
                      <IoEyeOffOutline className="" />
                    )}
                    <span className="sr-only">
                      {showPassword ? 'Hide password' : 'Show password'}
                    </span>
                  </Button>
                </div>
              </div>
              <p className="text-center text-xs leading-5 text-muted-foreground">
                By clicking Agree & Join or Continue, you agree to
                <br />
                Connector&apos;s{' '}
                <Link href="/" className="font-medium text-primary underline">
                  Terms of Service
                </Link>
                , and{' '}
                <Link href="/" className="font-medium text-primary underline">
                  Privacy Policy
                </Link>
                .
              </p>
              <Button
                size={'lg'}
                type="submit"
                className="h-12 w-full"
                onSubmit={() => {}}
              >
                Agree & Join
              </Button>
            </form>

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

            <div className="mx-auto flex w-full flex-col items-center justify-between gap-4 sm:w-1/2 sm:min-w-[432px]">
              <Button
                variant={'outline'}
                size={'lg'}
                className="flex h-12 w-full"
              >
                <IoLogoGoogle />
                <span className="m-auto">Continue with Google</span>
              </Button>
              <Button
                variant={'outline'}
                size={'lg'}
                className="flex h-12 w-full"
              >
                <IoLogoGithub className="h-96" />
                <span className="m-auto">Continue with GitHub</span>
              </Button>
            </div>
          </CardContent>
          <CardFooter>
            <p className="mx-auto h-full w-full space-y-1 py-8 text-center">
              <span className="text-muted-foreground">
                Already on Connector?{' '}
              </span>
              <Link
                href="/signin"
                className="block font-semibold underline sm:inline"
              >
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </main>

      <Footer />
    </>
  )
}
