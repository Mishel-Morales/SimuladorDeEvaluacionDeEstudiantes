## 📚 Simulador de Evaluación de Estudiantes

Este proyecto es una aplicación desarrollada con React que simula el proceso de evaluación de estudiantes. Permite ingresar la cantidad de estudiantes, registrar sus datos (como nombre y calificaciones), mostrar una lista de estudiantes y finalmente presentar un resumen con estadísticas como promedio general, estudiante con mejor y peor desempeño, etc.

## 🚀 Tecnologías Utilizadas

- React

- JavaScript (ES6+)

- HTML / CSS (puede ser personalizado con Tailwind, Bootstrap, etc.)

## 🧩 Estructura de Componentes

El proyecto está organizado en los siguientes componentes principales:

- Estudiantes.jsx

Este componente representa el contenedor general de la aplicación. Aquí se integran y coordinan todos los demás componentes.

Responsabilidades:

Manejar el estado global de la aplicación (lista de estudiantes, cantidad, calificaciones, etc.)

Pasar props a los subcomponentes

Controlar la lógica principal del simulador

- FormularioCantidad.jsx

Formulario para definir cuántos estudiantes serán evaluados.

Responsabilidades:

Solicitar al usuario la cantidad de estudiantes

Validar que el número ingresado sea válido

Comunicar la cantidad al componente principal (Estudiantes.jsx)

- ListaEstudiantes.jsx

Formulario dinámico que se genera con base en la cantidad de estudiantes definida.

Responsabilidades:

Permitir ingresar datos individuales por estudiante (nombre, nota, etc.)

Validar los campos de entrada

Comunicar los datos ingresados al componente principal

- Resumen.jsx

Muestra un resumen de los resultados obtenidos en la evaluación.

## Responsabilidades:

Calcular el promedio general

Identificar al estudiante con la mejor y peor nota

Mostrar un resumen claro y visual de la evaluación

## 🧪 Funcionalidades Principales

✔️ Definir número de estudiantes
✔️ Ingresar datos individuales de cada estudiante
✔️ Calcular promedio general
✔️ Mostrar estudiante con mejor y peor calificación
✔️ Interfaz interactiva y responsiva

## 📸 Visualización del proyecto
<img width="1422" height="755" alt="Captura desde 2025-09-19 16-22-01" src="https://github.com/user-attachments/assets/809734c0-60f0-4f07-80d9-b620a72ea5ba" />
