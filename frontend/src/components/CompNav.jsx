import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const CompNav = () => (
  <Navbar className="pb-5">
    <Container>
      <Navbar.Brand>Proyecto Final</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link as={Link} to="/">
            Inicio
          </Nav.Link>
          <Nav.Link as={Link} to="clientes">
            Clientes
          </Nav.Link>
          <Nav.Link as={Link} to="empleados">
            Empleados
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default CompNav;
