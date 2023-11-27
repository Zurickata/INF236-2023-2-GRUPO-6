import React from 'react';

function logout() {
    localStorage.removeItem('token');
    window.location.href = 'http://localhost:3000/';
    return(
        <h1>1</h1>
    )
    
  }
export default logout;
