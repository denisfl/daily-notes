import NoteTitle from '@/app/components/NoteTitle'
import NoteContent from '@/app/components/NoteContent'
import NoteFooter from '@/app/components/NoteFooter'
import EmptyState from '@/app/components/EmptyState'

export default function Notes({ notes }) {
  if (notes.nodes.length === 0) return <EmptyState />
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
