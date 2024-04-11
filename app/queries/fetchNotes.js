import { gql } from 'graphql-request'

export default gql`
  query fetchNotes($tag: String = "") {
    posts(where: { status: PUBLISH, tag: $tag }) {
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
