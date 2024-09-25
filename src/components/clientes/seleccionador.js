import { useState } from "react";
import Clientes from "./tabla";
import Lotes from "../lotes/tabla";
import * as React from 'react';
import NativeSelect from '@mui/material/NativeSelect';

const Seleccion = () => {
    const [mapa, setMapa] = useState("");

    const handleChange = (e) => {
        setMapa(e.target.value);
    };

    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            height: '100vh', 
            backgroundColor: '#214138',
            color: 'white'
        }}>
            {/* Header con logo y navegación */}
         
            {/* Contenedor principal con selección y botones */}
            <div style={{ 
                flex: 1, 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center'
            }}>
                <NativeSelect
                    defaultValue={30}
                    onChange={handleChange}
                    inputProps={{
                        name: 'anio',
                        id: 'uncontrolled-native',
                    }}
                    style={{ 
                        backgroundColor: 'white', 
                        color: 'black', 
                        padding: '10px', 
                        borderRadius: '5px',
                        marginBottom: '20px'
                    }}
                >
                    <option value={''}>Elegir</option>
                    <option value={0}>Todo</option>
                    <option value={1}>Clientes</option>
                    <option value={2}>Lotes</option>
                    <option value={3}>Ventas</option>
                </NativeSelect>

                {mapa === "1" ? <Clientes /> : null}
                {mapa === "2" ? <Lotes /> : null}
                {mapa === "3" ? <Clientes /> : null}
                {!mapa && <p>Sin selección</p>}
            </div>

            {/* Botones de acción */}
            <div style={{ 
                position: 'absolute', 
                bottom: '20px', 
                left: '20px' 
            }}>
                
            </div>
            <div style={{ 
                position: 'absolute', 
                bottom: '20px', 
                right: '20px' 
            }}>
                <button style={{ 
                    backgroundColor: '#2E7D32', 
                    color: 'white', 
                    padding: '10px 20px', 
                    border: 'none', 
                    borderRadius: '5px', 
                    cursor: 'pointer'
                }}>
                    Descargar PDF
                </button>
            </div>
        </div>
    );
};

export default Seleccion;
