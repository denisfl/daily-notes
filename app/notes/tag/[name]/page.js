'use client'
import useRequest from '@/app/hooks/useRequest'
import query from '@/app/queries/fetchNotes'
import NotesList from '@/app/components/NotesList'
import LoadingList from '@/app/components/LoadingList'

export default function Tags({ params }) {
  const { data, isLoading } = useRequest(query, { tag: params.name })
  if (isLoading) return <LoadingList />
  return <NotesList notes={data.posts} />
}
