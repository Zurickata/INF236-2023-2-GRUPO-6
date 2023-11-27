import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Navbar.css'; // Importamos el archivo de estilos CSS

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
              <button type="button">Horas Agendadas</button>
            </Link>
          </li>
        ) : (
          <li>
            <Link to="/login">
              <button type="button">Iniciar Sesión</button>
            </Link>
            <Link to="/ReservaHoras">
              <button type="button">Horas Agendadas</button>
            </Link>
          </li>
          
          
        )}
        {/* Agrega más elementos de la barra de navegación con botones y enlaces según sea necesario */}
      </ul>
    </nav>
  );
};

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <h2>Bienvenido a la página de inicio</h2>
      <p>¡Has iniciado sesión correctamente!</p>
      <p>Por favor, inicia sesión para acceder a esta página.</p>
    </div>
  );
};

export default HomePage;
