import MainProfile from "@/app/(platform)/in/[[...slug]]/main-profile";
import getSession from "@/lib/get-session";
import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { getUserWithProfile } from "./actions";

export const metadata: Metadata = {};

type Props = {
  params: {
    slug: string[];
  };
};

export default async function Page({ params }: Props) {
  const session = await getSession();

  if (!params.slug) redirect(`/in/${session?.user?.profile.customURL}`);

  if (params.slug.length > 1) notFound();

  const profileUrl = params.slug[0];

  const foundUser = await getUserWithProfile(profileUrl);

  if (!foundUser) notFound();

  const isSelfProfile = session?.user.id === foundUser?.id;

  metadata.title = foundUser?.name;

  return (
    <>
      <MainProfile profileUrl={profileUrl} isSelfProfile={isSelfProfile} />
    </>
  );
}
