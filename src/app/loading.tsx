'use client'

import logo from '@/app/logo.svg'
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
        <div className="flex w-full flex-row items-center justify-center gap-6">
          <Image
            src={logo}
            alt="Connector Logo"
            className="w-24 dark:invert md:w-36"
            priority
          />
          <h1 className="hidden text-5xl font-extrabold md:block">Connector</h1>
        </div>
        <Progress value={progress} className="md:w-128 w-48" />
      </div>
    </div>
  )
}
