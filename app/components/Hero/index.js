import { DocumentTextIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import styles from './styles.module.css'

export default function Hero() {
  return (
    <div className={styles.hero}>
      <p>Hey,</p>
      <p>
        I am Denis Fedosov-Ledovskikh. I have been making web-services for more than fifteen years.
        This amount of time scares even me. But I love what I do, and I am ready for new horizons.
        Occasionally, I am writing <Link href={'/notes'}>notes</Link> (in Russian).
      </p>
      <p>You are welcome to write me at denisfl@pm.me</p>
      <p>
        <a
          className="link"
          href="https://github.com/denisfl/denisfl/raw/master/assets/files/Denis_Fedosov-Ledovskikh_CV.pdf"
        >
          <DocumentTextIcon className="svg-icon" />
          <span className="link-text">CV (.pdf)</span>
        </a>
      </p>
    </div>
  )
}
