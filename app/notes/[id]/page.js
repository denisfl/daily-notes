'use client'
import useRequest from '@/app/hooks/useRequest'
import query from './fetchNote'
import Loading from './loading'
import NoteTitle from '@/app/components/NoteTitle'
import NoteContent from '@/app/components/NoteContent'
import NoteFooter from '@/app/components/NoteFooter'

export default function Note({ params }) {
  const { data, isLoading, isError } = useRequest(query, { id: params.id })

  if (isLoading) return <Loading />
  if (isError) return 'An error has occurred.'

  return (
    <section>
      <article className="note" key={data.post.id}>
        <NoteTitle title={data.post.title} />
        <NoteContent content={data.post.content} />
        <NoteFooter date={data.post.date} tags={data.post.tags.nodes} />
      </article>
    </section>
  )
}
