export default function NoteContent({ content }) {
  return <div className="note-content" dangerouslySetInnerHTML={{ __html: content }}></div>
}
