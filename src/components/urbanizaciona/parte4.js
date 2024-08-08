// src/App.js

import React from 'react';
import './UrbanizacionAbierta.css';
import { FaArrowRight } from 'react-icons/fa';

const Comparativa = () => {
  return (
    <div className="comparativa-container">
      <h2>
        <strong>¿Urbanización Abierta</strong> <br />
        <span className="subtitulo">o Barrio Cerrado?</span>
      </h2>
      <div className="comparativa">
        <div className="urbanizacion">
          <h3>Urbanización Abierta</h3>
          <ul>
            <li><strong>LIBERTAD</strong></li>
            <li>Calles y Avenidas integradas</li>
            <li>Libertad de decisión</li>
            <li>Áreas comunes y servicios públicos</li>
            <li>Interacción social y comunidad activa</li>
          </ul>
        </div>
        <div className="versus">VS</div>
        <div className="barrio-cerrado">
          <h3>Barrio Cerrado</h3>
          <ul>
            <li><strong>EXCLUSIVIDAD</strong></li>
            <li>Cierre perimetral y acceso restringido</li>
            <li>Régimen de propiedad horizontal</li>
            <li>Consorcios de administración</li>
            <li>Expensas y reglamentos</li>
            <li>Amenities exclusivos</li>
          </ul>
        </div>
      </div>
      <div className="arrows">
        <FaArrowRight className="arrow left" />
        <FaArrowRight className="arrow right" />
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Comparativa />
    </div>
  );
}

export default App;
