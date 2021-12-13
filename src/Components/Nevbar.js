import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'


function relate() {
  return (
    <Navbar >
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Route path='/Home' element={<Home />} />
          <Route path='/LifeStyle' element={<LifeStyle />} />
          <Route path='/News/:id' element={<News />} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default relate