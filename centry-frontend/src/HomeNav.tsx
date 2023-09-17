import React, { useState } from 'react'
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useSearchParams, useNavigate } from 'react-router-dom'

function HomeNav() {
  const [searchParams] = useSearchParams()
  const [keyword, setKeyword] = useState(searchParams.get('keyword') ?? '')
  const navigate = useNavigate()

  const handleKeywordChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  const handleClick = () => {
    if(keyword){
    navigate({
      pathname: "/",
      search: `?keyword=${keyword}`,
    })
    }
    else {
      navigate("/")
    }
  }

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <img
              src="/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="logo"/>
          Centry
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-between"
        >
          <Nav className="order-lg-0">
          </Nav>
          <Form className="d-flex">
            <FormControl type="text" placeholder="제목, 토픽, 검색어, ..." className="mr-sm-2" 
              value={keyword}
              onChange={handleKeywordChanged}
              />
            <Button variant="outline-success" style={{
              whiteSpace: 'nowrap'
            }}
            onClick={handleClick}
            >검색</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default HomeNav
