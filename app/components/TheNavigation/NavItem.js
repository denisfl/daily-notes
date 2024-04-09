'use client'

import Link from 'next/link'
import styles from './nav.module.css'
import { usePathname } from 'next/navigation'

export default function NavItem({ children, link }) {
  const pathname = usePathname()
  const classes = [styles.link, `${pathname === link ? styles.active : ''}`].join(' ')

  return (
    <Link href={link} className={classes}>
      {children}
    </Link>
  )
}
