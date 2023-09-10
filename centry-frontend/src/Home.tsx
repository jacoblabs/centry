import { Document } from '../types/document'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import { ListGroup } from 'react-bootstrap'

interface Props {
  documents?: Document[]
}

export default function (props: Props) {
  return (
    <Container>
      <ListGroup as="ol" className="mt-3 mb-5">
        {props.documents?.map((document) => (
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto d-flex flex-column">
              <div className="d-flex">
                <div className="fw-bold flex-grow-1">{document.title}</div>
                <div>{new Date(document.createdAt ?? 0).toString()}</div>
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
