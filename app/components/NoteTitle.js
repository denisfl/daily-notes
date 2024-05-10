import Link from 'next/link'
import { Roboto_Slab } from 'next/font/google'
const roboto = Roboto_Slab({ subsets: ['latin', 'cyrillic'] })

export default function NoteTitle({ title, noteId = null }) {
  return (
    <h2 className={roboto.className}>
      {noteId ? <Link href={`/notes/${noteId}`}>{title}</Link> : title}
    </h2>
  )
}
