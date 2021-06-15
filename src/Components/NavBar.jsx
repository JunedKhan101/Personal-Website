import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function NavBar() {
  var navstyle = {
    // 'border': '1px solid red',
    'width': '100%',
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'space-around'
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
	  <Navbar.Brand href="#home">Juned Khan</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav style={navstyle} className="mx-auto my-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#">Resume</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}