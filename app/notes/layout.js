import TheNavigation from '@/app/components/TheNavigation/index'

export const metadata = {
  title: 'Notes by Denis Fedosov-Ledovskikh',
  description:
    'Personal page of Denis Fedosov-Ledovskikh. I am frontend developer who loves to make web-services, write notes and learn new things.',
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
