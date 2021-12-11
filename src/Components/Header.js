import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Navbar } from 'react-bootstrap';


function Header(){
    return(
<Navbar bg="light" expand="lg">
  <ReactBootStrap.Navbar.Brand href="#home">MEGANEWS <i className="fas fa-globe-americas" />
</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
   
    <ReactBootStrap.Nav className="m-auto">
      <ReactBootStrap.Nav.Link className="ml-5" href="#home">Home</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link className="ml-5" href="#link">LifeStyle</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link className="ml-5" href="#link">Nouveautés</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link className="ml-5" href="#link">Offres</ReactBootStrap.Nav.Link>
      </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</Navbar>
    );
};

export default Header