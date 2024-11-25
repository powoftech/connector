import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";

// Setup Inter and Roboto Mono from next/font/google
const inter = Inter({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-inter",
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
    <html lang="en" suppressHydrationWarning className={`${inter.variable}`}>
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>
      <body
        dir="ltr"
        className={`${inter.className} antialiased`}
        style={
          {
            "--header-height": `56px`,
            "--footer-height-desktop": `84px`,
            "--footer-height-mobile": `140px`,
            "--left-sidebar-width": `360px`,
            "--main-content-width": `720px`,
            "--right-sidebar-width": `360px`,
          } as React.CSSProperties
        }
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          // enableSystem
          // disableTransitionOnChange
          themes={["light", "dark"]}
        >
          {children}
        </ThemeProvider>
        <Toaster expand={true} />
      </body>
    </html>
  );
}
