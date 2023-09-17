import { Document } from '../types/document'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { Component, useCallback } from 'react'
import Nav from 'react-bootstrap/Nav'
import { ListGroup } from 'react-bootstrap'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'

interface Props {
  documents?: Document[]
}

export default function (props: Props) {
  const navigate = useNavigate()

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
        {props.documents?.map((document) => (
          <ListGroup.Item
            action
            as="li"
            className="d-flex justify-content-between align-items-start"
            style={{cursor: 'pointer'}}
            onClick={() => handleDocumentClick(document)}
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
