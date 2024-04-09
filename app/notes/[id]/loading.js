import styles from '@/app/page.module.css'
import Link from 'next/link'

export default function Loading() {
  return (
    <section>
      <div className={styles.backLink}>
        <Link href="/">← Назад</Link>
      </div>
      <article className="note">
        <h2>
          <div className="skeleton">
            <div className="skeleton-item"></div>
          </div>
        </h2>
        <div className="note-content">
          <div className="skeleton">
            <div className="skeleton-item"></div>
            <div className="skeleton-item" style={{ width: '80%' }}></div>
            <div className="skeleton-item" style={{ width: '80%' }}></div>
            <div className="skeleton-item" style={{ width: '60%' }}></div>
            <div className="skeleton-item" style={{ width: '40%' }}></div>
            <div className="skeleton-item" style={{ width: '75%' }}></div>
            <div className="skeleton-item" style={{ width: '75%' }}></div>
            <div className="skeleton-item"></div>
            <div className="skeleton-item" style={{ width: '80%' }}></div>
            <div className="skeleton-item" style={{ width: '80%' }}></div>
            <div className="skeleton-item" style={{ width: '60%' }}></div>
            <div className="skeleton-item" style={{ width: '40%' }}></div>
            <div className="skeleton-item" style={{ width: '75%' }}></div>
            <div className="skeleton-item" style={{ width: '75%' }}></div>
            <div className="skeleton-item"></div>
            <div className="skeleton-item" style={{ width: '80%' }}></div>
            <div className="skeleton-item" style={{ width: '80%' }}></div>
            <div className="skeleton-item" style={{ width: '60%' }}></div>
            <div className="skeleton-item" style={{ width: '40%' }}></div>
            <div className="skeleton-item" style={{ width: '75%' }}></div>
            <div className="skeleton-item" style={{ width: '75%' }}></div>
          </div>
        </div>
      </article>
    </section>
  )
}
