import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-primary">
      <Container>
        <Link to="/">
          <Navbar.Brand className="text-light" as="span">
            LOGO
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/">
              <Nav.Link className="text-light" as="span">
                Home
              </Nav.Link>
            </Link>
            <Link to="/products">
              <Nav.Link className="text-light" as="span">
                Products
              </Nav.Link>
            </Link>
            <Link to="/about">
              <Nav.Link className="text-light" as="span">
                About
              </Nav.Link>
            </Link>
            <Link to="/contact">
              <Nav.Link className="text-light" as="span">
                Entertainment
              </Nav.Link>
            </Link>
            <Link to="/contact">
              <Nav.Link className="text-light" as="span">
                Business
              </Nav.Link>
            </Link>
            <Link to="/contact">
              <Nav.Link className="text-light" as="span">
                General
              </Nav.Link>
            </Link>
            <Link to="/contact">
              <Nav.Link className="text-light" as="span">
                Health
              </Nav.Link>
            </Link>
            <Link to="/contact">
              <Nav.Link className="text-light" as="span">
                Science
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
