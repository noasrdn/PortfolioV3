import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: "Noa Serodon - Portfolio",
  description: "Portfolio de Noa Serodon, étudiant en 2ème année de BUT MMI spécialité développement web. Découvrez mes projets et mes compétences !",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.ico" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
