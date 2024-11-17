import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import { IoLogoGithub, IoLogoGoogle } from 'react-icons/io5'

type Provider = 'google' | 'github'

interface SocialButtonProps {
  provider: Provider
  providerName: string
  isPending: boolean
  onSignIn: (provider: Provider) => void
}

export function SocialButton({
  provider,
  providerName,
  isPending,
  onSignIn,
}: SocialButtonProps) {
  const icons = {
    google: IoLogoGoogle,
    github: IoLogoGithub,
  }
  const Icon = icons[provider]

  return (
    <form action={async () => onSignIn(provider)} className="flex w-full">
      <Button
        variant="outline"
        size="lg"
        className="flex w-full"
        type="submit"
        disabled={isPending}
      >
        {isPending ? <Loader2 className="animate-spin" /> : <Icon />}
        <span className="m-auto">Continue with {providerName}</span>
      </Button>
    </form>
  )
}
