import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Form, FloatingLabel, Container, Button } from "react-bootstrap";

const URL = "http://localhost:3000/api/clientes/";

const CompClienteAgregar = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [documento, setDocumento] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const navigate = useNavigate();

  const guardarCliente = async (e) => {
    e.preventDefault();
    await axios.post(URL, {
      nombres: nombre,
      apellidos: apellido,
      documento: documento,
      correo: correo,
      telefono: telefono,
      direccion: direccion,
    });
    navigate(-1);
  };

  return (
    <Container>
      <h3 className="mb-3">Formulario Agregar Cliente</h3>
      <Form onSubmit={guardarCliente}>
        <FloatingLabel controlId="nombre" label="Nombre" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Nombre"
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </FloatingLabel>

        <FloatingLabel controlId="apellido" label="Apellido" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Apellido"
            onChange={(e) => setApellido(e.target.value)}
            required
          />
        </FloatingLabel>

        <FloatingLabel controlId="documento" label="Documento" className="mb-3">
          <Form.Control
            type="number"
            placeholder="Documento"
            onChange={(e) => setDocumento(e.target.value)}
            required
          />
        </FloatingLabel>

        <FloatingLabel controlId="correo" label="Correo" className="mb-3">
          <Form.Control
            type="email"
            placeholder="Correo"
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </FloatingLabel>

        <FloatingLabel controlId="telefono" label="Telefono" className="mb-3">
          <Form.Control
            type="number"
            placeholder="Telefono"
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
        </FloatingLabel>

        <FloatingLabel controlId="direccion" label="Direccion" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Direccion"
            onChange={(e) => setDireccion(e.target.value)}
            required
          />
        </FloatingLabel>

        <br />

        <Button variant="primary" type="submit">
          Agregar Cliente
        </Button>
      </Form>
    </Container>
  );
};

export default CompClienteAgregar;
