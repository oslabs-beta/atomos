import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = () => (
  <div>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          src="../assets/LogoWhiteTrans.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Atomos"
        />
      </Navbar.Brand>
      <Navbar.Brand href="#home">Atomos</Navbar.Brand>
      <Nav className="mr-auto">
        <LinkContainer to="">
          <Nav.Link>Component Tree</Nav.Link>
        </LinkContainer>
        {/* <LinkContainer to="/atoms">
        <Nav.Link>Atoms</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/selectors">
        <Nav.Link>Selectors</Nav.Link>
      </LinkContainer> */}
      </Nav>
    </Navbar>
  </div>
);

export default NavBar;
