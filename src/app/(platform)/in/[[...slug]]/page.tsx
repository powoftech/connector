import { fetchUserWithProfile } from "@/app/(platform)/in/[[...slug]]/data";
import MainProfile from "@/app/(platform)/in/[[...slug]]/main-profile";
import getSession from "@/lib/get-session";
import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;

  if (slug) {
    const profileUrl = slug[0];
    const userName = await fetchUserWithProfile(profileUrl).then(
      (user) => user?.name
    );

    return {
      title: userName,
    };
  }

  return {};
}

export default async function Page({ params }: Props) {
  const session = await getSession();

  const slug = (await params).slug;

  if (!slug) redirect(`/in/${session?.user?.profile.customURL}`);

  if (slug.length > 1) notFound();

  const profileUrl = slug[0];

  const foundUser = await fetchUserWithProfile(profileUrl);

  if (!foundUser) notFound();

  const isSelfProfile = session?.user.id === foundUser.id;

  return (
    <>
      <MainProfile userWithProfile={foundUser} isSelfProfile={isSelfProfile} />
    </>
  );
}
