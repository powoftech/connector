import prisma from '@/lib/prisma'
import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth from 'next-auth'
import { Adapter } from 'next-auth/adapters'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
import Resend from 'next-auth/providers/resend'

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    Google({allowDangerousEmailAccountLinking: true}),
    GitHub({allowDangerousEmailAccountLinking: true}),
    Resend({
      from: 'noreply@connector.rocks',
      maxAge: 60 * 60,
    }),
  ],
  trustHost: true,
})
