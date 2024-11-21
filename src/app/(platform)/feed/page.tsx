import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feed",
};

export default async function Page() {
  return (
    <>
      <div className="h-[calc(200vh-var(--header-height))]"></div>
    </>
  );
}
