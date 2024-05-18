import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Form, FloatingLabel, Container, Button } from "react-bootstrap";

const CompEmpleadoAgregar = () => {
  const [nombre, setNombre] = useState("");
  const [color, setColor] = useState("");
  const [especie, setEspecie] = useState("");
  const navigate = useNavigate();

  const guardarEmpleado = async (e) => {
    e.preventDefault();
    await axios.post(process.env.URL, {
      nombre: nombre,
      color: color,
      especie: especie,
    });
    navigate(-1);
  };

  return (
    <Container>
      <h3 className="mb-3">Formulario Agregar Empleado</h3>
      <Form onSubmit={guardarEmpleado}>
        <FloatingLabel controlId="nombre" label="Nombre" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Nombre"
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </FloatingLabel>

        <FloatingLabel controlId="color" label="Color" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Color"
            onChange={(e) => setColor(e.target.value)}
            required
          />
        </FloatingLabel>

        <FloatingLabel controlId="especie" label="Especie" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Especie"
            onChange={(e) => setEspecie(e.target.value)}
            required
          />
        </FloatingLabel>

        <br />

        <Button variant="primary" type="submit">
          Agregar Empleado
        </Button>
      </Form>
    </Container>
  );
};

export default CompEmpleadoAgregar;
