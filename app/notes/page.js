'use client'
import useRequest from '@/app/hooks/useRequest'
import query from '@/app/queries/fetchNotes'
import NotesList from '@/app/components/NotesList'
import LoadingList from '@/app/components/LoadingList'
import LoadMoreButton from '@/app/components/LoadMoreButton'

export default function Notes() {
  const { data, isLoading, loadMore, hasNextPage, firstLoad } = useRequest(query)
  const handleLoadMore = async () => {
    await loadMore()
  }

  if (isLoading && firstLoad) return <LoadingList />
  return (
    <>
      <NotesList notes={data} />
      <LoadMoreButton
        isLoading={isLoading}
        hasNextPage={hasNextPage}
        handleLoadMore={handleLoadMore}
      />
    </>
  )
}
