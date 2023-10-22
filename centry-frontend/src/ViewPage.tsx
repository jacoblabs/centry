import { useParams } from 'react-router-dom'
import { Card, Container } from 'react-bootstrap'
import { useMemo, useState } from 'react'
import dayjs from 'dayjs'
import { DocumentData, DocumentVars, GET_DOCUMENT } from './features/document/GraphQlDocumentRepository'
import { useQuery } from '@apollo/client'

const ViewPage = () => {
  const { id } = useParams()
  const [aborterRef] = useState(new AbortController())
  const { data } = useQuery<DocumentData, DocumentVars>(GET_DOCUMENT, {
    variables: {
      id: parseInt(id as string)
    },
    fetchPolicy: 'network-only',
    context: {
      fetchOptions: {
        signal: aborterRef.signal,
      },
    },
    notifyOnNetworkStatusChange: true,
  })
  const doc = useMemo(() => data?.findById || {}, [data])
  const date = dayjs(doc?.createdAt ?? 0).format('YYYY/MM/DD h:mm:ss')

  return (
    <Container style={{ marginTop: '72px' }}>
      <Card>
        <Card.Header className="text-center d-flex justify-content-between">
          <strong>{doc?.topic}</strong>
          <div>{date}</div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{doc?.title}</Card.Title>
          <Card.Text as="pre" style={{ whiteSpace: 'pre-wrap'}}>{doc?.content}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">출처: {doc?.origin}</Card.Footer>
      </Card>
    </Container>
  )
}

export default ViewPage
