import React, { useState, useEffect, useRef } from "react";
import DialogComponent from './modalusur';
import Tooltip from '@mui/material/Tooltip';
import logo from '../../Assets/logo.png';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import {  CssBaseline,  Box, Toolbar, Link } from '@mui/material';
import SyncIcon from '@mui/icons-material/Sync';
import Gps from "../../Assets/mapaiphone.png";
import Redes from "../../Assets/redes.svg";
import nex from"../../Assets/netx.png";
import vendidos from '../../Assets/vendidos.svg'
import servicioDatos from '../../services/datos';
import './config.css';
import foto1 from '../../Assets/masterp.png';
import { CircularProgress } from '@mui/material'; // Importar un componente de carga (opcional)
import Componente1 from "../masterplan/uanciudadverdeescritorio"
import Componentevs from "../masterplan/bosqypinares"
import { useNavigate } from "react-router-dom";
import Footer from "../footer"
import Typography from '@mui/material/Typography';
//import './Christian Sunday.ttf'
import './config.css'
const Arg = () => {
  const dialogRef = useRef();
  const navigate = useNavigate();
  const [info, setInfo] = useState(false);
  const [open, setOpen] = useState(false);
  const [lotes, setLotes] = useState();
  const [loading, setLoading] = useState(true); // Estado para la pantalla de carga
  const [posicion0, setPosicion0] = useState(true);
  const [imagenDeFondoActivada, setImagenDeFondoActivada] = useState(true);
  const [selectedImage, setSelectedImage] = useState(Gps); // Estado para la imagen seleccionada
  const [showText, setShowText] = useState(true);
  const [showRestoreButton, setShowRestoreButton] = useState(false);
  const [color, setColor] = useState("#1C6A3B"); // Estado para controlar el tamaño del SVG
  const [color2, setColor2] = useState("#246F74");
  const getClients = async () => {
    const lotess = await servicioDatos.traerlotes();
    setLotes(lotess);
  };
  
  useEffect(() => {
    getClients().then(() => {
     setLoading(false); // Cuando los datos se carguen, ocultar la pantalla de carga
    });
  }, []);

  const handleOpenDialog = (p) => {
    setInfo(p);
    dialogRef.current.openDialog();
  };

  const transformWrapperRef = useRef(null);


  
  // Función para manejar el cambio de escala
  const handleMouseEnter = () => setColor("green"); // 
  const handleMouseLeave = () => setColor("#1C6A3B");  // 
  const handleMouseEnter2 = () => setColor2("#0d47a1"); // 
  const handleMouseLeave2 = () => setColor2("#246F74");  // 
  const handleImageChange = (e) => {
    setSelectedImage(e.target.value); // Actualiza la imagen seleccionada
  };
  const cambiarsvg = (e) => {
    setShowRestoreButton(true)
    if (e === 1) {
        setPosicion0(false);  
        ;
        if (transformWrapperRef.current) {
            // Ajusta los valores para mover un poco hacia el centro y hacia abajo
            transformWrapperRef.current.setTransform(-200, -100, 2.5); // Ajusta estos valores según sea necesario
        }
    } else {
        setPosicion0(false);
        if (transformWrapperRef.current) {
          // Ajusta los valores para mover un poco hacia el centro y hacia abajo
          transformWrapperRef.current.setTransform(-400, -700, 2.5); // Ajusta estos valores según sea necesario
      }
    }
};



  return (
    <>
     {loading ? (
        <div className="loading-screen">
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
    <img src={logo} alt="Logo" style={{ width: '200px', marginBottom: '20px' }} />
    <CircularProgress color="success" />
  </Box>
        </div>
      ) : (<>
    <CssBaseline />
   
        <Toolbar className="urbanizacion-toolbar">
          <img src={logo} alt="Logo" className="urbanizacion-logo" />
        </Toolbar>
   
      
        <nav className="urbanizacion-nav">
  <div
    variant="button"
    color="primary"
    href="#"
    className="urbanizacion-navlink"
    style={{ 
      color: "#246F74", 
      marginRight: "25px", 
      fontSize: "24px", 
      fontFamily: "Inter", 
      fontWeight: 400,
      cursor: "pointer"  // Cambia el cursor al pasar el mouse
    }}
    onClick={() => navigate('/')}
  >
    Home
  </div>
  <div
    variant="button"
    color="primary"
    href="#"
    className="urbanizacion-navlink"
    style={{ 
      color: "#246F74", 
      marginRight: "25px", 
      fontSize: "24px", 
      fontFamily: "Inter", 
      fontWeight: 400,
      cursor: "pointer"  // Cambia el cursor al pasar el mouse
    }}
    onClick={() => navigate('/urbanizacion-abierta')}
  >
    Urbanización Abierta
  </div>
  <div
    variant="button"
    color="primary"
    href="#"
    className="urbanizacion-navlink"
    style={{ 
      color: "#246F74", 
      marginRight: "25px", 
      fontSize: "24px", 
      fontFamily: "Inter", 
      fontWeight: 400,
      cursor: "pointer"  // Cambia el cursor al pasar el mouse
    }}
    onClick={() => navigate('/masterplan')}
  >
    MasterPlan
  </div>
  <div
    variant="button"
    color="primary"
    href="#"
    className="urbanizacion-navlink"
    style={{ 
      color: "#246F74", 
      marginRight: "25px", 
      fontSize: "24px", 
      fontFamily: "Inter", 
      fontWeight: 400,
      cursor: "pointer"  // Cambia el cursor al pasar el mouse
    }}
    onClick={() => navigate('/espacios-publicos')}
  >
    Espacios públicos
  </div>
  <div
    variant="button"
    color="primary"
    href="#"
    className="urbanizacion-navlink"
    style={{ 
      color: "#246F74", 
      marginRight: "25px", 
      fontSize: "24px", 
      fontFamily: "Inter", 
      fontWeight: 400,
      cursor: "pointer"  // Cambia el cursor al pasar el mouse
    }}
    onClick={() => navigate('/contacto')}
  >
    Contacto
  </div>
</nav>

    
    {     <img src={foto1} alt="Urbanización Abierta" className="urbanizacion-header-image" /> &&
 
<>

<div style={styles.imageContainer}>
      <img 
        src={foto1} 
        alt="Urbanización Abierta" 
        style={styles.image} 
      />
      <span style={styles.imageText}>MasterPlan</span>
 
    </div>     <br/><br/>     <br/><br/>
<Componente1/>
<br/><br/><br/>



<img 
        src={Redes} 
        alt="Urbanización Abierta" 
      width= '60%'
      />

      <div       style={{ height: '100vh' }} 
      >
         <br/><br/><br/>
            <h1  style={styles.infomapainttitulo}  ><b>Mapa interactivo</b></h1>
    <p  style={styles.infomapaint}  >
    Para conocer disponibilidades, dimensiones y precios <b>hacer click </b> en el sector y lote de interés. <br/>
    Para volver a la vista general <b>tocar</b> en el botón Restaurar.
    </p>
      <TransformWrapper
      style={{ marginBottom: '0px' , left: '-20%',height: '100vh' }} 
    ref={transformWrapperRef}  // Asigna la referencia
    defaultPositionX={0}
    defaultPositionY={0}
    defaultScale={1}
     wheel={{ disabled: posicion0 }}  //Deshabilita el zoom cuando posicion0 es true
    pan={{ disabled: posicion0 }}  
    transitionDuration={500}
>
          {({ zoomIn, zoomOut, setTransform, resetTransform, ...rest }) => (
            <React.Fragment>
           {/*   {  showRestoreButton &&   <div
              style={{ position: 'fixed', bottom: 20, zIndex: 2, display: 'flex', flexDirection: 'column', }}>
               <button
          onClick={() => {
            resetTransform();  // Restaurar la vista completa
            setPosicion0(true);  // Activa la primera capa del SVG
            setShowRestoreButton(false);
          }}
        >
            Restaurar vista
        </button>
      </div>}
 */}

{showRestoreButton && (
        <div style={{
          position: 'relative',
          bottom: '-20%',
          left: '-25%',
          zIndex: 1000, // Asegura que esté sobre otros elementos
        //  backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo semi-transparente para que no tape contenido
          padding: '10px',
          borderRadius: '5px',
        }}>
            <img src={vendidos} alt="Urbanización Abierta"/>
        </div>
      )}


  {/*INICIO BOTON 2*/}

  {showRestoreButton && (
        <div style={{
          position: 'relative',
          bottom: '-80%',
          left: '20%',
          zIndex: 1000, // Asegura que esté sobre otros elementos
        //  backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo semi-transparente para que no tape contenido
          padding: '10px',
          borderRadius: '5px',
        }}>
         
     
          <button
            onClick={() => {
              resetTransform(); // Restaurar la vista completa
              setPosicion0(true); // Activa la primera capa del SVG
              setShowRestoreButton(false);
            }}
            style={{
              padding: '10px',
              backgroundColor: '#f0f0f0', // Fondo predeterminado de un botón común
              color: 'black', // Color del texto
              border: '1px solid #ccc', // Borde estándar
              borderRadius: '4px', // Bordes redondeados comunes
              cursor: 'pointer',
              display: 'flex', // Para alinear el ícono y el texto
              alignItems: 'center', // Centra el contenido verticalmente
              gap: '5px', // Espacio entre el ícono y el texto
              width: '200px',  // Ancho del botón ajustable
              textAlign: 'center', // Centra el texto dentro del botón
            }}
          >
            <SyncIcon /> {/* Ícono de Material UI */}
            Restaurar vista
          </button>
        </div>
      )}
  {/*FIN BOTON FIJO */}
       
              <div style={{ display: 'flex' }}>
  <div style={{ flex: 0.7 }}> {/* mover al  medio*/}
  
  
  {/*   <img src={foto3} alt="Urbanización Abierta" className="urbanizacion-header-image" /> */}
    </div>
  <div style={{ flex: 3}}>
              <TransformComponent>
                {lotes ? (
                  <>
                    <div style={{ position: 'relative', 
    width: '100%', 
    height: 'auto', marginLeft: '-5%' ,  ////////mueve a la izqueira pero queda bajo parte blanco
   // marginLeft: '-5%' ,        // Elimina cualquier margen
    padding: '0',       // Elimina cualquier padding
    overflow: 'hidden' }}>
  {imagenDeFondoActivada && (
    <img
    src={selectedImage}
    alt="Imagen de fondo"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',  // Ocupar todo el ancho de la pantalla
      height: 'auto',
      objectFit: 'cover',
      zIndex: 0,
      marginLeft: '2%' ,  // Elimina márgenes en la imagen
      padding: '0',  // Elimina padding en la imagen
      }}
    />
  )}  {  selectedImage && <>
{showText && (
    <div
        style={styles.overlayText}
        onMouseEnter={() => setShowText(false)}
    >
        Selecciona tu barrio
    </div>
)}
{posicion0 ? <div>
  <div style={{ position: 'relative', zIndex: 1, width: 'auto', height: '100vh'}}>   
  <svg viewBox="80 140 3507 2480" version="1.2" width="auto"  height="90vh"  xmlns="http://www.w3.org/2000/svg" >
 <defs/>
 <g stroke="black" stroke-width="1" fill-rule="evenodd" stroke-linejoin="bevel" stroke-linecap="square" fill="none">
  <g font-style="normal"  transform="scale(0.7,0.7)"  stroke="#000000" stroke-width="1" stroke-linejoin="bevel" fill='none' font-size="32.5" stroke-linecap="square" stroke-opacity="1" font-family="MS Shell Dlg 2" font-weight="400" />
  <g font-style="normal"  transform="scale(0.7,0.7)"  stroke="#000000" stroke-width="1" stroke-linejoin="bevel" fill='none' font-size="32.5" stroke-linecap="square" stroke-opacity="1" font-family="MS Shell Dlg 2" font-weight="400" />
  <g font-style="normal"  transform="scale(0.7,0.7)"  stroke="#000000" stroke-width="1" stroke-linejoin="bevel" fill='none' font-size="32.5" stroke-linecap="square" stroke-opacity="1" font-family="MS Shell Dlg 2" font-weight="400" />
  <g font-style="normal"  transform="scale(0.7,0.7)"  stroke="#000000" stroke-width="1" stroke-linejoin="bevel" fill='none' font-size="32.5" stroke-linecap="square" stroke-opacity="1" font-family="MS Shell Dlg 2" font-weight="400" />
  <g font-style="normal" stroke="none" fill-opacity="1" font-size="32.5" font-family="MS Shell Dlg 2" font-weight="400" fill="#ffffff">
   <path vector-effect="none" d="M-2,-2 L3510,-2 L3510,2483 L-2,2483 L-2,-2" fill="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal"  transform="scale(0.7,0.7)"  stroke="#000000" stroke-width="1" stroke-linejoin="bevel" fill='none' font-size="32.5" stroke-linecap="square" stroke-opacity="1" font-family="MS Shell Dlg 2" font-weight="400" />
  <g font-style="normal"  transform="scale(0.7,0.7)"  stroke="#000000" stroke-width="1" stroke-linejoin="bevel" fill='none' font-size="32.5" stroke-linecap="square" stroke-opacity="1" font-family="MS Shell Dlg 2" font-weight="400" />
  <g font-style="normal"  transform="scale(0.7,0.7)"  stroke="#000000" stroke-width="1" stroke-linejoin="bevel" fill='none' font-size="32.5" stroke-linecap="square" stroke-opacity="1" font-family="MS Shell Dlg 2" font-weight="400" />
  <g font-style="normal"  transform="scale(0.7,0.7)"  stroke="#000000" stroke-width="1" stroke-linejoin="bevel" fill='none' font-size="32.5" stroke-linecap="square" stroke-opacity="1" font-family="MS Shell Dlg 2" font-weight="400" />
  <g font-style="normal"  transform="scale(0.7,0.7)"  stroke="#000000" stroke-width="1" stroke-linejoin="bevel" fill='none' font-size="32.5" stroke-linecap="square" stroke-opacity="1" font-family="MS Shell Dlg 2" font-weight="400" />
  <g font-style="normal"  transform="scale(0.7,0.7)"  stroke="#000000" stroke-width="1" stroke-linejoin="bevel" fill='none' font-size="32.5" stroke-linecap="square" stroke-opacity="1" font-family="MS Shell Dlg 2" font-weight="400" />
  <g font-style="normal" stroke="none" fill-opacity="1" font-size="32.5" font-family="MS Shell Dlg 2" font-weight="400" fill="#ffffff">
   <path vector-effect="none" style={{ cursor: 'important' }} fillOpacity={0.0001} fill='none'  d="M0,0 L297,0 L297,210 L0,210 L0,0" fill-rule="evenodd"/>
  </g>
  <g font-style="normal"  transform="scale(0.7,0.7)"  stroke="#000000" stroke-width="1" stroke-linejoin="bevel" fill='none' font-size="32.5" stroke-linecap="square" stroke-opacity="1" font-family="MS Shell Dlg 2" font-weight="400" />
  <g font-style="normal"  transform="scale(0.7,0.7)"  stroke="#000000" stroke-width="1" stroke-linejoin="bevel" fill='none' font-size="32.5" stroke-linecap="square" stroke-opacity="1" font-family="MS Shell Dlg 2" font-weight="400" />
  <g font-style="normal" stroke="none" fill-opacity="0" font-size="32.5" font-family="MS Shell Dlg 2" font-weight="400" fill="#000000">
  
  </g>
  <g font-style="normal"  transform="scale(0.7,0.7)"  stroke="#000000" stroke-width="1" stroke-linejoin="bevel" fill='none' font-size="32.5" stroke-linecap="square" stroke-opacity="1" font-family="MS Shell Dlg 2" font-weight="400" />
  <g font-style="normal" stroke="#232323" stroke-width="3.07087" fill-opacity="0.652995" stroke-linejoin="bevel" font-size="32.5" stroke-linecap="square" stroke-opacity="0.652995" font-family="MS Shell Dlg 2" font-weight="400" fill="#1c6a3b">
   <path vector-effect="none"  style={{ cursor: 'pointer' }}  fill={color}   transform="scale(0.92,0.97)"  onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}   onClick={ () => cambiarsvg(1)}   d="M1037.69,899.526 L1222.96,904.069 L1248.21,904.574 L1413.29,919.214 L1526.75,485.432 L1042.61,443.909 L1037.69,899.526" fill-rule="evenodd"/>
  <text x="1150" y="700" style={styles.svgText}  onClick={ () => cambiarsvg(1)}  >Bosques</text>

  </g>
  <g font-style="normal"  transform="scale(0.7,0.7)"  stroke="#000000" stroke-width="1" stroke-linejoin="bevel" fill='none' font-size="32.5" stroke-linecap="square" stroke-opacity="1" font-family="MS Shell Dlg 2" font-weight="400" />
  <g font-style="normal" stroke="#232323" stroke-width="3.07087" fill-opacity="0.484993" stroke-linejoin="bevel" font-size="32.5" stroke-linecap="square" stroke-opacity="0.484993" font-family="MS Shell Dlg 2" font-weight="400" fill="#246f74">
   <path  style={{ cursor: 'pointer' }}  transform="scale(0.92,0.97)" fill={color2} onClick={ () => cambiarsvg(2)} onMouseEnter={handleMouseEnter2}  onMouseLeave={handleMouseLeave2}    vector-effect="none" d="M1053.65,948.684 L1216.72,946.16 L1403,963.325 L1377.76,1023.4 L1379.78,1171.82 L1459.04,1172.33 L1449.7,1899.55 L1545.37,1899.04 L1548.4,2082.05 L1038,1943.85 L1053.65,948.684" fill-rule="evenodd"/>
   <text x="1150" y="1400"   className="svgTextpinares" onClick={ () => cambiarsvg(2)} >Pinares</text>

 
  </g>
  <g font-style="normal"  transform="scale(0.7,0.7)"  stroke="#000000" stroke-width="1" stroke-linejoin="bevel" fill='none' font-size="32.5" stroke-linecap="square" stroke-opacity="1" font-family="MS Shell Dlg 2" font-weight="400" />
  <g font-style="normal"  transform="scale(0.7,0.7)"  stroke="#000000" stroke-width="1" stroke-linejoin="bevel" fill='none' font-size="32.5" stroke-linecap="square" stroke-opacity="1" font-family="MS Shell Dlg 2" font-weight="400" />
  <g font-style="normal"  transform="scale(0.7,0.7)"  stroke="#000000" stroke-width="1" stroke-linejoin="bevel" fill='none' font-size="32.5" stroke-linecap="square" stroke-opacity="1" font-family="MS Shell Dlg 2" font-weight="400" />
  <g font-style="normal"  transform="scale(0.7,0.7)"  stroke="#000000" stroke-width="1" stroke-linejoin="bevel" fill='none' font-size="32.5" stroke-linecap="square" stroke-opacity="1" font-family="MS Shell Dlg 2" font-weight="400" />
  <g font-style="normal"  transform="scale(0.7,0.7)"  stroke="#000000" stroke-width="1" stroke-linejoin="bevel" fill='none' font-size="32.5" stroke-linecap="square" stroke-opacity="1" font-family="MS Shell Dlg 2" font-weight="400" />
  <g font-style="normal"  transform="scale(0.7,0.7)"  stroke="#000000" stroke-width="1" stroke-linejoin="bevel" fill='none' font-size="32.5" stroke-linecap="square" stroke-opacity="1" font-family="MS Shell Dlg 2" font-weight="400" />
  <g font-style="normal"  transform="scale(0.7,0.7)"  stroke="#000000" stroke-width="1" stroke-linejoin="bevel" fill='none' font-size="32.5" stroke-linecap="square" stroke-opacity="1" font-family="MS Shell Dlg 2" font-weight="400" />
  <g font-style="normal"  transform="scale(0.7,0.7)"  stroke="#000000" stroke-width="1" stroke-linejoin="bevel" fill='none' font-size="32.5" stroke-linecap="square" stroke-opacity="1" font-family="MS Shell Dlg 2" font-weight="400" />
  <g font-style="normal"  transform="scale(0.7,0.7)"  stroke="#000000" stroke-width="1" stroke-linejoin="bevel" fill='none' font-size="32.5" stroke-linecap="square" stroke-opacity="1" font-family="MS Shell Dlg 2" font-weight="400" />
  <g font-style="normal"  transform="scale(0.7,0.7)"  stroke="#000000" stroke-width="1" stroke-linejoin="bevel" fill='none' font-size="32.5" stroke-linecap="square" stroke-opacity="1" font-family="MS Shell Dlg 2" font-weight="400" />
 </g>
 
</svg>
</div>
</div>:<div>
<div style={{ position: 'relative', zIndex: 1, marginTop:'-15%',  width: 'auto', height: '100vh'}}>     

      <svg xmlns="http://www.w3.org/2000/svg"   width="auto"  height="100vh"  viewBox="-712 1075 12874 9834"  baseProfile="tiny" version="1.2">
                          <defs />
 <g transform="scale(1.193,1.1959) translate(0,736 ) " stroke-width="1" fill-rule="evenodd" stroke-linecap="square" fill="none" stroke-linejoin="bevel" stroke="black">
  <g transform="scale(1.193,1.1959) translate(0,736 ) " stroke-width="1"  font-family="MS Shell Dlg 2" stroke-opacity="1" stroke-linecap="square" font-style="normal" font-size="108.333" fill="none" stroke-linejoin="bevel" font-weight="400" stroke="#000000"/>
  <g transform="scale(1.193,1.1959) translate(0,736 ) " stroke-width="1"  font-family="MS Shell Dlg 2" stroke-opacity="1" stroke-linecap="square" font-style="normal" font-size="108.333" fill="none" stroke-linejoin="bevel" font-weight="400" stroke="#000000"/>
  <g transform="scale(1.193,1.1959) translate(0,736 ) " stroke-width="1"  font-family="MS Shell Dlg 2" stroke-opacity="1" stroke-linecap="square" font-style="normal" font-size="108.333" fill="none" stroke-linejoin="bevel" font-weight="400" stroke="#000000"/>
  <g transform="scale(1.193,1.1959) translate(0,736 ) " stroke-width="1"  font-family="MS Shell Dlg 2" stroke-opacity="1" stroke-linecap="square" font-style="normal" font-size="108.333" fill="none" stroke-linejoin="bevel" font-weight="400" stroke="#000000"/>
  <g fill-opacity="1"  font-family="MS Shell Dlg 2" font-style="normal" font-size="108.333" fill="#ffffff" font-weight="400" stroke="none">
        {[0].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}         fill-rule="evenodd" vector-effect="none" d="M-2,-2 L7877,-2 L7877,7877 L-2,7877 L-2,-2"/></Tooltip>)})}
  </g>

         
        
  <g transform="scale(1.193,1.1959) translate(0,736 ) " stroke-width="1"  font-family="MS Shell Dlg 2" stroke-opacity="1" stroke-linecap="square" font-style="normal" font-size="108.333" fill="none" stroke-linejoin="bevel" font-weight="400" stroke="#000000"/>
  <g transform="scale(1.193,1.1959) translate(0,736 ) " stroke-width="1"  font-family="MS Shell Dlg 2" stroke-opacity="1" stroke-linecap="square" font-style="normal" font-size="108.333" fill="none" stroke-linejoin="bevel" font-weight="400" stroke="#000000"/>
  <g transform="scale(1.193,1.1959) translate(0,736 ) " stroke-width="1"  font-family="MS Shell Dlg 2" stroke-opacity="1" stroke-linecap="square" font-style="normal" font-size="108.333" fill="none" stroke-linejoin="bevel" font-weight="400" stroke="#000000"/>
  <g transform="scale(1.193,1.1959) translate(0,736 ) " stroke-width="1"  font-family="MS Shell Dlg 2" stroke-opacity="1" stroke-linecap="square" font-style="normal" font-size="108.333" fill="none" stroke-linejoin="bevel" font-weight="400" stroke="#000000"/>
  <g transform="scale(1.193,1.1959) translate(0,736 ) " stroke-width="1"  font-family="MS Shell Dlg 2" stroke-opacity="1" stroke-linecap="square" font-style="normal" font-size="108.333" fill="none" stroke-linejoin="bevel" font-weight="400" stroke="#000000"/>
  <g fill-opacity="1"  font-family="MS Shell Dlg 2" font-style="normal" font-size="108.333" fill="#ffffff" font-weight="400" stroke="none">

        {[1].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(1)}         fill-rule="evenodd" vector-effect="none" d="M0,0 L202.893,0 L202.893,202.627 L0,202.627 L0,0"/></Tooltip>)})}
  </g>

          {[2].map(() => (
            <Tooltip title={'Sin datos'}>
            </Tooltip>
          ))}
        
  <g transform="scale(1.193,1.1959) translate(0,736 ) " stroke-width="1"  font-family="MS Shell Dlg 2" stroke-opacity="1" stroke-linecap="square" font-style="normal" font-size="108.333" fill="none" stroke-linejoin="bevel" font-weight="400" stroke="#000000"/>
  <g fill-opacity="0"  font-family="MS Shell Dlg 2" font-style="normal" font-size="108.333" fill="#000000" font-weight="400" stroke="none">
   <rect x="0" width="7988" y="0" height="7977"/>
  </g>
  <g transform="scale(1.193,1.1959) translate(0,736 ) " stroke-width="1"  font-family="MS Shell Dlg 2" stroke-opacity="1" stroke-linecap="square" font-style="normal" font-size="108.333" fill="none" stroke-linejoin="bevel" font-weight="400" stroke="#000000"/>
  <g transform="scale(1.193,1.1959) translate(0,736 ) " stroke-width="10.2362" fill-opacity="0.127001"  font-family="MS Shell Dlg 2" stroke-opacity="0.127001" stroke-linecap="square" font-style="normal" font-size="108.333" fill="#e4e7d6" stroke-linejoin="bevel" font-weight="400" stroke="#232323">

        {[2].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(2)}         fill-rule="evenodd" vector-effect="none" d="M1812.06,1559.83 L1907.61,1565.41 L1906.01,1805.08 L1812.85,1800.3 L1812.06,1559.83"/></Tooltip>)})}

        {[3].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(3)}         fill-rule="evenodd" vector-effect="none" d="M1911.59,1566.2 L2004.75,1576.55 L2003.16,1801.89 L1910.79,1803.48 L1911.59,1566.2"/></Tooltip>)})}

        {[4].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(4)}         fill-rule="evenodd" vector-effect="none" d="M2007.54,1577.35 L2103.08,1584.12 L2097.11,1804.68 L2005.55,1800.7 L2007.54,1577.35"/></Tooltip>)})}

        {[5].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(5)}         fill-rule="evenodd" vector-effect="none" d="M2103.48,1584.52 L2196.25,1589.69 L2193.46,1808.26 L2098.71,1802.69 L2103.48,1584.52"/></Tooltip>)})}

        {[6].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(6)}         fill-rule="evenodd" vector-effect="none" d="M2263.53,1598.05 L2353.9,1607.61 L2351.51,1810.25 L2258.75,1809.45 L2263.53,1598.05"/></Tooltip>)})}

        {[7].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(7)}         fill-rule="evenodd" vector-effect="none" d="M2355.49,1608.8 L2450.64,1614.77 L2448.26,1812.64 L2355.89,1809.85 L2355.49,1608.8"/></Tooltip>)})}

        {[8].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(8)}         fill-rule="evenodd" vector-effect="none" d="M2452.24,1615.97 L2543.41,1624.33 L2538.63,1809.85 L2447.46,1812.64 L2452.24,1615.97"/></Tooltip>)})}

        {[9].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(9)}         fill-rule="evenodd" vector-effect="none" d="M2546.59,1625.92 L2640.15,1632.69 L2635.37,1813.83 L2539.82,1811.84 L2546.59,1625.92"/></Tooltip>)})}

        {[10].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(10)}         fill-rule="evenodd" vector-effect="none" d="M1811.26,1868.18 L1906.41,1870.17 L1902.43,2052.51 L1809.27,2050.12 L1811.26,1868.18"/></Tooltip>)})}

        {[11].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(11)}         fill-rule="evenodd" vector-effect="none" d="M1908.8,1870.17 L2000.37,1869.77 L1999.18,2052.91 L1906.41,2052.91 L1908.8,1870.17"/></Tooltip>)})}

        {[12].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(12)}         fill-rule="evenodd" vector-effect="none" d="M2002.36,1870.57 L2194.65,1872.56 L2194.25,1943.02 L2000.37,1938.64 L2002.36,1870.57"/></Tooltip>)})}

        {[13].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(13)}         fill-rule="evenodd" vector-effect="none" d="M2001.49,1939.68 L2194.25,1945.41 L2193.06,2017.47 L2001.96,2013.49 L2001.49,1939.68"/></Tooltip>)})}

        {[14].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(14)}         fill-rule="evenodd" vector-effect="none" d="M2001.96,2017.87 L2192.66,2019.86 L2189.48,2088.34 L2000.75,2083.85 L2001.96,2017.87"/></Tooltip>)})}

        {[15].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(15)}         fill-rule="evenodd" vector-effect="none" d="M2002.47,2085.32 L2189.02,2090.99 L2189.02,2160.98 L2000.75,2160.49 L2002.47,2085.32"/></Tooltip>)})}

        {[16].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(16)}         fill-rule="evenodd" vector-effect="none" d="M2000.75,2162.46 L2189.02,2162.46 L2190.5,2241.32 L1999.76,2236.88 L2000.75,2162.46"/></Tooltip>)})}

        {[17].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(17)}         fill-rule="evenodd" vector-effect="none" d="M1936.18,2055.51 L1996.8,2055.75 L1997.79,2238.85 L1938.15,2238.85 L1936.18,2055.51"/></Tooltip>)})}

        {[18].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(18)}         fill-rule="evenodd" vector-effect="none" d="M1871.62,2054.27 L1933.22,2056 L1934.7,2238.85 L1870.63,2238.36 L1871.62,2054.27"/></Tooltip>)})}

        {[19].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(19)}         fill-rule="evenodd" vector-effect="none" d="M1808.53,2053.53 L1870.38,2054.52 L1869.15,2237.37 L1804.59,2233.92 L1808.53,2053.53"/></Tooltip>)})}

        {[20].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(20)}         fill-rule="evenodd" vector-effect="none" d="M2258.64,1870.8 L2445.44,1874.25 L2444.45,1946.21 L2261.1,1942.76 L2258.64,1870.8"/></Tooltip>)})}

        {[21].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(21)}         fill-rule="evenodd" vector-effect="none" d="M2260.12,1945.72 L2444.45,1947.69 L2443.46,2020.14 L2259.13,2019.65 L2260.12,1945.72"/></Tooltip>)})}

        {[22].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(22)}         fill-rule="evenodd" vector-effect="none" d="M2258.15,2022.61 L2444.94,2022.61 L2444.94,2091.61 L2257.65,2090.13 L2258.15,2022.61"/></Tooltip>)})}

        {[23].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(23)}         fill-rule="evenodd" vector-effect="none" d="M2448.89,1875.24 L2540.56,1877.7 L2539.08,2060.56 L2446.91,2059.57 L2448.89,1875.24"/></Tooltip>)})}

        {[24].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(24)}         fill-rule="evenodd" vector-effect="none" d="M2543.02,1877.7 L2636.67,1876.72 L2633.71,2062.04 L2541.05,2060.07 L2543.02,1877.7"/></Tooltip>)})}

        {[25].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(25)}         fill-rule="evenodd" vector-effect="none" d="M2542.53,2064.01 L2541.05,2062.53 L2537.6,2245.88 L2632.23,2246.37 L2634.7,2063.52 L2542.53,2064.01"/></Tooltip>)})}

        {[26].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(26)}         fill-rule="evenodd" vector-effect="none" d="M2445.93,2063.02 L2539.57,2062.53 L2537.11,2244.89 L2442.97,2246.86 L2445.93,2063.02"/></Tooltip>)})}

        {[27].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(27)}         fill-rule="evenodd" vector-effect="none" d="M2258.15,2092.59 L2444.94,2091.61 L2442.97,2165.54 L2257.65,2164.55 L2258.15,2092.59"/></Tooltip>)})}

        {[28].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(28)}         fill-rule="evenodd" vector-effect="none" d="M2255.68,2167.51 L2442.97,2166.03 L2442.97,2246.86 L2255.68,2241.44 L2255.68,2167.51"/></Tooltip>)})}

        {[29].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(29)}         fill-rule="evenodd" vector-effect="none" d="M1806.68,2301.57 L1866.81,2302.06 L1867.8,2492.31 L1805.7,2492.31 L1806.68,2301.57"/></Tooltip>)})}

        {[30].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(30)}         fill-rule="evenodd" vector-effect="none" d="M1869.77,2303.54 L1869.77,2303.54 L1933.35,2305.02 L1869.77,2303.54"/></Tooltip>)})}

        {[31].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(31)}         fill-rule="evenodd" vector-effect="none" d="M1869.77,2304.53 L1930.88,2305.51 L1931.38,2495.76 L1867.8,2494.28 L1869.77,2304.53"/></Tooltip>)})}

        {[32].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(32)}         fill-rule="evenodd" vector-effect="none" d="M1933.35,2306.01 L1997.91,2304.53 L1993.97,2496.74 L1934.83,2493.79 L1933.35,2306.01"/></Tooltip>)})}

        {[33].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(33)}         fill-rule="evenodd" vector-effect="none" d="M2001.36,2305.51 L2189.15,2307.48 L2189.15,2370.57 L1999.88,2366.63 L2001.36,2305.51"/></Tooltip>)})}

        {[34].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(34)}         fill-rule="evenodd" vector-effect="none" d="M2000.87,2368.11 L2189.15,2373.04 L2188.65,2432.18 L1997.91,2431.19 L2000.87,2368.11"/></Tooltip>)})}

        {[35].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(35)}         fill-rule="evenodd" vector-effect="none" d="M1997.42,2435.14 L2187.17,2434.64 L2185.7,2497.24 L1996.43,2494.77 L1997.42,2435.14"/></Tooltip>)})}

        {[36].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(36)}         fill-rule="evenodd" vector-effect="none" d="M1804.71,2497.24 L1878.15,2495.76 L1877.65,2657.42 L1798.8,2657.91 L1804.71,2497.24"/></Tooltip>)})}

        {[37].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(37)}         fill-rule="evenodd" vector-effect="none" d="M1880.12,2496.25 L1956.51,2496.25 L1952.57,2660.87 L1877.16,2658.4 L1880.12,2496.25"/></Tooltip>)})}

        {[38].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(38)}         fill-rule="evenodd" vector-effect="none" d="M1957.5,2498.72 L2030.94,2499.21 L2028.47,2659.88 L1954.05,2658.9 L1957.5,2498.72"/></Tooltip>)})}

        {[39].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(39)}         fill-rule="evenodd" vector-effect="none" d="M2033.89,2500.19 L2110.29,2499.21 L2108.81,2662.35 L2031.92,2657.42 L2033.89,2500.19"/></Tooltip>)})}

        {[40].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(40)}         fill-rule="evenodd" vector-effect="none" d="M2110.78,2500.19 L2187.67,2501.18 L2185.2,2663.83 L2112.26,2661.85 L2110.78,2500.19"/></Tooltip>)})}

        {[41].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(41)}         fill-rule="evenodd" vector-effect="none" d="M2253.22,2306.99 L2440.51,2308.96 L2440.01,2369.58 L2253.71,2367.61 L2253.22,2306.99"/></Tooltip>)})}

        {[42].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(42)}         fill-rule="evenodd" vector-effect="none" d="M2253.71,2372.05 L2439.52,2372.54 L2439.52,2437.11 L2252.73,2433.66 L2253.71,2372.05"/></Tooltip>)})}

        {[43].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(43)}         fill-rule="evenodd" vector-effect="none" d="M2251.25,2437.6 L2441,2438.59 L2441,2497.73 L2252.23,2497.24 L2251.25,2437.6"/></Tooltip>)})}

        {[44].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(44)}         fill-rule="evenodd" vector-effect="none" d="M2442.97,2310.93 L2537.6,2311.43 L2534.15,2501.67 L2442.97,2498.72 L2442.97,2310.93"/></Tooltip>)})}

        {[45].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(45)}         fill-rule="evenodd" vector-effect="none" d="M2540.07,2311.92 L2633.22,2312.91 L2630.26,2504.14 L2536.62,2500.69 L2540.07,2311.92"/></Tooltip>)})}

        {[46].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(46)}         fill-rule="evenodd" vector-effect="none" d="M2634.7,2311.92 L2746.08,2314.88 L2694.83,2506.11 L2630.75,2504.63 L2634.7,2311.92"/></Tooltip>)})}

        {[47].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(47)}         fill-rule="evenodd" vector-effect="none" d="M2592.31,2506.6 L2693.84,2507.09 L2646.03,2696.36 L2590.34,2693.4 L2592.31,2506.6"/></Tooltip>)})}

        {[48].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(48)}         fill-rule="evenodd" vector-effect="none" d="M2591.32,2507.59 L2587.38,2690.44 L2524.79,2686.5 L2525.28,2505.12 L2591.32,2507.59"/></Tooltip>)})}

        {[49].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(49)}         fill-rule="evenodd" vector-effect="none" d="M2521.34,2505.12 L2522.82,2684.03 L2455.29,2678.61 L2456.77,2503.64 L2521.34,2505.12"/></Tooltip>)})}

        {[50].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(50)}         fill-rule="evenodd" vector-effect="none" d="M2453.32,2504.14 L2452.83,2677.13 L2386.29,2674.67 L2386.29,2502.66 L2453.32,2504.14"/></Tooltip>)})}

        {[51].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
          <path className="mi-path" fill={fillColor} fillOpacity={fillOpacityValue} stroke="#000000" stroke-opacity="1" stroke-width="5.8" onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(51)} fill-rule="evenodd" vector-effect="none" d="M2318.28,2500.19 L2383.83,2503.64 L2384.32,2673.19 L2318.28,2669.74 L2318.28,2500.19 Z"/>
          </Tooltip>)})}

        {[52].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(52)}         fill-rule="evenodd" vector-effect="none" d="M2316.31,2500.69 L2315.32,2666.78 L2249.28,2663.83 L2249.28,2500.19 L2316.31,2500.69"/></Tooltip>)})}

        {[53].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={'Area Comercial'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(53)}         fill-rule="evenodd" vector-effect="none" d="M1796.33,2802.81 L2174.85,2805.77 L2167.95,3332.15 L1789.43,3327.22 L1796.33,2802.81"/></Tooltip>)})}

        {[54].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
    <Tooltip title={'Area Comercial'}>
                <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(54)}         fill-rule="evenodd" vector-effect="none" d="M2258.64,2811.69 L2605.62,2841.26 L2568.16,2988.13 L2565.2,3334.12 L2251.74,3338.07 L2258.64,2811.69"/></Tooltip>)})}

        {[55].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(55)}         fill-rule="evenodd" vector-effect="none" d="M1791.9,3391.79 L1881.1,3390.8 L1879.13,3517.47 L1793.37,3515.5 L1791.9,3391.79"/></Tooltip>)})}

        {[56].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(56)}         fill-rule="evenodd" vector-effect="none" d="M1885.05,3391.3 L1973.27,3392.78 L1969.82,3517.47 L1881.1,3516.48 L1885.05,3391.3"/></Tooltip>)})}

        {[57].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(57)}         fill-rule="evenodd" vector-effect="none" d="M1976.23,3393.27 L2165.98,3394.75 L2166.47,3458.33 L1974.75,3452.9 L1976.23,3393.27"/></Tooltip>)})}

        {[58].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(58)}         fill-rule="evenodd" vector-effect="none" d="M1974.26,3455.86 L2161.55,3460.3 L2163.52,3521.91 L1975.24,3518.95 L1974.26,3455.86"/></Tooltip>)})}

        {[59].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(59)}         fill-rule="evenodd" vector-effect="none" d="M1974.26,3521.91 L2163.02,3522.89 L2161.55,3584.99 L1973.27,3581.05 L1974.26,3521.91"/></Tooltip>)})}

        {[60].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(60)}         fill-rule="evenodd" vector-effect="none" d="M1790.42,3520.92 L1970.81,3520.92 L1969.33,3584.99 L1790.42,3579.08 L1790.42,3520.92"/></Tooltip>)})}

        {[61].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(61)}         fill-rule="evenodd" vector-effect="none" d="M1787.95,3582.04 L1971.3,3584.01 L1971.3,3649.07 L1789.92,3646.11 L1787.95,3582.04"/></Tooltip>)})}

        {[62].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(62)}         fill-rule="evenodd" vector-effect="none" d="M1973.27,3585.98 L2162.53,3586.47 L2162.04,3649.07 L1969.82,3648.08 L1973.27,3585.98"/></Tooltip>)})}

        {[63].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(63)}         fill-rule="evenodd" vector-effect="none" d="M1787.95,3648.08 L1969.82,3650.05 L1969.33,3714.62 L1788.94,3711.66 L1787.95,3648.08"/></Tooltip>)})}

        {[64].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(64)}         fill-rule="evenodd" vector-effect="none" d="M1970.81,3650.54 L2161.55,3650.54 L2164.01,3717.08 L1970.81,3711.66 L1970.81,3650.54"/></Tooltip>)})}

        {[65].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(65)}         fill-rule="evenodd" vector-effect="none" d="M1787.95,3714.12 L1968.34,3713.14 L1967.85,3775.73 L1790.42,3773.76 L1787.95,3714.12"/></Tooltip>)})}

        {[66].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(66)}         fill-rule="evenodd" vector-effect="none" d="M1971.79,3714.12 L2161.55,3717.08 L2160.56,3778.69 L1970.31,3774.25 L1971.79,3714.12"/></Tooltip>)})}

        {[67].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(67)}         fill-rule="evenodd" vector-effect="none" d="M1788.94,3775.73 L1875.19,3777.21 L1874.7,3902.4 L1785.98,3899.93 L1788.94,3775.73"/></Tooltip>)})}

        {[68].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(68)}         fill-rule="evenodd" vector-effect="none" d="M1876.18,3777.7 L1966.37,3779.18 L1964.4,3904.37 L1875.68,3901.91 L1876.18,3777.7"/></Tooltip>)})}

        {[69].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(69)}         fill-rule="evenodd" vector-effect="none" d="M1970.31,3777.7 L2160.07,3779.68 L2159.57,3843.25 L1967.36,3840.3 L1970.31,3777.7"/></Tooltip>)})}

        {[70].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(70)}         fill-rule="evenodd" vector-effect="none" d="M1967.85,3843.75 L2159.57,3844.73 L2159.57,3906.83 L1966.37,3903.88 L1967.85,3843.75"/></Tooltip>)})}

        {[71].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(71)}         fill-rule="evenodd" vector-effect="none" d="M2248.78,3395.24 L2442.48,3396.72 L2440.51,3459.31 L2247.3,3458.33 L2248.78,3395.24"/></Tooltip>)})}

        {[72].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(72)}         fill-rule="evenodd" vector-effect="none" d="M2247.3,3460.54 L2441.99,3462.52 L2440.01,3527.08 L2248.29,3523.14 L2247.3,3460.54"/></Tooltip>)})}

        {[73].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(73)}         fill-rule="evenodd" vector-effect="none" d="M2246.32,3525.6 L2441.49,3529.55 L2440.51,3591.65 L2245.83,3585.73 L2246.32,3525.6"/></Tooltip>)})}

        {[74].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(74)}         fill-rule="evenodd" vector-effect="none" d="M2245.83,3588.2 L2439.03,3591.15 L2439.03,3652.27 L2247.3,3651.28 L2245.83,3588.2"/></Tooltip>)})}

        {[75].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(75)}         fill-rule="evenodd" vector-effect="none" d="M2246.32,3653.25 L2439.52,3655.23 L2438.04,3720.28 L2246.32,3715.36 L2246.32,3653.25"/></Tooltip>)})}

        {[76].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(76)}         fill-rule="evenodd" vector-effect="none" d="M2245.33,3717.82 L2437.55,3722.26 L2435.58,3781.4 L2244.84,3780.41 L2245.33,3717.82"/></Tooltip>)})}

        {[77].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(77)}         fill-rule="evenodd" vector-effect="none" d="M2245.83,3782.88 L2437.06,3780.91 L2437.06,3846.46 L2246.81,3843.5 L2245.83,3782.88"/></Tooltip>)})}

        {[78].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(78)}         fill-rule="evenodd" vector-effect="none" d="M2246.81,3846.46 L2436.56,3845.47 L2437.06,3907.08 L2243.85,3908.07 L2246.81,3846.46"/></Tooltip>)})}

        {[79].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(79)}         fill-rule="evenodd" vector-effect="none" d="M2513.45,3399.92 L2578.51,3399.92 L2576.05,3589.68 L2515.42,3590.17 L2513.45,3399.92"/></Tooltip>)})}

        {[80].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(80)}         fill-rule="evenodd" vector-effect="none" d="M2580.48,3400.41 L2642.09,3399.92 L2639.63,3589.68 L2579,3589.68 L2580.48,3400.41"/></Tooltip>)})}

        {[81].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(81)}         fill-rule="evenodd" vector-effect="none" d="M2645.05,3401.89 L2706.66,3402.39 L2703.7,3592.14 L2641.6,3591.65 L2645.05,3401.89"/></Tooltip>)})}

        {[82].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(82)}         fill-rule="evenodd" vector-effect="none" d="M2514.44,3594.11 L2704.68,3595.59 L2702.22,3657.2 L2512.96,3654.24 L2514.44,3594.11"/></Tooltip>)})}

        {[83].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(83)}         fill-rule="evenodd" vector-effect="none" d="M2512.96,3657.69 L2702.22,3659.66 L2702.22,3723.24 L2512.96,3719.3 L2512.96,3657.69"/></Tooltip>)})}

        {[84].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(84)}         fill-rule="evenodd" vector-effect="none" d="M2509.02,3723.24 L2573.58,3722.75 L2574.57,3911.52 L2506.55,3912.5 L2509.02,3723.24"/></Tooltip>)})}

        {[85].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(85)}         fill-rule="evenodd" vector-effect="none" d="M2577.03,3723.24 L2637.65,3721.76 L2636.18,3914.47 L2576.54,3914.47 L2577.03,3723.24"/></Tooltip>)})}

        {[86].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(86)}         fill-rule="evenodd" vector-effect="none" d="M2638.15,3723.73 L2702.71,3722.75 L2700.74,3916.94 L2638.64,3912.5 L2638.15,3723.73"/></Tooltip>)})}

        {[87].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(87)}         fill-rule="evenodd" vector-effect="none" d="M1783.52,3966.72 L1874.7,3967.7 L1872.23,4094.86 L1784.5,4093.88 L1783.52,3966.72"/></Tooltip>)})}
            <path d="M904.679,1836.65 L916.878,443.868 L2032.68,456.784 L2006.58,1853.51 L904.679,1836.65"fill={'#5D7237B2'}fillOpacity={0.7} transform="translate(985, 3600) scale(0.87,0.83)"  vector-effect="none" fill-rule="evenodd"/>
            <image href={nex} x="2150" y="4310" width="115" height="115" />
            <text x="2240" y="4550"style={styles.svgTextproximamente}   >Próximamente</text>

{/*   lotes agregados  */}

{[150].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.000001 :0.000001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            
            <path   stroke="#000000" stroke-opacity="1" stroke-width="5.8"     transform="translate(-348, 1615) scale(1.92,1.92)"  d="M1455.67,929.329 L1493.8,929.007 L1492.68,1061.81 L1453.45,1061.85 L1455.67,929.329" fill-rule="evenodd" vector-effect="none"className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}   onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(150)}    />
            </Tooltip>)})}
            {[151].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ?  0.000001 :0.000001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            
            <path stroke="#000000" stroke-opacity="1" stroke-width="5.8"   transform="translate(-348, 1617) scale(1.92,1.92)" className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}    onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(151)}     d="M1453.53,1061.64 L1492.66,1061.81 L1489.79,1194.1 L1453.38,1194.38 L1453.53,1061.64" fill-rule="evenodd" vector-effect="none"/>

            </Tooltip>)})}
            {/* {[152].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 1;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            
            <path transform="translate(-350, 1617) scale(1.92,1.92)" className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(87)}     d="M1450.54,1227.23 L1489.57,1227.23 L1489.72,1361.44 L1450.47,1361.44 L1450.54,1227.23" fill-rule="evenodd" vector-effect="none"/>

            </Tooltip>)})}
            {[153].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 1;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
               <path transform="translate(-350, 1617) scale(1.92,1.92)"  className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(87)}      d="M1489.71,1361.56 L1450.47,1361.44 L1450.43,1492.6 L1488.18,1492.43 L1489.71,1361.56" fill-rule="evenodd" vector-effect="none"/>

            
            </Tooltip>)})} */}


            


   {/*      {[88].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(88)}         fill-rule="evenodd" vector-effect="none" d="M1878.15,3969.18 L1961.93,3969.18 L1962.92,4095.85 L1872.23,4097.33 L1878.15,3969.18"/></Tooltip>)})}

        {[89].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(89)}         fill-rule="evenodd" vector-effect="none" d="M1965.88,3971.65 L2158.1,3971.15 L2154.64,4034.73 L1967.36,4032.76 L1965.88,3971.65"/></Tooltip>)})}

        {[90].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(90)}         fill-rule="evenodd" vector-effect="none" d="M1965.38,4035.72 L2152.67,4036.7 L2153.66,4099.79 L1966.86,4096.83 L1965.38,4035.72"/></Tooltip>)})}

        {[91].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(91)}         fill-rule="evenodd" vector-effect="none" d="M1783.52,4097.33 L1962.92,4099.79 L1960.95,4159.43 L1782.53,4154.99 L1783.52,4097.33"/></Tooltip>)})}

        {[92].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(92)}         fill-rule="evenodd" vector-effect="none" d="M1965.38,4101.27 L2153.17,4101.76 L2154.15,4162.39 L1964.89,4158.94 L1965.38,4101.27"/></Tooltip>)})}

        {[93].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(93)}         fill-rule="evenodd" vector-effect="none" d="M1779.57,4161.4 L1959.96,4160.91 L1959.47,4225.47 L1781.55,4222.02 L1779.57,4161.4"/></Tooltip>)})}

        {[94].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(94)}         fill-rule="evenodd" vector-effect="none" d="M1962.92,4161.4 L2154.64,4163.86 L2152.67,4227.94 L1962.43,4225.47 L1962.92,4161.4"/></Tooltip>)})}

        {[95].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(95)}         fill-rule="evenodd" vector-effect="none" d="M1780.07,4225.47 L1959.96,4228.43 L1957.99,4290.04 L1777.6,4284.62 L1780.07,4225.47"/></Tooltip>)})}

        {[96].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(96)}         fill-rule="evenodd" vector-effect="none" d="M1961.93,4228.92 L2153.66,4227.44 L2151.69,4293.49 L1961.44,4290.04 L1961.93,4228.92"/></Tooltip>)})}

        {[97].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(97)}         fill-rule="evenodd" vector-effect="none" d="M1781.05,4290.53 L1958.48,4293 L1958.98,4353.12 L1781.55,4348.2 L1781.05,4290.53"/></Tooltip>)})}

        {[98].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(98)}         fill-rule="evenodd" vector-effect="none" d="M1962.43,4293 L2152.67,4295.46 L2150.21,4356.08 L1962.43,4352.63 L1962.43,4293"/></Tooltip>)})}

        {[99].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(99)}         fill-rule="evenodd" vector-effect="none" d="M1779.08,4354.11 L1868.29,4353.12 L1870.26,4479.79 L1777.11,4479.79 L1779.08,4354.11"/></Tooltip>)})}

        {[100].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(100)}    fill-rule="evenodd" vector-effect="none" d="M1868.78,4356.08 L1958.48,4354.6 L1957.5,4483.24 L1869.77,4479.3 L1868.78,4356.08"/></Tooltip>)})}

        {[101].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(101)}    fill-rule="evenodd" vector-effect="none" d="M1961.44,4355.1 L2149.72,4356.58 L2148.73,4421.14 L1960.46,4418.68 L1961.44,4355.1"/></Tooltip>)})}

        {[102].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(102)}    fill-rule="evenodd" vector-effect="none" d="M1960.95,4421.14 L2147.74,4423.11 L2149.72,4487.18 L1957.5,4480.28 L1960.95,4421.14"/></Tooltip>)})}

        {[103].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(103)}    fill-rule="evenodd" vector-effect="none" d="M2241.39,3974.6 L2434.1,3973.13 L2434.1,4037.69 L2240.9,4037.2 L2241.39,3974.6"/></Tooltip>)})}

        {[104].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(104)}    fill-rule="evenodd" vector-effect="none" d="M2242.87,4038.68 L2434.1,4038.68 L2429.66,4103.24 L2240.9,4099.3 L2242.87,4038.68"/></Tooltip>)})}

        {[105].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(105)}    fill-rule="evenodd" vector-effect="none" d="M2241.39,4103.73 L2430.16,4105.71 L2432.13,4166.33 L2238.93,4168.3 L2241.39,4103.73"/></Tooltip>)})}

        {[106].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(106)}    fill-rule="evenodd" vector-effect="none" d="M2237.94,4168.3 L2431.14,4167.81 L2431.64,4230.4 L2240.9,4228.43 L2237.94,4168.3"/></Tooltip>)})}

        {[107].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(107)}    fill-rule="evenodd" vector-effect="none" d="M2241.39,4232.37 L2429.66,4234.34 L2431.64,4296.45 L2240.4,4293.49 L2241.39,4232.37"/></Tooltip>)})}

        {[108].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(108)}    fill-rule="evenodd" vector-effect="none" d="M2240.4,4295.95 L2431.14,4298.42 L2428.68,4360.52 L2239.91,4356.08 L2240.4,4295.95"/></Tooltip>)})}

        {[109].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(109)}    fill-rule="evenodd" vector-effect="none" d="M2239.42,4358.55 L2427.2,4362.49 L2428.68,4423.6 L2237.94,4423.11 L2239.42,4358.55"/></Tooltip>)})}

        {[110].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(110)}    fill-rule="evenodd" vector-effect="none" d="M2237.45,4427.55 L2427.2,4426.56 L2426.71,4486.2 L2237.45,4483.73 L2237.45,4427.55"/></Tooltip>)})}

        {[111].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(111)}    fill-rule="evenodd" vector-effect="none" d="M2508.03,3976.58 L2571.61,3975.59 L2567.67,4166.82 L2505.57,4167.31 L2508.03,3976.58"/></Tooltip>)})}

        {[112].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(112)}    fill-rule="evenodd" vector-effect="none" d="M2574.07,3977.07 L2635.19,3978.05 L2634.2,4168.79 L2570.13,4167.31 L2574.07,3977.07"/></Tooltip>)})}

        {[113].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(113)}    fill-rule="evenodd" vector-effect="none" d="M2636.67,3980.03 L2698.77,3979.53 L2696.8,4169.29 L2636.67,4168.3 L2636.67,3980.03"/></Tooltip>)})}

        {[114].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(114)}    fill-rule="evenodd" vector-effect="none" d="M2506.06,4170.76 L2698.77,4170.76 L2698.77,4233.36 L2505.07,4232.87 L2506.06,4170.76"/></Tooltip>)})}

        {[115].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(115)}    fill-rule="evenodd" vector-effect="none" d="M2505.07,4236.32 L2697.29,4237.3 L2693.84,4299.9 L2505.57,4294.47 L2505.07,4236.32"/></Tooltip>)})}

        {[116].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(116)}    fill-rule="evenodd" vector-effect="none" d="M2502.61,4298.91 L2566.19,4299.4 L2565.7,4488.17 L2503.1,4487.18 L2502.61,4298.91"/></Tooltip>)})}

        {[117].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(117)}    fill-rule="evenodd" vector-effect="none" d="M2567.67,4298.91 L2629.77,4299.4 L2627.8,4488.66 L2566.68,4488.17 L2567.67,4298.91"/></Tooltip>)})}

        {[118].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(118)}    fill-rule="evenodd" vector-effect="none" d="M2632.23,4301.37 L2696.8,4303.35 L2691.87,4491.13 L2629.77,4490.14 L2632.23,4301.37"/></Tooltip>)})}

        {[119].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(119)}    fill-rule="evenodd" vector-effect="none" d="M1775.63,4566.04 L1866.32,4568.01 L1863.85,4744.46 L1774.15,4743.48 L1775.63,4566.04"/></Tooltip>)})}

        {[120].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(120)}    fill-rule="evenodd" vector-effect="none" d="M1868.29,4569 L1954.54,4568.01 L1953.56,4744.95 L1868.78,4745.45 L1868.29,4569"/></Tooltip>)})}

        {[121].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(121)}    fill-rule="evenodd" vector-effect="none" d="M1956.51,4569.49 L2148.24,4570.97 L2147.25,4659.69 L1955.03,4655.25 L1956.51,4569.49"/></Tooltip>)})}

        {[122].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(122)}    fill-rule="evenodd" vector-effect="none" d="M1957.01,4660.18 L2146.27,4660.18 L2148.24,4749.88 L1957.01,4746.43 L1957.01,4660.18"/></Tooltip>)})}

        {[123].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(123)}    fill-rule="evenodd" vector-effect="none" d="M1774.15,4747.91 L1955.53,4747.91 L1953.06,4835.15 L1774.15,4834.66 L1774.15,4747.91"/></Tooltip>)})}

        {[124].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(124)}    fill-rule="evenodd" vector-effect="none" d="M1957.01,4748.9 L2145.28,4751.36 L2145.28,4839.58 L1955.03,4834.66 L1957.01,4748.9"/></Tooltip>)})}

        {[125].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(125)}    fill-rule="evenodd" vector-effect="none" d="M1773.66,4838.6 L1951.58,4837.12 L1953.56,4925.84 L1772.67,4925.34 L1773.66,4838.6"/></Tooltip>)})}

        {[126].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(126)}    fill-rule="evenodd" vector-effect="none" d="M1954.05,4839.09 L2144.79,4841.06 L2144.79,4931.75 L1955.53,4925.34 L1954.05,4839.09"/></Tooltip>)})}

        {[127].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(127)}    fill-rule="evenodd" vector-effect="none" d="M1772.18,4927.31 L1952.08,4928.3 L1950.6,5023.92 L1772.18,5021.94 L1772.18,4927.31"/></Tooltip>)})}

        {[128].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(128)}    fill-rule="evenodd" vector-effect="none" d="M1954.54,4929.29 L2143.8,4933.23 L2144.29,5027.37 L1951.58,5024.9 L1954.54,4929.29"/></Tooltip>)})}

        {[129].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(129)}    fill-rule="evenodd" vector-effect="none" d="M1770.21,5025.39 L1951.58,5025.89 L1949.12,5122 L1766.27,5120.02 L1770.21,5025.39"/></Tooltip>)})}

        {[130].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(130)}    fill-rule="evenodd" vector-effect="none" d="M1953.56,5028.35 L2141.34,5029.34 L2140.35,5126.92 L1949.61,5123.47 L1953.56,5028.35"/></Tooltip>)})}

        {[131].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(131)}    fill-rule="evenodd" vector-effect="none" d="M2234,4570.48 L2426.71,4576.39 L2426.71,4663.63 L2234.98,4660.67 L2234,4570.48"/></Tooltip>)})}

        {[132].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(132)}    fill-rule="evenodd" vector-effect="none" d="M2428.68,4576.89 L2511.48,4576.39 L2508.28,4754.56 L2426.95,4753.58 L2428.68,4576.89"/></Tooltip>)})}

        {[133].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(133)}    fill-rule="evenodd" vector-effect="none" d="M2512.47,4577.87 L2599.21,4577.87 L2594.28,4754.81 L2509.51,4753.83 L2512.47,4577.87"/></Tooltip>)})}

        {[134].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(134)}    fill-rule="evenodd" vector-effect="none" d="M2600.2,4578.86 L2691.87,4577.87 L2690.39,4754.32 L2594.77,4754.56 L2600.2,4578.86"/></Tooltip>)})}

        {[135].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(135)}    fill-rule="evenodd" vector-effect="none" d="M2235.48,4663.14 L2423.75,4665.6 L2425.47,4753.58 L2234.49,4749.39 L2235.48,4663.14"/></Tooltip>)})}

        {[136].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(136)}    fill-rule="evenodd" vector-effect="none" d="M2233.5,4752.84 L2466.88,4754.32 L2466.63,4841.56 L2232.52,4841.06 L2233.5,4752.84"/></Tooltip>)})}

        {[137].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(137)}    fill-rule="evenodd" vector-effect="none" d="M2469.34,4756.54 L2691.87,4757.28 L2688.42,4845.01 L2468.6,4842.05 L2469.34,4756.54"/></Tooltip>)})}

        {[138].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(138)}    fill-rule="evenodd" vector-effect="none" d="M2231.53,4843.03 L2467.12,4844.51 L2464.66,4932.24 L2231.04,4932.24 L2231.53,4843.03"/></Tooltip>)})}

        {[139].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(139)}    fill-rule="evenodd" vector-effect="none" d="M2469.09,4845.01 L2687.56,4846.36 L2685.95,4936.19 L2465.64,4931.75 L2469.09,4845.01"/></Tooltip>)})}

        {[140].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(140)}    fill-rule="evenodd" vector-effect="none" d="M2230.55,4935.69 L2462.69,4933.72 L2462.69,5029.34 L2234,5030.32 L2230.55,4935.69"/></Tooltip>)})}

        {[141].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(141)}    fill-rule="evenodd" vector-effect="none" d="M2463.67,4934.71 L2686.94,4937.17 L2686.45,5033.28 L2465.15,5031.8 L2463.67,4934.71"/></Tooltip>)})}

        {[142].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(142)}    fill-rule="evenodd" vector-effect="none" d="M2233.5,5032.79 L2461.7,5035.74 L2462.69,5127.91 L2229.56,5125.45 L2233.5,5032.79"/></Tooltip>)})}

        {[143].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(143)}    fill-rule="evenodd" vector-effect="none" d="M2464.66,5036.73 L2685.95,5036.73 L2686.45,5130.87 L2464.16,5127.42 L2464.66,5036.73"/></Tooltip>)})}

        {[144].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(144)}    fill-rule="evenodd" vector-effect="none" d="M1749.66,5149.41 L1745.97,5232.58 L2967.2,5571.27 L2964.42,5148.95 L2731.54,5143.87 L2731.54,5163.27 L2230.67,5163.27 L2226.97,5203.94 L2142.88,5188.69 L2141.95,5154.96 L1749.66,5149.41"/></Tooltip>)})}
 */}
    {/*      {[145].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  //const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  //const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
  const fillColor = null
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title="Bosques">
            <path  fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(145)}    fill-rule="evenodd" vector-effect="none" d="M2636.82,1858.61 L2720.92,1860.92 L2721.84,2122.44 L2741.71,2122.91 L2742.17,1859.07 L2822.11,1858.61 L2823.03,1839.2 L2742.17,1838.28 L2742.63,1777.75 L2756.96,1774.51 L2769.9,1763.88 L2774.52,1755.57 L2782.83,1740.78 L2783.3,1712.13 L2774.52,1699.19 L2767.59,1689.49 L2761.58,1683.02 L2748.18,1677.02 L2741.25,1674.24 L2717.22,1672.86 L2705.67,1678.86 L2702.43,1682.56 L2695.04,1691.34 L2689.5,1696.42 L2679.33,1706.13 L2678.41,1712.13 L2677.48,1744.01 L2686.72,1758.34 L2691.35,1765.27 L2695.97,1770.35 L2711.21,1779.13 L2724.61,1779.59 L2724.15,1838.28 L2635.9,1840.59 L2637.75,1649.29 L2916.83,1677.02 L2760.65,2249.51 L2633.59,2244.43 L2636.82,1858.61"/></Tooltip>)})}

      
            <Tooltip title="Proyeccion">
            <path    fill-rule="evenodd" vector-effect="none" d="M2982.44,5135.09 L2973.2,5587.91 L6458.08,6541.6 L6460.85,3157.46 L6154.04,3113.1 L5054.33,3029.01 L5044.17,3089.08 L4931.42,3383.87 L2776.83,3030.4 L2776.6,3400.51 L2749.33,5131.39 L2982.44,5135.09"/>
</Tooltip>
       {[147].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
          
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(147)}    fill-rule="evenodd" vector-effect="none" d="M5291.37,1424.73 L5853.01,1761.8 L6202.79,2350.93 L6437.51,3031.09 L6367.28,3040.33 L5958.82,2968.25 L5072.58,2898.94 L5291.37,1424.73"/>)})} */}

        {[148].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);

  const fillColor = objetoEncontrado && objetoEncontrado.id_lote !== null ? '#F18310' : 'white';
  const fillOpacityValue = objetoEncontrado && objetoEncontrado.id_lote !== null ? 0.7 : 0.00001;
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path className="mi-path" fill={fillColor}     fillOpacity={fillOpacityValue}  stroke="#000000" stroke-opacity="1" stroke-width="5.8"  onClick={objetoEncontrado && objetoEncontrado.id_lote !== null ? null : () => handleOpenDialog(148)}    fill-rule="evenodd" vector-effect="none" d="M2582.07,2999.67 L2773.36,3032.01 L2773.36,3335.13 L2574.67,3331.43 L2582.07,2999.67"/></Tooltip>)})}
  </g>

          {[149].map(() => (
            <Tooltip title={'Sin datos'}>
            </Tooltip>
          ))}
        
  <g transform="scale(1.193,1.1959) translate(0,736 ) " stroke-width="1"  font-family="MS Shell Dlg 2" stroke-opacity="1" stroke-linecap="square" font-style="normal" font-size="108.333" fill="none" stroke-linejoin="bevel" font-weight="400" stroke="#000000"/>
  <g transform="scale(1.193,1.1959) translate(0,736 ) " stroke-width="1"  font-family="MS Shell Dlg 2" stroke-opacity="1" stroke-linecap="square" font-style="normal" font-size="108.333" fill="none" stroke-linejoin="bevel" font-weight="400" stroke="#000000"/>
  <g transform="scale(1.193,1.1959) translate(0,736 ) " stroke-width="1"  font-family="MS Shell Dlg 2" stroke-opacity="1" stroke-linecap="square" font-style="normal" font-size="108.333" fill="none" stroke-linejoin="bevel" font-weight="400" stroke="#000000"/>
  <g transform="scale(1.193,1.1959) translate(0,736 ) " stroke-width="1"  font-family="MS Shell Dlg 2" stroke-opacity="1" stroke-linecap="square" font-style="normal" font-size="108.333" fill="none" stroke-linejoin="bevel" font-weight="400" stroke="#000000"/>
  <g transform="scale(1.193,1.1959) translate(0,736 ) " stroke-width="1"  font-family="MS Shell Dlg 2" stroke-opacity="1" stroke-linecap="square" font-style="normal" font-size="108.333" fill="none" stroke-linejoin="bevel" font-weight="400" stroke="#000000"/>
  <g transform="scale(1.193,1.1959) translate(0,736 ) " stroke-width="1"  font-family="MS Shell Dlg 2" stroke-opacity="1" stroke-linecap="square" font-style="normal" font-size="108.333" fill="none" stroke-linejoin="bevel" font-weight="400" stroke="#000000"/>
  <g transform="scale(1.193,1.1959) translate(0,736 ) " stroke-width="1"  font-family="MS Shell Dlg 2" stroke-opacity="1" stroke-linecap="square" font-style="normal" font-size="108.333" fill="none" stroke-linejoin="bevel" font-weight="400" stroke="#000000"/>
  <g transform="scale(1.193,1.1959) translate(0,736 ) " stroke-width="1"  font-family="MS Shell Dlg 2" stroke-opacity="1" stroke-linecap="square" font-style="normal" font-size="108.333" fill="none" stroke-linejoin="bevel" font-weight="400" stroke="#000000"/>
  <g transform="scale(1.193,1.1959) translate(0,736 ) " stroke-width="1"  font-family="MS Shell Dlg 2" stroke-opacity="1" stroke-linecap="square" font-style="normal" font-size="108.333" fill="none" stroke-linejoin="bevel" font-weight="400" stroke="#000000"/>
 </g>

</svg>
</div>
</div>  }
</>}
</div>
                  </>
                ) : null}
              </TransformComponent>
              </div>
              </div>
            </React.Fragment>
          )}
        </TransformWrapper>
      </div>
 
      
      <DialogComponent ref={dialogRef} title=""
        info={info}
       
        mapa={'usur'}
        getClients={ async () => {

          const lotess = await servicioDatos.traerlotes()
      console.log(lotess)
          setLotes(lotess[0])
      
        }
      
      }>

      </DialogComponent>
{!posicion0 &&     <h2
  style={{
    position: 'absolute',
    marginTop: '18%',
    marginLeft: '33%',
    zIndex: 1000,
    animation: 'fade 1.5s infinite',
    animationName: 'fade',
    animationDuration: '1.5s',
    animationTimingFunction: 'ease-in-out',
    animationIterationCount: 'infinite',
    '@keyframes fade': {
      '0%, 100%': { opacity: 1 },
      '50%': { opacity: 0 }
    }
  }}
>
 <b> -Hacé click en el lote para ver el detalle.</b>
</h2>
}
<br/><br/>

      <Componentevs/>
      <Footer/>
      </>
    }
   </>  )} </>


  )
}

const styles = {
  imageContainer: {
    position: 'relative',
    display: 'inline-block', // Ajusta el tamaño al de la imagen
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  imageText: {
    position: 'absolute',
    top: '50%',
    left: '10%', // Mueve el texto más a la izquierda
    transform: 'translate(0, -50%)', // Mueve solo verticalmente para que no se afecte la posición horizontal
    color: 'white', // El color del texto
    fontSize: '60px', // Texto más grande
    fontWeight: 'bold', // Hacer el texto en negrita
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Sombra para que se lea mejor
    pointerEvents: 'none', // Para que el texto no interfiera con la imagen en términos de interacción
    fontFamily: 'inter',
    
  },
  svgText: {
    fill: '#fff', // Relleno blanco para el texto
    stroke: '#fff', // Contorno blanco para el texto
    fontSize: '80px',
    fontFamily: "'Christian Sunday', sans-serif", // Aplica la fuente
    textAnchor: 'middle',
    textAlign:'left',
   cursor: 'pointer'
  },
  infomapaint: {
textAlign:'left',
    fontSize: '26px',
    fontFamily: "'inter', sans-serif", // Aplica la fuente
   cursor: 'pointer',
   marginLeft:'13%'
  },
  infomapainttitulo: {
    textAlign:'left',
    fontSize: '36x',
    fontFamily: "'inter', sans-serif", // Aplica la fuente
   cursor: 'pointer',
   marginLeft:'13%'
  },
  svgTextproximamente: {
    fill:' #fff', /* Relleno blanco */
    stroke: '#fff', /* Contorno blanco */
    fillOpacity: '1', /* Opacidad sólida */
  //  strokeOpacity: '1', /* Opacidad del contorno sólida */           // Relleno blanco para el texto
    stroke: 'white',          // Contorno blanco para el texto
    color:' #fff',
    fontSize: '100px',
    fontFamily: 'inter',      // Aplica la fuente
    textAnchor: 'middle',
    cursor: 'pointer',
    fontStyle:"italic"
    
   // transform: 'rotate(-45deg)' // Rotación de 45 grados para hacer diagonal el texto
  },
  

  overlayText: {
    position: 'absolute',
    top: '0', // Posicionar en la parte superior
    left: '0', // Posicionar en la parte izquierda
    color: 'white',
    fontSize: '24px',
    backgroundColor: '#556b2f', // Color verde moho
    padding: '10px',
    width: '100%', // Que abarque todo el ancho de la imagen
    height: '100%', // Que abarque todo el alto de la imagen
    display: 'flex', // Usamos flex para centrar el texto
    justifyContent: 'center', // Centrar horizontalmente
    alignItems: 'center', // Centrar verticalmente
    zIndex: 10, // Asegura que el texto esté por encima del mapa
    opacity: 0.8, // Ajusta la opacidad si quieres un efecto semitransparente
  }
  
};


export default Arg;