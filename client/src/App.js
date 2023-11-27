// src/App.js
import React, { useState } from 'react';
import  {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import { authProvider } from './context/context';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const goToLogin = () => {
    setIsLogin(true);
  };
  return (
    <authProvider>
      <BrowserRouter>
        <Routes>
          <Route path= '/' element={<h1> home page</h1>}></Route>
          <Route path= '/login' element={<Login></Login>}></Route>
          <Route path= '/reservaHoras' element={<h1> reservaHoras</h1>}></Route>
         <Route path= '/hora/:rut' element={<h1> ver horas</h1>}></Route>


        </Routes>
      </BrowserRouter>
    </authProvider>

  );

}

export default App;
