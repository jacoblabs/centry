import { useNavigation, useParams, useRoutes } from 'react-router-dom'
import { IDocumentService } from './features/document/types'
import { Document } from '../types/document'
import { Button, Card, Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

interface Props {
  documentService: IDocumentService
}

const ViewPage = ({ documentService }: Props) => {
  const { id } = useParams()
  console.log(id)
  const idNum = parseInt(id ?? '0')
  const [doc, setDoc] = useState<Document | null>(null)

  // const doc = documentService.getDocument({ id: idNum })
  const pageNotFoundMessage = '문서를 찾을 수 없습니다.'
  const failedToLoadDocument = '문서를 불러오는 도중 오류가 발생하였습니다.'
  const date = dayjs(doc?.createdAt ?? 0).format('YYYY/MM/DD h:mm:ss')

  useEffect(() => {
    const func = async () => {
      try {
        const doc = await documentService.getDocument({ id: idNum })
        setDoc(doc)
      } catch (e) {
        alert(failedToLoadDocument)
      }
    }
    func()
  }, [])

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
