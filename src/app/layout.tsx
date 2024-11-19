import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

// Setup Inter and Roboto Mono from next/font/google
const inter = Inter({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-inter",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Connector",
    default: "Connector",
  },
  description:
    "Manage your professional identity. Build and engage with your professional network. Access knowledge, insights and opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${roboto_mono.variable}`}
    >
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={`${inter.className} antialiased`} dir="ltr">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          // enableSystem
          // disableTransitionOnChange
          themes={["light", "dark"]}
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
