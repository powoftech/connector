'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { IoCog, IoMoon, IoSunny } from 'react-icons/io5'

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) {
    return null
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-input bg-background shadow-sm">
      <button
        onClick={() => setTheme('system')}
        className={`rounded-full p-1.5 ${
          theme === 'system'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'text-secondary-foreground hover:bg-accent hover:text-accent-foreground'
        }`}
        aria-label="System theme"
      >
        <IoCog className="h-5 w-5" />
      </button>
      <button
        onClick={() => setTheme('light')}
        className={`rounded-full p-1.5 ${
          theme === 'light'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'text-secondary-foreground hover:bg-accent hover:text-accent-foreground'
        }`}
        aria-label="Light theme"
      >
        <IoSunny className="h-5 w-5" />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`rounded-full p-1.5 ${
          theme === 'dark'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'text-secondary-foreground hover:bg-accent hover:text-accent-foreground'
        }`}
        aria-label="Dark theme"
      >
        <IoMoon className="h-5 w-5" />
      </button>
    </div>
  )
}
