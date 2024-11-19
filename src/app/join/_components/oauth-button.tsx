import { OAuthProvider } from "@/app/join/actions";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { IoLogoGithub, IoLogoGoogle } from "react-icons/io5";

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
        className="w-full rounded-full"
        type="submit"
        disabled={isPending}
      >
        {isPending ? <Loader2 className="animate-spin" /> : <Icon />}
        <span className="m-auto">Continue with {displayName}</span>
      </Button>
    </form>
  );
}
