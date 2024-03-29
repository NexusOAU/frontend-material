import type { Metadata } from 'next'
import { Rambla } from 'next/font/google'
import './globals.css'

const inter = Rambla({
  subsets: ['latin'],
  weight: ["400", "700"]
})

export const metadata: Metadata = {
  title: 'Nexus Reader',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
