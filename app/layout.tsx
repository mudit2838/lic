import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pitamber Singh | LIC Insurance Advisor',
  description: 'Trusted LIC Insurance Agent — Secure your future with the right plan. Life, Term, Pension, Health & Child Plans.',
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
