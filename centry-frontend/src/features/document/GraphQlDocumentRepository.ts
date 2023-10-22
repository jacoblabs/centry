import { gql } from '@apollo/client'
import { Document } from '../../../types/document'

interface DocumentData {
  findAll: Document[]
}

const GET_DOCUMENT = gql`
  query {
    findAll {
      id
      title
      content
      origin
      topic
      createdAt
    }
  }
`
export type { DocumentData }
export { GET_DOCUMENT }
