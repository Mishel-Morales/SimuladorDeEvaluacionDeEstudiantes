import { Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';


const ListaEstudiantes = ({ filtroSeleccionado, alumnos }) => {
    const [alumnosMostrar, setAlumnosMostrar] = useState([]);
    const copia = [...alumnos];
    let alumnosFiltrados = [];
    
    const filtrar = () => {

        if (filtroSeleccionado == 'Todos') {
            setAlumnosMostrar(alumnos);

        } else if (filtroSeleccionado == 'Aprobados') {
            alumnosFiltrados = copia.filter(alumno => alumno.aprobado == true)
            setAlumnosMostrar(alumnosFiltrados);

        } else if (filtroSeleccionado == 'Reprobados') {
            alumnosFiltrados = copia.filter(alumno => alumno.aprobado == false)
            setAlumnosMostrar(alumnosFiltrados);

        } else{
            alumnosFiltrados = copia.sort((a, b) => b.nota - a.nota);
            setAlumnosMostrar(alumnosFiltrados);
        };
    };

    useEffect(() => {
        filtrar();
    }, [alumnos, filtroSeleccionado]);

    return (
        <>
            {
                alumnosMostrar.map((alumno, index) =>
                    <Card key={index} className={`${alumno.aprobado ? 'bg-success' : 'bg-danger'}`} style={{ width: '19rem' }}>
                        <Card.Body>
                            <Card.Title><strong>Nombre del Estudiante: </strong> {alumno.name}</Card.Title>
                            <Card.Text>
                                <strong>Nota: </strong> {alumno.nota}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            }
        </>
    )
};
export default ListaEstudiantes;