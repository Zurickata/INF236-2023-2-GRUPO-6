import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const API = "http://localhost:5000/be/hora/"

const Navbar = () => {
  const token = localStorage.getItem('token');
  const sesion = token ? true : false; // Verificar si existe el token

  return (
    <nav className="navbar">
    <ul>
      {sesion ? (
      <li>
          <Link to="/logout">
          <button type="button">Cerrar Sesión</button>
          </Link>
          <Link to="/horasx">
          <button type="button">Horas por dia</button>
          </Link>
          <Link to="/">
          <button type="button">Inicio</button>
          </Link>
      </li>
      ) : (
      <li>
          <Link to="/login">
          <button type="button">Iniciar Sesión</button>
          </Link>
          <Link to="/">
          <button type="button">Inicio</button>
          </Link>
      </li>
      )}
      {/* Agrega más elementos de la barra de navegación con botones y enlaces según sea necesario */}
    </ul>
    </nav>
  );
};

const Horas = () => {
    const [rut, setrut] = useState('');
    const [datos, setDatos] = useState('');
    const [mostrarHoras, setMostrarHoras] = useState(false);

  
    const handleSubmit = async (event) => {
      event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada
      try {
        // Realizar la solicitud al backend usando Axios (o Fetch API)
        const aux = API + rut
        console.log(aux)
        const responses = await axios.get(`${aux}`)
        .then(response => {
          // Manejar la respuesta exitosa del backend        
          const lista = response.data
          console.log('Respuesta exitosa:', lista);
          setDatos(lista)
          setMostrarHoras(true);
        })
        .catch(error => {
          // Manejar errores de la solicitud
          if (error.response) {
            // El servidor respondió con un código de estado fuera del rango 2xx
            console.error('Error de respuesta:', error.response.status);
            console.error('Horas de error:', error.response.data);
          } else if (error.request) {
            // No se recibió una respuesta del servidor
            console.error('No se recibió respuesta del servidor:', error.request);
          } else {
            // Ocurrió un error al configurar la solicitud
            console.error('Error al configurar la solicitud:', error.message);
          }
        });
      } catch (error) {
        // Manejar errores de la solicitud al backend
        console.error('Error al enviar los datos:', error);
      }
    };

    return (
    <body>
      <div>
      <Navbar />
      <div class="container">
        <form onSubmit={handleSubmit}>
          <label>
            RUT:
            <input
              type="String"
              value={rut}
              onChange={(e) => setrut(e.target.value)}
            />
          </label>
          <br />
          <br />
          <button type="submit">Enviar</button>
        </form>
        </div>
      {mostrarHoras && 
      <div>
      <div class="container">
      <h2>Lista de Datos:</h2>
      <ul>
        {datos.map((dato, index) => (
          <li key={index}>
            <p>RUT: {dato.rut}</p>
            <p>Teléfono: {dato.telefono}</p>
            <p>Fecha: {dato.fecha.split('T')[0]}</p>
            <p>Hora: {dato.hora}</p>
            <p>Correo: {dato.correo}</p>
            <hr />
          </li>
        ))}
      </ul>
      </div>
      </div>}
      </div>
    </body>
      
    );
  };

  export default Horas;