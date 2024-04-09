import { Roboto_Slab } from 'next/font/google'
import { HomeIcon, NewspaperIcon } from '@heroicons/react/24/outline'
import styles from './nav.module.css'
import NavItem from './NavItem'

const roboto = Roboto_Slab({ subsets: ['cyrillic'] })

export default function TheNavigation() {
  return (
    <nav className={[styles.nav, roboto.className].join(' ')}>
      <NavItem link="/">
        <HomeIcon className="svg-icon" /> Home
      </NavItem>
      <NavItem link="/notes">
        <NewspaperIcon className="svg-icon" /> Notes
      </NavItem>
    </nav>
  )
}
