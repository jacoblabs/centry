import { Document } from '../types/document'
import Container from 'react-bootstrap/Container'
import { useMemo, useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import {
  DocumentListData,
  GET_DOCUMENT_LIST,
} from './features/document/GraphQlDocumentRepository'

const HomePage = () => {
  const navigate = useNavigate()
  const [aborterRef] = useState(new AbortController())
  const { data } = useQuery<DocumentListData>(GET_DOCUMENT_LIST, {
    fetchPolicy: 'network-only',
    context: {
      fetchOptions: {
        signal: aborterRef.signal,
      },
    },
    notifyOnNetworkStatusChange: true,
  })
  const documents = useMemo(() => data?.findAll || [], [data])

  const formatDate = (timestamp: number) => {
    const dayDiff = dayjs().diff(timestamp, 'day')
    if (dayDiff > 0) {
      return `${dayDiff}일 전`
    }

    const hourDiff = dayjs().diff(timestamp, 'hour')
    if (hourDiff > 0) {
      return `${hourDiff}시간 전`
    }
    return '조금전'
  }

  const handleDocumentClick = (doc: Document) => {
    navigate(`/${doc.id}`)
  }

  return (
    <Container style={{ marginTop: '72px' }}>
      <ListGroup as="ol" className="mt-3 mb-5">
        {documents?.map((document) => (
          <ListGroup.Item
            action
            as="li"
            className="d-flex justify-content-between align-items-start"
            style={{ cursor: 'pointer' }}
            onClick={() => handleDocumentClick(document)}
            key={document.id}
          >
            <div className="ms-2 me-auto d-flex flex-column">
              <div className="d-flex">
                <div className="fw-bold flex-grow-1">{document.title}</div>
                <div>{formatDate(document.createdAt ?? 0)}</div>
              </div>
              <div
                style={{
                  height: '24px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {document.content}
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  )
}

export default HomePage
