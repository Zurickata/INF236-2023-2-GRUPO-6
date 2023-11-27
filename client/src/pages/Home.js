import React from 'react';

const HomePage = ({ isLoggedIn }) => {
  return (
    <div>
      <h2>Bienvenido a la página de inicio</h2>
      {isLoggedIn ? (
        <p>¡Has iniciado sesión correctamente!</p>
      ) : (
        <p>Por favor, inicia sesión para acceder a esta página.</p>
      )}
    </div>
  );
};

export default HomePage;

