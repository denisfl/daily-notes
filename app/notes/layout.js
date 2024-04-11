import { Inter, Roboto_Slab } from 'next/font/google'
import TheNavigation from '@/app/components/TheNavigation/index'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Notes',
  description: 'Notes',
}

export default function RootLayout({ children }) {
  return (
    <>
      <header className="the-header">
        <div className="container">
          <TheNavigation />
        </div>
      </header>
      <main className="main">{children}</main>
    </>
  )
}
