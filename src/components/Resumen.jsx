import { Alert } from "react-bootstrap";

const Resumen = ({ alumnos }) => {
    let aprobado = 0;
    let reprobado = 0;

    alumnos.map(alumno => {
        if (alumno.aprobado == true) {
            aprobado++;
        } else {
            reprobado++;
        };
    })

    return (
        <>
            {
                reprobado > aprobado && (
                    <Alert variant="danger">
                        Hay varios Estudiantes Reprobados!!
                    </Alert>
                )
            }

        </>
    );
}

export default Resumen;