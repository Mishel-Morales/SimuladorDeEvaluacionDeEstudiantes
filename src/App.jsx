import ListaEstudiantes from "./components/ListaEstudiantes";
import { Container, Button, Row } from "react-bootstrap";
import { useState } from "react";
import FormularioCantidad from "./components/FormularioCantidad";
import Estudiante from "./components/Estudiante";

function App() {
  const [filtroSeleccionado, setFiltroSeleccionado] = useState('Todos');
  const btns = ['Todos', 'Aprobados', 'Reprobados', 'Ranking'];
  const [alumnos, setAlumnos] = useState([]);

  return (
    <>
      <Container className="mt-5">

        <h1 className="text-center">Evaluación de Estudiantes</h1>
        <FormularioCantidad
          setAlumnos={setAlumnos}
        />

        <div className="d-flex justify-content-center mb-3">
          {
            btns.map(btn => <Button key={btn} variant="outline-warning me-3" onClick={(e) => setFiltroSeleccionado(e.target.innerText)}>{btn}</Button>)
          }
        </div>

        <Estudiante
          alumnos={alumnos}
        />

        <Row className="ms-3 gap-3">
          <ListaEstudiantes
            filtroSeleccionado={filtroSeleccionado}
            alumnos={alumnos}
          />
        </Row>
        
      </Container>
    </>
  )
};

export default App
