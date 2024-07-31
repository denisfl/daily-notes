'use client'
import { useEffect } from 'react'
import useRequest from '@/app/hooks/useRequest'
import query from './fetchNote'
import Loading from './loading'
import NoteTitle from '@/app/components/NoteTitle'
import NoteContent from '@/app/components/NoteContent'
import NoteFooter from '@/app/components/NoteFooter'

import { NextSeo } from 'next-seo'

export default function Note({ params }) {
  const { data, isLoading, isError } = useRequest(query, { id: params.id })

  useEffect(() => {
    if (data) {
      document.title = data.post.seoData.opengraphTitle || data.post.title

      const metaTags = [
        {
          name: 'description',
          content: data.post.seoData.metaDesc || data.post.seoData.opengraphdescription,
        },
        { property: 'og:title', content: data.post.seoData.opengraphTitle || data.post.title },
        { property: 'og:description', content: data.post.seoData.opengraphdescription },
        { property: 'og:image', content: data.post.seoData.opengraphimage?.node.sourceUrl || '' },
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

  if (isLoading) return <Loading />
  if (isError) return 'An error has occurred.'

  return (
    <>
      <NextSeo
        title={data.post.seoData.opengraphTitle || data.post.title}
        description={data.post.seoData.metaDesc || data.post.seoData.opengraphDescription}
        openGraph={{
          title: data.post.seoData.opengraphTitle || data.post.title,
          description: data.post.seoData.opengraphDescription,
          images: [
            {
              url: data.post.seoData.opengraphimage?.sourceUrl || '',
            },
          ],
        }}
      />
      <section>
        <article className="note" key={data.post.id}>
          <NoteTitle title={data.post.title} />
          <NoteContent content={data.post.content} />
          <NoteFooter date={data.post.date} tags={data.post.tags.nodes} />
        </article>
      </section>
    </>
  )
}
