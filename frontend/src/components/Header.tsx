import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Spinner } from "react-bootstrap";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../data/hooks";
import { authenticateStdUser } from "../data/stduser/service";

type Props = {};

function Header({}: Props) {
  const stduserstatus = useAppSelector((s) => s.stduserReducer);
  const adminStatus = useAppSelector((s) => s.authorizationReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (stduserstatus.status === "idle" && !stduserstatus.logged)
      dispatch(authenticateStdUser());
  }, [stduserstatus, dispatch]);

  if (stduserstatus.status === "idle" || stduserstatus.status === "loading")
    return (
      <>
        <Spinner animation="border" role="status" />
        <h2>I'm trying to log you in, dude!</h2>
      </>
    );
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            User: {adminStatus.isAdmin ? "ADMIN" : "STANDARD"}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} style={{ marginRight: "20px" }} to="home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} style={{ marginRight: "20px" }} to="admin">
              Admin
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
