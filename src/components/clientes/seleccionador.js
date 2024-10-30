import { useState } from "react";
import Clientes from "./tabla";
import Lotes from "../lotes/tabla";
import Nuevo from './nuevo';
import Ventas from '../ventas/todas';
import * as React from 'react';

const Seleccion = () => {
    const [mapa, setMapa] = useState("");

    const handleSelect = (value) => {
        setMapa(value);
    };

    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            height: '100vh', 
            backgroundColor: '#214138', // Asegura el color de fondo
            color: 'white',
            position: 'relative'
        }}>
            {/* Textos seleccionables en la parte superior izquierda */}
            <div style={{ 
                display: 'flex', 
                justifyContent: 'flex-start', 
                position: 'absolute',
                top: '20px',
                left: '20px',
                backgroundColor: '#1A393C',
                padding: '10px 20px',
                borderRadius: '5px',
            }}>
                <span 
                    style={{ 
                        cursor: 'pointer', 
                        color: mapa === "1" ? '#00FF00' : 'white', 
                        marginRight: '15px' 
                    }} 
                    onClick={() => handleSelect("1")}
                >
                    Clientes
                </span>
                <span 
                    style={{ 
                        cursor: 'pointer', 
                        color: mapa === "2" ? '#00FF00' : 'white', 
                        marginRight: '15px' 
                    }} 
                    onClick={() => handleSelect("2")}
                >
                    Lotes
                </span>
                <span 
                    style={{ 
                        cursor: 'pointer', 
                        color: mapa === "3" ? '#00FF00' : 'white' 
                    }} 
                    onClick={() => handleSelect("3")}
                >
                    Ventas
                </span>
            </div>

            {/* Mostrar contenido basado en la selección */}
            <div style={{ 
               // display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
              
                width: '100%',
                height: '100%',
               backgroundColor: '#214138', // Aplica el fondo al contenedor
            }}>
                {mapa === "1" ? <Clientes  /> : null}
                {mapa === "2" ? <Lotes  /> : null}
                {mapa === "3" ? <Ventas  /> : null}
                {!mapa && <p>Sin selección</p>}
            </div>

            {/* Botones de descarga en la parte superior derecha */}
            <div style={{ 
                display: 'flex', 
                justifyContent: 'flex-end', 
                position: 'absolute', 
                top: '20px', 
                right: '20px' 
            }}>
                <Nuevo/>
                <button style={{ 
                    backgroundColor: '#2E7D32', 
                    color: 'white', 
                    padding: '10px 20px', 
                    border: 'none', 
                    borderRadius: '5px', 
                    cursor: 'pointer', 
                    marginRight: '10px'
                }}>
                    Descargar en EXCEL
                </button>
                <button style={{ 
                    backgroundColor: '#2E7D32', 
                    color: 'white', 
                    padding: '10px 20px', 
                    border: 'none', 
                    borderRadius: '5px', 
                    cursor: 'pointer' 
                }}>
                    Descargar en PDF
                </button>
            </div>

            {/* Botón en la parte inferior derecha */}
            <div style={{ 
                position: 'absolute', 
                bottom: '20px', 
                right: '20px' 
            }}>
                {/* Aquí podrías añadir otro botón o componente */}
            </div>
        </div>
    );
};

export default Seleccion;
