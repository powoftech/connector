"use server";

import { signIn } from "@/auth";
import { EmailFormInputs } from "@/lib/definitions";

export type OAuthProvider = "google" | "github";
export type MagicLinksProvider = "resend";

const DEFAULT_REDIRECT_TO = "/";

export async function signInOAuth(provider: OAuthProvider) {
  await signIn(provider, { redirectTo: DEFAULT_REDIRECT_TO, redirect: true });
}

export async function signInMagicLinks(
  provider: MagicLinksProvider,
  data: EmailFormInputs
) {
  await signIn(provider, {
    email: data.email,
    redirectTo: DEFAULT_REDIRECT_TO,
    redirect: false,
  });
}
