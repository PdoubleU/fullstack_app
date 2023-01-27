import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { useAppSelector } from "../data/hooks";

type Props = {};

function Header({}: Props) {
  const { isAdmin } = useAppSelector((s) => s.authorizationReducer);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>User: {isAdmin ? "ADMIN" : "STANDARD"}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} style={{ marginRight: "20px" }} to="about">
              About
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
