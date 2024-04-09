import { fetchNote } from '@/app/helpers/api'
import NoteTitle from '@/app/components/NoteTitle'
import NoteContent from '@/app/components/NoteContent'
import NoteFooter from '@/app/components/NoteFooter'

export default async function Note({ params }) {
  const note = await fetchNote(params.id)

  return (
    <section>
      <article className="note" key={note.id}>
        <NoteTitle title={note.title} />
        <NoteContent content={note.content} />
        <NoteFooter date={note.date} tags={note.tags.nodes} />
      </article>
    </section>
  )
}
