import { signOut } from '@/auth'
import { Button } from '@/components/ui/button'
import getSession from '@/lib/get-session'
import { redirect } from 'next/navigation'

export default async function Page() {
  const session = await getSession()

  if (!session) {
    redirect('/join')
  }

  const user = session?.user

  return (
    <>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <form
        action={async () => {
          'use server'
          await signOut({redirectTo: '/join', redirect: true})
        }}
      >
        <Button type="submit">Sign out</Button>
      </form>
    </>
  )
}
