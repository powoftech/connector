import Main from "@/app/(platform)/feed/main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feed",
};

export default function Page() {
  return (
    <>
      <Main />
    </>
  );
}
