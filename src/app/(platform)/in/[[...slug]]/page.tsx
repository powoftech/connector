import { fetchUserWithProfile } from "@/app/(platform)/in/[[...slug]]/data";
import MainProfile from "@/app/(platform)/in/[[...slug]]/main-profile";
import getSession from "@/lib/get-session";
import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

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

  const foundUser = await fetchUserWithProfile(profileUrl);

  if (!foundUser) notFound();

  const isSelfProfile = session?.user.id === foundUser?.id;

  metadata.title = foundUser?.name;

  return (
    <>
      <MainProfile userWithProfile={foundUser} isSelfProfile={isSelfProfile} />
    </>
  );
}
