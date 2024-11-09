'use client'

import { useEffect, useState } from 'react'
import { IoMoon, IoOptions, IoSunny } from 'react-icons/io5'

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system')

  useEffect(() => {
    // Get initial theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme') as
      | 'light'
      | 'dark'
      | 'system'
      | null
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light'

    const initialTheme = savedTheme || 'system'
    setTheme(initialTheme)
    document.documentElement.classList.toggle(
      'dark',
      initialTheme === 'dark' ||
        (initialTheme === 'system' && systemTheme === 'dark'),
    )
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = () => {
      if (theme === 'system') {
        document.documentElement.classList.toggle('dark', mediaQuery.matches)
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme])

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)

    if (newTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'
      document.documentElement.classList.toggle('dark', systemTheme === 'dark')
    } else {
      document.documentElement.classList.toggle('dark', newTheme === 'dark')
    }
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-input bg-background shadow-sm">
      <button
        onClick={() => handleThemeChange('system')}
        className={`rounded-full p-1.5 ${
          theme === 'system'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'text-secondary-foreground hover:bg-accent hover:text-accent-foreground'
        }`}
        aria-label="System theme"
      >
        <IoOptions className="h-5 w-5" />
      </button>
      <button
        onClick={() => handleThemeChange('light')}
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
        onClick={() => handleThemeChange('dark')}
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
