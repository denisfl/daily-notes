import styles from '@/app/page.module.css'
import Link from 'next/link'
import { getNote } from '@/app/helpers/api'
import NoteTitle from '@/app/components/NoteTitle'
import NoteContent from '@/app/components/NoteContent'

export default async function Note({ params }) {
  const note = await getNote(params.id)

  return (
    <section>
      <div className={styles.backLink}>
        <Link href="/">← Назад</Link>
      </div>
      <article className="note" key={note.id}>
        <NoteTitle title={note.title.rendered} />
        <NoteContent content={note.content.rendered} />
      </article>
    </section>
  )
}
