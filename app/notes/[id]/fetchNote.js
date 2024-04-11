import { gql } from 'graphql-request'

export default gql`
  query fetchNote($id: ID!, $idType: PostIdType! = DATABASE_ID) {
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
  }
`
