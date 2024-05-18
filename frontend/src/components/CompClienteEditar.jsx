import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Form, FloatingLabel, Container, Button } from "react-bootstrap";

const CompClienteEditar = () => {
  const { id } = useParams();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [documento, setDocumento] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const navigate = useNavigate();

  const getClienteById = async () => {
    const datos = await axios.get(import.meta.env.URL + id);
    setNombre(datos.data.nombres);
    setApellido(datos.data.apellidos);
    setDocumento(datos.data.documento);
    setCorreo(datos.data.correo);
    setTelefono(datos.data.telefono);
    setDireccion(datos.data.direccion);
  };

  const modificarCliente = async (e) => {
    e.preventDefault();
    await axios.put(import.meta.env.URL + id, {
      nombres: nombre,
      apellidos: apellido,
      documento: documento,
      correo: correo,
      telefono: telefono,
      direccion: direccion,
    });
    navigate(-1);
  };

  useEffect(() => {
    getClienteById();
  }, []); // eslint-disable-line

  return (
    <Container>
      <h3 className="mb-3">Formulario Editar Cliente</h3>
      <Form onSubmit={modificarCliente}>
        <FloatingLabel controlId="nombre" label="Nombre" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Nombre"
            onChange={(e) => setNombre(e.target.value)}
            defaultValue={nombre}
            required
          />
        </FloatingLabel>

        <FloatingLabel controlId="apellido" label="Apellido" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Apellido"
            onChange={(e) => setApellido(e.target.value)}
            defaultValue={apellido}
            required
          />
        </FloatingLabel>

        <FloatingLabel controlId="documento" label="Documento" className="mb-3">
          <Form.Control
            type="number"
            placeholder="Documento"
            onChange={(e) => setDocumento(e.target.value)}
            defaultValue={documento}
            required
          />
        </FloatingLabel>

        <FloatingLabel controlId="correo" label="Correo" className="mb-3">
          <Form.Control
            type="email"
            placeholder="Correo"
            onChange={(e) => setCorreo(e.target.value)}
            defaultValue={correo}
            required
          />
        </FloatingLabel>

        <FloatingLabel controlId="telefono" label="Telefono" className="mb-3">
          <Form.Control
            type="number"
            placeholder="Telefono"
            onChange={(e) => setTelefono(e.target.value)}
            defaultValue={telefono}
            required
          />
        </FloatingLabel>

        <FloatingLabel controlId="direccion" label="Direccion" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Direccion"
            onChange={(e) => setDireccion(e.target.value)}
            defaultValue={direccion}
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

export default CompClienteEditar;
