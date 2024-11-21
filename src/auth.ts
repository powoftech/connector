import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { Adapter } from "next-auth/adapters";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Resend from "next-auth/providers/resend";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    Google({ allowDangerousEmailAccountLinking: true }),
    GitHub({ allowDangerousEmailAccountLinking: true }),
    Resend({
      from: "noreply@connector.rocks",
      maxAge: 60 * 60,
    }),
  ],
  callbacks: {
    session: async ({ session }) => {
      return {
        ...session,
        user: {
          id: session.user.id,
          email: session.user.email,
          name: session.user.name,
          image: session.user.image,
          profile: await prisma.profile.findUnique({
            where: { userId: session.user.id },
            select: {
              customURL: true,
              role: true,
              headline: true,
              about: true,
              country: {
                select: {
                  name: true,
                },
              },
              city: {
                select: {
                  name: true,
                },
              },
            },
          }),
        },
      };
    },
  },
  trustHost: true,
});
