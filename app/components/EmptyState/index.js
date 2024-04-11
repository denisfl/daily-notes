import { InboxIcon } from '@heroicons/react/24/outline'
import styles from './styles.module.css'

export default async function EmptyState({ text = 'Nothing found' }) {
  return (
    <div className={styles.empty}>
      <InboxIcon className={['svg-icon', styles.icon].join(' ')} />
      <p>{text}</p>
    </div>
  )
}
