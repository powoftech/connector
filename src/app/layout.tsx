import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'
import { Inter, Oswald, Roboto_Mono } from 'next/font/google'
import './globals.css'

// Setup Inter and Roboto Mono from next/font/google
const inter = Inter({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-inter',
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-roboto-mono',
})

const oswald = Oswald({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-oswald',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Connector',
    default: 'Connector | Job Search and Professional Networking',
  },
  description:
    'Manage your professional identity. Build and engage with your professional network. Access knowledge, insights and opportunities.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${roboto_mono.variable} ${oswald.variable}`}
    >
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={`${inter.className} antialiased`} dir="ltr">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          themes={['light', 'dark']}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
