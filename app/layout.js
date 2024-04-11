import { Inter, Roboto_Slab } from 'next/font/google'
import './globals.css'
import TheNavigation from '@/app/components/TheNavigation/index'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Notes',
  description: 'Notes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className={inter.className}>
        {/* <header className="the-header">
          <div className="container">
            <TheNavigation />
          </div>
        </header> */}
        {children}
      </body>
    </html>
  )
}
