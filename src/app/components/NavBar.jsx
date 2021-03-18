import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

const NavBar = () => (
  <div>
    {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"> */}

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
        <LinkContainer to="/atoms">
          <Nav.Link>Atoms</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/selectors">
          <Nav.Link>Selectors</Nav.Link>
        </LinkContainer>
      </Nav>

    </Navbar>
    {/* <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav> */}
    {/* </Navbar.Collapse> */}

  </div>
);

export default NavBar;
