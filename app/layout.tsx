import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'JHONTRAKTOR',
  description: 'JHONTRAKTOR Is a Construction Company',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-hitam'>
      <body>{children}</body>
    </html>
  )
}
