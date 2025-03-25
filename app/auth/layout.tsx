import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Authentication | GreenStart ESG Reporting",
  description: "Sign in or create an account for GreenStart ESG Reporting platform",
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

