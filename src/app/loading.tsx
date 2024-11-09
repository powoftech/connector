'use client'

import { Icon } from '@/app/_images/icon'
import { LogoLight } from '@/app/_images/logo'
import { Progress } from '@/components/ui/progress'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Loading() {
  const [progress, setProgress] = useState(0)
  const [isIncreasing, setIsIncreasing] = useState(true)

  useEffect(() => {
    const STEP = 20

    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100 - STEP / 2) {
          setIsIncreasing(false)
          return prevProgress - STEP
        }
        if (prevProgress <= STEP / 2) {
          setIsIncreasing(true)
          return prevProgress + STEP
        }
        return isIncreasing ? prevProgress + STEP : prevProgress - STEP
      })
    }, 100)

    return () => clearInterval(timer)
  }, [isIncreasing])

  return (
    <div className="flex h-screen items-center justify-center text-center">
      <div className="flex flex-col items-center justify-center gap-8 md:gap-12">
        <Image
          src={LogoLight.default}
          alt="Connector Logo"
          height={96}
          className="hidden dark:invert md:block"
          priority
        />
        <Image
          src={Icon.default}
          alt="Connector Logo"
          height={96}
          className="block dark:invert md:hidden"
          priority
        />
        <Progress value={progress} className="w-48 md:w-128" />
      </div>
    </div>
  )
}
