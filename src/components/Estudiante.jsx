import Resumen from "./Resumen";

const Estudiante = ({ alumnos }) => {
    alumnos.map(alumno => alumno.nota > 59 ? alumno.aprobado = true : alumno.aprobado = false)

    return (
        <>
            <Resumen
                alumnos={alumnos}
            />
        </>
    );
}

export default Estudiante;