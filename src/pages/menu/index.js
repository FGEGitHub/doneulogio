import Inicio from '../../components/mapas/arg'
import Tarjeta from '../../components/inicio/tarjetas'
import Nav from '../../components/inicio/nav'
import React, { useEffect, useState } from "react";


export default function Paginas() {
    return (
        <>
            <div style={{ backgroundColor: '#8eb937', minHeight: '100vh' }}>
                <Nav/>
                {/* Agrega aquí el resto de tu contenido */}
                <Inicio/>
             
            </div>
        </>
    );
}
