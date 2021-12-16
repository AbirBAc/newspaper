import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to='/Home'>Home</Link>
            <Link className="nav-link" to='/LifeStyle'>LifeStyle</Link>
            <Link className="nav-link" to='/News'>News</Link>
            <Link className="nav-link" to='/Contact'>Contact</Link>
            <Link className="nav-link" to='/Cookies'>Cookies</Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbar