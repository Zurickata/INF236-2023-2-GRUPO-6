import React, { useState } from 'react';
import axios from 'axios';

const API = "http://localhost:5000/be"

const Formulario = () => {
  const [password, setpassword] = useState('');
  const [correo, setcorreo] = useState('');
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

    try {
      // Realizar la solicitud al backend usando Axios (o Fetch API)
       const responses = await axios.post(`${API}/login`, {
        correo: correo,
        password: password,
      })
      .then(response => {
        // Manejar la respuesta exitosa del backend        
        const token = response.data.token
        localStorage.setItem('token', token)
        console.log('Respuesta exitosa:', token);
        window.location.href = 'http://localhost:3000/';
        
      })
      .catch(error => {
        // Manejar errores de la solicitud
        if (error.response) {
          setMostrarMensaje(true);
          // El servidor respondió con un código de estado fuera del rango 2xx
          console.error('Error de respuesta:', error.response.status);
          console.error('Mensaje de error:', error.response.data);
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
    <form onSubmit={handleSubmit}>
      <label>
        password:
        <input
          type="String"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
      </label>
      <br />
      <label>
        correo:
        <input
          type="email"
          value={correo}
          onChange={(e) => setcorreo(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Enviar</button>
      {mostrarMensaje && <p>Contraseña incorrecta</p>}
    </form>
    
  );
};

export default Formulario;
