import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Denis Fedosov-Ledovskikh',
  description:
    'Personal page of Denis Fedosov-Ledovskikh. I am frontend developer who loves to make web-services, write notes and learn new things.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" type="image/svg+xml" href="./favicon.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
