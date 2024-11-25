import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Profile, User } from "@prisma/client";
import { IoCamera, IoPaperPlane, IoPersonAdd } from "react-icons/io5";
import { LuContact, LuPencil } from "react-icons/lu";

type BasicInformationCardProps = {
  isSelfProfile: boolean;
  image: User["image"] | undefined | null;
  name: User["name"] | undefined | null;
  headline: Profile["headline"] | undefined | null;
  cityName: string | undefined | null;
  countryName: string | undefined | null;
};

export default function BasicInformationCard({
  isSelfProfile,
  image,
  name,
  headline,
  cityName,
  countryName,
}: BasicInformationCardProps) {
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
            <AvatarImage src={image ?? undefined} />
            <AvatarFallback>{name?.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          {isSelfProfile && (
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full [&_svg]:size-6"
            >
              <LuPencil />
            </Button>
          )}
        </div>

        <div className="mt-2 flex h-fit min-h-20 flex-row">
          <div className="flex flex-col justify-start">
            <h1 className="text-2xl font-semibold leading-tight">{name}</h1>
            <p className="text-base font-normal leading-tight">{headline}</p>
            <p className="mt-1 text-sm font-normal text-muted-foreground">
              {cityName}
              {", "}
              {countryName}
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

        {isSelfProfile && (
          <Alert
            onClick={() => {}}
            className="mt-6 w-full cursor-pointer border-0 bg-secondary lg:w-4/5 xl:w-3/4"
          >
            <LuContact className="h-5 w-5" />
            <AlertTitle className="font-semibold leading-tight">
              Open to work
            </AlertTitle>
            <AlertDescription>
              <p className="truncate text-nowrap">
                Data Engineer and Software Engineer roles
              </p>
              <p
                onClick={() => {}}
                className="h-fit w-fit cursor-pointer font-medium text-muted-foreground hover:text-foreground hover:underline"
              >
                Show details
              </p>
            </AlertDescription>
            <AlertDescription></AlertDescription>
          </Alert>
        )}
      </div>
    </section>
  );
}
