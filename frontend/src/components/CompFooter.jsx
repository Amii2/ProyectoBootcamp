import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Proyecto Final</h5>
            <p>Proyecto front + backend Bootcamp TalentoTech</p>
          </Col>
          <Col md={3}>
            <h5>Acceso Rapido</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="clientes">Clientes</Link>
              </li>
              <li>
                <Link to="empleados">Empleados</Link>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Desarrollado por</h5>
            <address>
              Sara Amy Diaz Sanabria
              <br />
              CC 1007727294
              <br />
              Bootcamp: Desarrollo Web
            </address>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center mt-3">
              Realizado en 2024, Bootcamp TalentoTech.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
