import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Form, FloatingLabel, Container, Button } from "react-bootstrap";

const URL = "http://localhost:3000/api/empleados/";

const CompEmpleadoEditar = () => {
  const { id } = useParams();
  const [nombre, setNombre] = useState("");
  const [color, setColor] = useState("");
  const [especie, setEspecie] = useState("");
  const navigate = useNavigate();

  const getEmpleadoById = async () => {
    const datos = await axios.get(URL + id);
    setNombre(datos.data.nombre);
    setColor(datos.data.color);
    setEspecie(datos.data.especie);
  };

  const modificarEmpleado = async (e) => {
    e.preventDefault();
    await axios.put(URL + id, {
      nombres: nombre,
      colors: color,
      especie: especie,
    });
    navigate(-1);
  };

  useEffect(() => {
    getEmpleadoById();
  }, []); // eslint-disable-line

  return (
    <Container>
      <h3 className="mb-3">Formulario Editar Empleado</h3>
      <Form onSubmit={modificarEmpleado}>
        <FloatingLabel controlId="nombre" label="Nombre" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Nombre"
            onChange={(e) => setNombre(e.target.value)}
            defaultValue={nombre}
            required
          />
        </FloatingLabel>

        <FloatingLabel controlId="color" label="Color" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Color"
            onChange={(e) => setColor(e.target.value)}
            defaultValue={color}
            required
          />
        </FloatingLabel>

        <FloatingLabel controlId="especie" label="Especie" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Especie"
            onChange={(e) => setEspecie(e.target.value)}
            defaultValue={especie}
            required
          />
        </FloatingLabel>

        <br />

        <Button variant="primary" type="submit">
          Editar Cliente
        </Button>
      </Form>
    </Container>
  );
};

export default CompEmpleadoEditar;
