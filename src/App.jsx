import React from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';

import './App.css';


const App = () => {
    return (
      <>
        <Navbar/>
        <Form accion="Buscar" busqueda="Busca tu carrera ideal"/>
      </>
    );
}

export default App;
