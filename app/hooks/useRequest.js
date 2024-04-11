import useSWR from 'swr'
import { request } from 'graphql-request'
import { apiUrl } from '@/app/helpers/constants'

const API_URL = `${apiUrl}/graphql`
const fetcher = (query, variables) => request(API_URL, query, variables)

export default function useRequest(query, variables) {
  const fetcherWithVariables = () => fetcher(query, variables)
  const { data, error } = useSWR(query + JSON.stringify(variables), fetcherWithVariables)
  return {
    data: data || null,
    isLoading: !error && !data,
    isError: error,
  }
}
