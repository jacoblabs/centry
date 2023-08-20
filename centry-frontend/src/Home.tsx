import { Document } from '../types/document';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { Component } from 'react';


interface Props {
    documents?: Document[]
}

export default function(props: Props) {
    return (
        <Container>
        <Row>
            <Col sm={2}>
                <Image src="holder.js/171x180" rounded />
            </Col>
            <Col sm={6}>
                <input type="text" placeholder="Search here"/>
            </Col>
            <Col sm={2}>
                <Button>검색</Button>
            </Col>
            <Col sm={2}>blank</Col>
        </Row>
        {props.documents?.map(document => (
            <Row>
                <Col>{document.id}</Col>
                <Col>{document.title}</Col>
            </Row>
        ))}
        </Container>
    )
}
