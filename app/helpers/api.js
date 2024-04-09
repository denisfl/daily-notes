import { apiUrl } from '@/app/helpers/constants'

const API_URL = `${apiUrl}/graphql`
async function fetchAPI(query = '', { variables } = {}) {
  const headers = { 'Content-Type': 'application/json' }

  const res = await fetch(API_URL, {
    headers,
    method: 'POST',
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function fetchNotes() {
  const data = await fetchAPI(`
  query FetchNotes {
    posts(where: {status: PUBLISH}) {
      nodes {
        id
        title
        content
        databaseId
        date
        tags {
          nodes {
            id
            name
            count
            databaseId
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
  `)
  return data?.posts
}

export async function fetchNote(id, idType = 'DATABASE_ID') {
  const data = await fetchAPI(
    `
    query FetchNote($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        id
        title
        content
        databaseId
        date
        tags {
          nodes {
            id
            name
            count
            databaseId
          }
        }
      }
    }`,
    {
      variables: { id, idType },
    }
  )
  return data.post
}
