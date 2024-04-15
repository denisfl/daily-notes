'use client'

import Link from 'next/link'
import styles from './nav.module.css'
import { usePathname } from 'next/navigation'

export default function NavItem({ children, link, isRight = false }) {
  const pathname = usePathname()
  const classes = [
    styles.link,
    `${isRight ? styles.isRight : ''} ${pathname === link ? styles.active : ''}`,
  ].join(' ')

  return (
    <Link href={link} className={classes}>
      {children}
    </Link>
  )
}
