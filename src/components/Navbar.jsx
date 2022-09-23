import React from 'react';
import Form from './Form';
import Dropdown from './Dropdown';
import Links from './Links';
import Cart from './Cart';
import '../App.css';


const Navbar = () => {
    const listDropdown = ["Hombre", "Mujer", "Niños", "Bebés"]
    //ESTOY TRATANDO DE PASAR UN ARRAY
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">Damn Tony</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <Dropdown lista={listDropdown}/>
              <Links/>
            </ul>
            <Form accion="Buscar" busqueda="Buscar Producto"/>
            <Cart/>
          </div>
        </div>
      </nav>
      </>
    );
}

export default Navbar;
