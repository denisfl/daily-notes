'use client'
import useRequest from '@/app/hooks/useRequest'
import NotesList from '@/app/components/NotesList'
import LoadingList from '@/app/components/LoadingList'

export default function Notes() {
  const { data, isLoading } = useRequest(query, { tag: params.name })
  if (isLoading) return <LoadingList />
  return <NotesList notes={data.posts} />
}
