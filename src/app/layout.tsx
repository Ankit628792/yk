import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yash Kumar',
  description: 'A Logo designer based in India',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
