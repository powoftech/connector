import BasicInformationCard from "@/app/(platform)/in/[[...slug]]/_components/basic-information-card";
import { UserWithProfile } from "@/app/(platform)/in/[[...slug]]/data";
import { cn } from "@/lib/utils";

export default function MainProfile({
  userWithProfile,
  isSelfProfile,
}: {
  userWithProfile: UserWithProfile;
  isSelfProfile: boolean;
}) {
  return (
    <div className="py-4 md:px-6">
      <div
        className={cn(
          "mx-auto flex w-full flex-col items-center justify-between gap-4",
          "md:max-w-6xl md:flex-row md:items-start"
        )}
      >
        <main className="flex w-full flex-initial flex-shrink flex-col items-center justify-start gap-4">
          <BasicInformationCard
            userWithProfile={userWithProfile}
            isSelfProfile={isSelfProfile}
          />

          <section className="w-full">
            <div className="relative h-48 w-full bg-chart-4 md:rounded-md"></div>
          </section>
        </main>

        <aside className="block h-screen w-full flex-none border md:w-80 md:rounded-md"></aside>
      </div>
    </div>
  );
}
