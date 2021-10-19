import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut, isLogin } = useAuth();
  return (
    <>
      <Navbar
        className="nav-bg"
        collapseOnSelect
        expand="lg"
        variant="dark"
        sticky="top"
      >
        <Container className="m-4">
          <Navbar.Brand as={Link} to="/home">
            BD Online Doctors
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/doctors">
              Our Doctors
            </Nav.Link>
            <Nav.Link as={Link} to="/department">
              Our Department
            </Nav.Link>

            <Nav.Link as={Link} to="/about">
              About US
            </Nav.Link>
            {user.email ? (
              <Nav.Link onClick={logOut}>Logout</Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            <Navbar.Text>
              <p className="mt-3" style={{ color: "white" }}>
                {isLogin ? user.email : user.displayName}
              </p>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
