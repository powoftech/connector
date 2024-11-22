import MainProfile from "@/app/(platform)/in/[slug]/main-profile";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  return (
    <>
      <MainProfile slug={params.slug} />
    </>
  );
}
