import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";

const URL = "http://localhost:3000/api/empleados/";

const CompEmpleadoMostrar = () => {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    getEmpleados();
  }, []);

  const getEmpleados = async () => {
    const datos = await axios.get(URL);
    console.log(datos.data);
    setEmpleados(datos.data);
  };

  const eliminarEmpleado = async (id) => {
    await axios.delete(URL + id);
    getEmpleados();
  };

  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h2 className="mb-4">Empleados</h2>

          <Table hover className="my-0">
            <thead className="table-info">
              <tr>
                <th>Nombre empleado</th>
                <th>Color</th>
                <th>Especie</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {empleados.map((empleado, index) => (
                <tr key={index}>
                  <td>{empleado.nombre}</td>
                  <td>{empleado.color}</td>
                  <td>{empleado.especie}</td>
                  <td>
                    <Link
                      to={"/empleados/editar/" + empleado._id}
                      className="btn"
                    >
                      <i className="fa-solid fa-pen-to-square" />
                    </Link>
                    <Button
                      variant="danger"
                      onClick={() => eliminarEmpleado(empleado._id)}
                    >
                      <i className="fa-solid fa-trash" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Link
            to="/empleados/agregar"
            className="btn btn-primary mx-auto mt-4"
          >
            <i className="fa-solid fa-user-plus pe-2" />
            Agregar Empleado
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default CompEmpleadoMostrar;
