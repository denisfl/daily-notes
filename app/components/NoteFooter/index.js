import styles from './styles.module.css'
import TagsList from '@/app/components/TagsList/index'
import { format } from 'date-fns'
import { CalendarIcon } from '@heroicons/react/24/outline'

export default function NoteFooter({ date, tags }) {
  const formattedDate = format(new Date(date), 'dd.MM.yyyy HH:mm')
  return (
    <div className={styles.footer}>
      <span>
        <CalendarIcon className="svg-icon" />
        <time className={styles.time} dateTime={date}>
          {formattedDate}
        </time>
      </span>
      <TagsList tags={tags} />
    </div>
  )
}
