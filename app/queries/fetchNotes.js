import { gql } from 'graphql-request'

export default gql`
  query fetchNotes($tag: String = "", $endCursor: String = "", $first: Int = 25) {
    posts(where: { status: PUBLISH, tag: $tag }, first: $first, after: $endCursor) {
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
`
