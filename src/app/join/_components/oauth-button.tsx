import { OAuthProvider } from "@/app/join/actions";
import { Button } from "@/components/ui/button";
import { IoLogoGithub, IoLogoGoogle } from "react-icons/io5";
import { LuLoader2 } from "react-icons/lu";

interface OAuthButtonProps {
  provider: OAuthProvider;
  displayName: string;
  isPending: boolean;
  handleSubmit: (provider: OAuthProvider) => void;
}

const icons = {
  google: IoLogoGoogle,
  github: IoLogoGithub,
};

export function OAuthButton({
  provider,
  displayName,
  isPending,
  handleSubmit,
}: OAuthButtonProps) {
  const Icon = icons[provider];

  return (
    <form
      className="flex w-full"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(provider);
      }}
    >
      <Button
        variant="outline"
        className="w-full"
        type="submit"
        disabled={isPending}
      >
        {isPending ? <LuLoader2 className="animate-spin" /> : <Icon />}
        Continue with {displayName}
      </Button>
    </form>
  );
}
