import NoteTitle from '@/app/components/NoteTitle'
import NoteContent from '@/app/components/NoteContent'

export default async function Notes({ notes }) {
  return (
    <section>
      {notes.map((note) => {
        return (
          <article className="note" key={note.id}>
            <NoteTitle title={note.title.rendered} noteId={note.id} />
            <NoteContent content={note.content.rendered} />
          </article>
        )
      })}
    </section>
  )
}
