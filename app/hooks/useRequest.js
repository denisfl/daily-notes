import useSWRInfinite from 'swr/infinite'

import { request } from 'graphql-request'
import { apiUrl } from '@/app/helpers/constants'
import { useState } from 'react'

const API_URL = `${apiUrl}/graphql`
const fetcher = (query, variables) => request(API_URL, query, variables)

export default function useRequest(query, variables) {
  const [cursor, setCursor] = useState('')
  const [items, setItems] = useState([])
  const [firstLoad, setFirstLoad] = useState(true)
  const fetcherWithVariables = () => fetcher(query, { ...variables, endCursor: cursor })

  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData?.posts.pageInfo.hasNextPage) return null
    if (previousPageData) {
      setFirstLoad(false)
      setCursor(previousPageData?.posts.pageInfo.endCursor || '')
      setItems([...items, ...previousPageData?.posts.nodes])
    }
    return [query, JSON.stringify({ ...variables, endCursor: cursor })]
  }

  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcherWithVariables, {
    revalidateOnMount: true,
  })

  if (typeof setSize !== 'function') {
    throw new Error('setSize is not a function. Check the useSWRInfinite hook.')
  }

  return variables?.id
    ? { data: data ? data[0] : null, isLoading: !error && !data, isError: error }
    : {
        data: data ? [].concat(...items, ...data.map((page) => page.posts.nodes)) : items,
        isLoading: !error && !data,
        isError: error,
        hasNextPage: data ? data[size - 1]?.posts.pageInfo.hasNextPage : false,
        firstLoad,
        loadMore: () => setSize(size + 1),
      }
}
