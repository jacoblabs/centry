import { gql } from '@apollo/client'
import { Document } from '../../../types/document'

interface DocumentListData {
  findAll: Document[]
}

interface DocumentData {
  findById: Document
}

interface DocumentVars {
  id: number;
}

const GET_DOCUMENT_LIST = gql`
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

const GET_DOCUMENT = gql`
  query($id:Int!) {
    findById(id:$id) {
      id
      title
      content
      origin
      topic
      createdAt
    }
  }
`

export type { DocumentListData, DocumentData, DocumentVars }
export { GET_DOCUMENT_LIST, GET_DOCUMENT }
