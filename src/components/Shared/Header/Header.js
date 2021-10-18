import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="home#home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="doctors">
              Our Doctors
            </Nav.Link>
            <Nav.Link as={HashLink} to="#department">
              Our Department
            </Nav.Link>
            <Nav.Link as={HashLink} to="home#services">
              Services
            </Nav.Link>
            <Nav.Link as={HashLink} to="#about">
              About US
            </Nav.Link>
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
