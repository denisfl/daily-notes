import { getNotes } from '@/app/helpers/api'

import NotesList from '@/app/components/NotesList'

export default async function Home() {
  const notes = await getNotes()
  return <NotesList notes={notes} />
}
