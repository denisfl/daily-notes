'use client'
import { useEffect } from 'react'
import useRequest from '@/app/hooks/useRequest'
import query from '@/app/queries/fetchNotes'
import NotesList from '@/app/components/NotesList'
import LoadingList from '@/app/components/LoadingList'
import LoadMoreButton from '@/app/components/LoadMoreButton'

const metadata = {
  title: 'Денискины заметки',
  description: 'Заметки о беге, истории и впечатления из путешествий и немного о разработке',
}

export default function Notes() {
  const { data, isLoading, loadMore, hasNextPage, firstLoad } = useRequest(query)
  const handleLoadMore = async () => {
    await loadMore()
  }

  useEffect(() => {
    if (data) {
      document.title = metadata.title

      const metaTags = [
        {
          name: 'description',
          content: metadata.description,
        },
        { property: 'og:title', content: metadata.title },
        { property: 'og:description', content: metadata.description },
      ]

      metaTags.forEach(({ name, property, content }) => {
        let metaTag = name
          ? document.querySelector(`meta[name="${name}"]`)
          : document.querySelector(`meta[property="${property}"]`)
        if (!metaTag) {
          metaTag = document.createElement('meta')
          if (name) metaTag.setAttribute('name', name)
          if (property) metaTag.setAttribute('property', property)
          document.head.appendChild(metaTag)
        }
        metaTag.setAttribute('content', content || '')
      })
    }
  }, [data])

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
