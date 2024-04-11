import { fetchNotes } from '@/app/helpers/api'
import NotesList from '@/app/components/NotesList'

export default async function Notes() {
  const notes = await fetchNotes()
  return <NotesList notes={notes} />
}
