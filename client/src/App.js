// src/App.js
import React, { useState } from 'react';
import  {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Horas from './pages/horasX.js'
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/logout';
import ReservaHoras from './pages/ReservaHoras';


function App() {
  const [isLogin, setIsLogin] = useState(false);

  const goToLogin = () => {
    setIsLogin(true);
  };
  return (
    <authProvider>
      <BrowserRouter>
        <Routes>
          <Route path= '/' element={<Home></Home>}></Route>
          <Route path= '/login' element={<Login></Login>}></Route>
          <Route path= '/logout' element={<Logout></Logout>}></Route>
          <Route path= '/reservaHoras' element={<ReservaHoras></ReservaHoras>}></Route>
          <Route path= '/horasx' element={<Horas></Horas>}></Route>
        </Routes>
      </BrowserRouter>
    </authProvider>
  );
}

export default App;
