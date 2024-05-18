import CompClienteAgregar from "./components/CompClienteAgregar.jsx";
import CompClienteEditar from "./components/CompClienteEditar.jsx";
import CompClienteMostrar from "./components/CompClienteMostrar.jsx";
import CompEmpleadoAgregar from "./components/CompEmpleadoAgregar.jsx";
import CompEmpleadoEditar from "./components/CompEmpleadoEditar.jsx";
import CompEmpleadoMostrar from "./components/CompEmpleadoMostrar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./tables-style.css";
import CompNav from "./components/CompNav.jsx";
import Footer from "./components/CompFooter.jsx";

console.log(Object.entries(process.env));

function App() {
  return (
    <>
      <BrowserRouter>
        <CompNav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <CompClienteMostrar />
                <CompEmpleadoMostrar />
              </>
            }
          />
          <Route path="clientes" element={<CompClienteMostrar />} />
          <Route path="clientes/agregar" element={<CompClienteAgregar />} />
          <Route path="clientes/editar/:id" element={<CompClienteEditar />} />
          <Route path="empleados" element={<CompEmpleadoMostrar />} />
          <Route path="empleados/agregar" element={<CompEmpleadoAgregar />} />
          <Route path="empleados/editar/:id" element={<CompEmpleadoEditar />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
