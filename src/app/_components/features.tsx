import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  IoBriefcaseOutline,
  IoGlobeOutline,
  IoPeopleOutline,
  IoSparklesOutline,
} from 'react-icons/io5'

export default function Features() {
  return (
    <div className="relative min-h-[50vh] w-full bg-white bg-grid-small-black/[0.2] dark:bg-black dark:bg-grid-small-white/[0.2]">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      <div className="relative z-20 m-auto flex h-full max-w-screen-xl flex-col items-center justify-center gap-6 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text p-6 text-transparent sm:gap-12">
        <h2 className="text-center text-4xl font-bold tracking-tighter sm:text-6xl">
          Why Choose Connector?
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <IoPeopleOutline className="mb-2 h-8 w-8" />
              <CardTitle>Expansive Network</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Connect with millions of professionals and industry leaders
                worldwide.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <IoBriefcaseOutline className="mb-2 h-8 w-8" />
              <CardTitle>Career Opportunities</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Discover job openings tailored to your skills and aspirations.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <IoGlobeOutline className="mb-2 h-8 w-8" />
              <CardTitle>Global Reach</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Expand your professional horizons across borders and cultures.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <IoSparklesOutline className="mb-2 h-8 w-8" />
              <CardTitle>Skill Development</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Access resources and courses to enhance your professional
                skills.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
