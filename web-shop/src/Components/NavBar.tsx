import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

export function NavBar() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        {/* <Container> */}
        {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
        <Navbar.Brand as={Link} to="/" style={{ marginLeft: "20px" }}>
          Web-Shop.app
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/categories">
            Categories
          </Nav.Link>
        </Nav>
        {/* </Container> */}
      </Navbar>
    </>
  );
}
