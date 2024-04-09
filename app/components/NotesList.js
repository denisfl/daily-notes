import NoteTitle from '@/app/components/NoteTitle'
import NoteContent from '@/app/components/NoteContent'
import NoteFooter from '@/app/components/NoteFooter'

export default async function Notes({ notes }) {
  return (
    <section>
      {notes.nodes.map((note) => {
        return (
          <article className="note" key={note.id}>
            <NoteTitle title={note.title} noteId={note.databaseId} />
            <NoteContent content={note.content} />
            <NoteFooter date={note.date} tags={note.tags.nodes} />
          </article>
        )
      })}
    </section>
  )
}
