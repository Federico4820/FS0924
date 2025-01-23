import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";

function MyNav() {
  const location = useLocation();

  return (
    <Navbar collapseOnSelect expand="md" className="bg-black" variant="dark">
      <Container>
        <Link to="/" className="navbar-brand text-info">
          Spaceflight
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/"
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </Link>
          </Nav>
          <Nav>
            <Nav.Link href="#">Account</Nav.Link>
            <Nav.Link href="#">Options</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
