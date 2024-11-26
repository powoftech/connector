import EditProfileForm from "@/app/(platform)/in/[[...slug]]/_components/edit-profile-form";
import OpenToWorkCard from "@/app/(platform)/in/[[...slug]]/_components/open-to-work-card";
import { UserWithProfile } from "@/app/(platform)/in/[[...slug]]/data";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IoCamera, IoPaperPlane, IoPersonAdd } from "react-icons/io5";
import { LuPencil } from "react-icons/lu";

export default function BasicInformationCard({
  userWithProfile,
  isSelfProfile,
}: {
  userWithProfile: UserWithProfile;
  isSelfProfile: boolean;
}) {
  return (
    <section className="w-full rounded-t-md border bg-background md:rounded-md">
      <div className="relative max-h-[204px] rounded-t-md bg-chart-3">
        <AspectRatio ratio={4 / 1}></AspectRatio>
        <Button
          size="icon"
          variant="secondary"
          className="absolute right-5 top-5 h-8 w-8 rounded-full"
        >
          <IoCamera />
        </Button>
      </div>
      <div className="px-6 pb-6">
        <div className="relative flex h-14 flex-row items-end justify-between">
          <Avatar className="-mt-28 h-32 w-32 shrink-0 select-none border-4 border-background bg-background p-0 md:h-36 md:w-36 lg:h-40 lg:w-40">
            <AvatarImage src={userWithProfile?.image ?? undefined} />
            <AvatarFallback>
              {userWithProfile?.name?.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          {isSelfProfile && (
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full [&_svg]:size-6"
                >
                  <LuPencil />
                </Button>
              </DialogTrigger>
              <DialogContent className="md:max-w-[var(--main-content-width)]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here.
                  </DialogDescription>
                </DialogHeader>
                <EditProfileForm />
              </DialogContent>
            </Dialog>
          )}
        </div>

        <div className="mt-2 flex h-fit min-h-20 flex-row">
          <div className="flex flex-col justify-start">
            <h1 className="text-2xl font-semibold leading-tight">
              {userWithProfile?.name}
            </h1>
            <p className="text-base font-normal leading-tight">
              {userWithProfile?.profile?.headline}
            </p>
            <p className="mt-1 text-sm font-normal text-muted-foreground">
              {`${userWithProfile?.profile?.city?.name}, ${userWithProfile?.profile?.country?.name}`}
            </p>
          </div>

          {/* Latest Education and Experience */}
        </div>

        <div className="mt-2 flex w-full flex-row flex-wrap gap-2">
          {isSelfProfile ? (
            <>
              <Button
                variant="default"
                className="h-9 rounded-full px-4 py-[6px] text-base font-semibold [&_svg]:size-[18px]"
              >
                Add profile section
              </Button>

              {/* <Button
                variant="outline"
                className="h-9 rounded-full px-4 py-[6px] text-base font-semibold [&_svg]:size-[18px]"
              >
                <IoBookmarkOutline />
                Saved Items
              </Button>
              <Button
                variant="outline"
                className="h-9 rounded-full px-4 py-[6px] text-base font-semibold [&_svg]:size-[18px]"
              >
                <IoDownloadOutline />
                Save to PDF
              </Button> */}
            </>
          ) : (
            <>
              <Button
                variant="default"
                className="h-9 rounded-full px-4 py-[6px] text-base font-semibold [&_svg]:size-[18px]"
              >
                <IoPersonAdd />
                Connect
              </Button>
              <Button
                variant="default"
                className="h-9 rounded-full px-4 py-[6px] text-base font-semibold [&_svg]:size-[18px]"
              >
                <IoPaperPlane />
                Message
              </Button>
            </>
          )}
        </div>

        {isSelfProfile && <OpenToWorkCard />}
      </div>
    </section>
  );
}
