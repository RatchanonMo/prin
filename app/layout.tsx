import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AccessControlProvider } from "@/components/access-control"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GreenStart | ESG Reporting for Startups",
  description: "Simple, educational ESG reporting platform for startups",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <AccessControlProvider>{children}</AccessControlProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

