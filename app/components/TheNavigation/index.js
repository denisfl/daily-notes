import { Roboto_Slab } from 'next/font/google'
import { HomeIcon, NewspaperIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import styles from './nav.module.css'
import NavItem from './NavItem'
import bmcButton from './bmc-button.svg'

const roboto = Roboto_Slab({ subsets: ['cyrillic'] })

export default function TheNavigation() {
  return (
    <nav className={[styles.nav, roboto.className].join(' ')}>
      <NavItem link="/">
        <HomeIcon className="svg-icon" />
        <span>Главная</span>
      </NavItem>
      <NavItem link="/notes">
        <NewspaperIcon className="svg-icon" />
        <span>Заметки</span>
      </NavItem>

      <NavItem link="https://www.buymeacoffee.com/denisfl" isRight>
        <Image src={bmcButton} alt="Buy Me A Coffee" height={26} />
      </NavItem>
    </nav>
  )
}
