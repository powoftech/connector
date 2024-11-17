'use server'

import { signIn } from '@/auth'
import { EmailFormSchema } from '@/lib/definitions'
import { z } from 'zod'

export type AuthProvider = 'google' | 'github' | 'resend'

interface SignInOptions {
  redirectTo: string
  redirect?: boolean
  email?: string | null
}

const DEFAULT_REDIRECT_TO = '/feed'

export async function signInWithRedirect(
  provider: AuthProvider,
  data?: z.infer<typeof EmailFormSchema>,
): Promise<void> {
  const signInOptions: SignInOptions = {
    redirectTo: DEFAULT_REDIRECT_TO,
    redirect: !data,
    email: data?.email || null,
  }

  await signIn(provider, signInOptions)
}
