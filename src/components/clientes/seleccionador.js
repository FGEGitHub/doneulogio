import { useState } from "react";
import Clientes from "./tabla";
import Lotes from "../lotes/tabla";
import Nuevo from './nuevo';
import Ventas from '../ventas/todas';
import Nuevaventa from '../ventas/nuevocli';
import * as React from 'react';
import servicioDatos from "../../services/datos"; // Asegúrate de importar tu servicio de datos
import * as XLSX from "xlsx";

const Seleccion = () => {
    const [mapa, setMapa] = useState("");

    const handleSelect = (value) => {
        setMapa(value);
    };

    // Función para descargar datos de lotes en Excel
    const descargarLotesExcel = async () => {
        const lotesData = await servicioDatos.traerlotes();
        const ws = XLSX.utils.json_to_sheet(lotesData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Lotes");
        XLSX.writeFile(wb, "Lotes.xlsx");
    };

    // Función para descargar datos de clientes en Excel
    const descargarClientesExcel = async () => {
        const clientesData = await servicioDatos.traerclientes();
        const ws = XLSX.utils.json_to_sheet(clientesData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Clientes");
        XLSX.writeFile(wb, "Clientes.xlsx");
    };

    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            height: '100vh', 
            backgroundColor: '#214138', 
            color: 'white',
            position: 'relative'
        }}>
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

            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                width: '100%',
                height: '100%',
                backgroundColor: '#214138', 
            }}>
                {mapa === "1" ? <Clientes /> : null}
                {mapa === "2" ? <Lotes /> : null}
                {mapa === "3" ? <Ventas /> : null}
                {!mapa && <p>Sin selección</p>}
            </div>

            <div style={{ 
                display: 'flex', 
                justifyContent: 'flex-end', 
                position: 'absolute', 
                top: '20px', 
                right: '20px' 
            }}>
                <Nuevaventa />
                <Nuevo />
                <button 
                    onClick={descargarLotesExcel}
                    style={{ 
                        backgroundColor: '#2E7D32', 
                        color: 'white', 
                        padding: '10px 20px', 
                        border: 'none', 
                        borderRadius: '5px', 
                        cursor: 'pointer', 
                        marginRight: '10px'
                    }}
                >
                    Descargar Lotes en Excel
                </button>
                <button 
                    onClick={descargarClientesExcel}
                    style={{ 
                        backgroundColor: '#2E7D32', 
                        color: 'white', 
                        padding: '10px 20px', 
                        border: 'none', 
                        borderRadius: '5px', 
                        cursor: 'pointer' 
                    }}
                >
                    Descargar Clientes en Excel
                </button>
            </div>

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
