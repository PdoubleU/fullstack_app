import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Spinner } from "react-bootstrap";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../data/hooks";

type Props = {};

function Header({}: Props) {
  const { isAdmin } = useAppSelector((s) => s.authorizationReducer);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>User: {isAdmin ? "ADMIN" : "STANDARD"}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} style={{ marginRight: "20px" }} to="home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="data">
              Data
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Header;
