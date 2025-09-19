import { useState } from "react";
import { Button } from "react-bootstrap";

const FormularioCantidad = ({ setAlumnos }) => {
    const [cantidad, setCantidad] = useState();
    const nombres = ['Luis', 'Jose', 'María', 'Karen', 'Antonio', 'Esteban', 'Estela', 'Wendy', 'Gael', 'Yhadira'];
    const apellidos = ['Marquez', 'Hernandez', 'Rodriguez', 'Calel', 'Ordoñez', 'Tzaj', 'Salazar', 'Reyes', 'Ventura'];
    let alumnosCreados = [];

    const generarAlumnos = () => {
        for (let i = 0; i < parseInt(cantidad); i++) {
            const nota = Math.floor(Math.random() * 101)
            alumnosCreados.push(
                {
                    name: `${nombres[Math.floor(Math.random() * nombres.length)]} ${apellidos[Math.floor(Math.random() * apellidos.length)]}`,
                    nota: nota,
                    aprobado: false
                }
            )
        };
        setAlumnos(alumnosCreados);
    };

    return (
        <>
            <h2 className="m-3 text-center">Ingrese la Cantidad de Alumnos a Evaluar</h2>
            <div className="d-flex justify-content-center mb-3">
                <input onChange={(e) => setCantidad(e.target.value)} className="me-3 p-1" type="number"></input>
                <Button onClick={generarAlumnos} variant="info">Enviar</Button>
            </div>
        </>
    )
};
export default FormularioCantidad;