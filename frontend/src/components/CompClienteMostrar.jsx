import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";

const CompClienteMostrar = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    getClientes();
  }, []);

  const getClientes = async () => {
    const datos = await axios.get(import.meta.env.URL);
    setClientes(datos.data);
  };

  const eliminarCliente = async (id) => {
    await axios.delete(import.meta.env.URL + id);
    getClientes();
  };

  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h2 className="mb-4">Clientes</h2>

          <Table hover className="my-0">
            <thead className="table-info">
              <tr>
                <th>Nombres cliente</th>
                <th>Apellidos cliente</th>
                <th>Documento</th>
                <th>Correo</th>
                <th>Telefono</th>
                <th>Direccion</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente, index) => (
                <tr key={index}>
                  <td>{cliente.nombres}</td>
                  <td>{cliente.apellidos}</td>
                  <td>{cliente.documento}</td>
                  <td>{cliente.correo}</td>
                  <td>{cliente.telefono}</td>
                  <td>{cliente.direccion}</td>
                  <td>
                    <Link
                      to={"/clientes/editar/" + cliente._id}
                      className="btn"
                    >
                      <i className="fa-solid fa-pen-to-square" />
                    </Link>
                    <Button
                      variant="danger"
                      onClick={() => eliminarCliente(cliente._id)}
                    >
                      <i className="fa-solid fa-trash" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Link to="/clientes/agregar" className="btn btn-primary mx-auto mt-4">
            <i className="fa-solid fa-user-plus pe-2" />
            Agregar nuevo usuario
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default CompClienteMostrar;
