import { useState, useEffect, useRef } from "react";
import DialogComponent from './modalusur';
import Tooltip from '@mui/material/Tooltip';
import NativeSelect from '@mui/material/NativeSelect';

import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import * as React from 'react';


import MuiAlert from '@mui/material/Alert';
import DialogActions from '@mui/material/DialogActions';
import servicioDatos from '../../services/datos'

import Button from '@mui/material/Button';

import Gps from "../../Assets/bosques.jpeg"
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



const Arg = () => {
  //configuracion de Hooks
  const dialogRef = useRef();
  const [info, setInfo] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [lotes, setLotes] = React.useState();
  const [seleccion, setSeleccion] = useState()
  const [imagenDeFondoActivada, setImagenDeFondoActivada] = useState(false);

  const getClients = async () => {

    const lotess = await servicioDatos.traerlotes()
console.log(lotess)
    setLotes(lotess)

  }

  useEffect(() => {
    getClients()
  }, [])

  const handleOpenDialog = (p) => {
    setInfo(p)
    // setForm({ mapa: p,fraccion:1,manzana:1,lote:1 })
    dialogRef.current.openDialog();


  };
  const handleChange = (e) => {
    console.log( e.target.value)
    setSeleccion(e.target.value)


}
  const toggleImagenDeFondo = () => {
    setImagenDeFondoActivada((prev) => !prev);
  };

  return (
    <>


      <div  >

        <TransformWrapper>
          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <React.Fragment>
             <Button
                onClick={toggleImagenDeFondo}
                variant="contained"
                color="primary"
                style={{ position: 'Sticky',width: "15%", zIndex: 2 }}

              >
                {imagenDeFondoActivada ? 'Desactivar' : 'Activar'} GPS
                </Button> 
          
              
              <NativeSelect
defaultValue={30}
onChange={handleChange}
style={{ position: 'Sticky', zIndex: 2,marginBottom: "20px" }}
inputProps={{
    name: 'anio',
    id: 'uncontrolled-native',

}}

> <option value={''}>Elegir</option>
<option value={'Verde'}>Verde</option>
<option value={'Amarillo'}>Amarillo</option>
<option value={'Rojo'}>Rojo</option>




</NativeSelect>
 
              <TransformComponent>
                
       
                {lotes ? <>
                  <div style={{ position: 'relative' }}>
                    {imagenDeFondoActivada && (
                      <img
                        src={Gps}
                        alt="Imagen de fondo"
                        style={{ position: 'absolute', width: "296.926mm", height: "209.973mm", viewBox: "0 0 3507 2480", zIndex: -1 }}

                      />
                    )}



<svg xmlns="http://www.w3.org/2000/svg" height="209.973mm"  version="1.2" baseProfile="tiny" width="296.926mm" viewBox="0 0 3507 2480">
 <defs/>
 <g stroke-width="1" fill="none" stroke="black" stroke-linecap="square" fill-rule="evenodd" stroke-linejoin="bevel">
  <g font-weight="400" stroke-width="1" font-style="normal" fill="none" stroke="#000000" transform="matrix(1,0,0,1,0,0)" stroke-opacity="1" stroke-linecap="square" font-size="32.5" stroke-linejoin="bevel" font-family="MS Shell Dlg 2"/>
  <g font-weight="400" stroke-width="1" font-style="normal" fill="none" stroke="#000000" transform="matrix(1,0,0,1,0,0)" stroke-opacity="1" stroke-linecap="square" font-size="32.5" stroke-linejoin="bevel" font-family="MS Shell Dlg 2"/>
  <g font-weight="400" stroke-width="1" font-style="normal" fill="none" stroke="#000000" transform="matrix(11.8081,0,0,11.8081,0,0)" stroke-opacity="1" stroke-linecap="square" font-size="32.5" stroke-linejoin="bevel" font-family="MS Shell Dlg 2"/>
  <g font-weight="400" stroke-width="1" font-style="normal" fill="none" stroke="#000000" transform="matrix(0.999751,0,0,0.999751,0,0)" stroke-opacity="1" stroke-linecap="square" font-size="32.5" stroke-linejoin="bevel" font-family="MS Shell Dlg 2"/>
  <g font-weight="400" font-style="normal" fill="#ffffff" stroke="none" transform="matrix(0.999751,0,0,0.999751,0,0)" fill-opacity="1" font-size="32.5" font-family="MS Shell Dlg 2" >

        {[0].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(0)} fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }   d="M-2,-2 L3510,-2 L3510,2483 L-2,2483 L-2,-2" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}
  </g>
  
      
          {[1].map(() => (
            <Tooltip title={'Sin datos'}>
            </Tooltip>
          ))}
        
  <g font-weight="400" stroke-width="1" font-style="normal" fill="none" stroke="#000000" transform="matrix(11.8081,0,0,11.8081,0,0)" stroke-opacity="1" stroke-linecap="square" font-size="32.5" stroke-linejoin="bevel" font-family="MS Shell Dlg 2"/>
  <g font-weight="400" stroke-width="1" font-style="normal" fill="none" stroke="#000000" transform="matrix(11.8081,0,0,11.8081,0,0)" stroke-opacity="1" stroke-linecap="square" font-size="32.5" stroke-linejoin="bevel" font-family="MS Shell Dlg 2"/>
  <g font-weight="400" stroke-width="1" font-style="normal" fill="none" stroke="#000000" transform="matrix(11.8081,0,0,11.8081,0,0)" stroke-opacity="1" stroke-linecap="square" font-size="32.5" stroke-linejoin="bevel" font-family="MS Shell Dlg 2"/>
  <g font-weight="400" stroke-width="1" font-style="normal" fill="none" stroke="#000000" transform="matrix(11.8081,0,0,11.8081,0,0)" stroke-opacity="1" stroke-linecap="square" font-size="32.5" stroke-linejoin="bevel" font-family="MS Shell Dlg 2"/>
  <g font-weight="400" stroke-width="1" font-style="normal" fill="none" stroke="#000000" transform="matrix(11.8081,0,0,11.8081,0,0)" stroke-opacity="1" stroke-linecap="square" font-size="32.5" stroke-linejoin="bevel" font-family="MS Shell Dlg 2"/>
  <g font-weight="400" font-style="normal" fill="#ffffff" stroke="none" transform="matrix(11.8081,0,0,11.8081,0,0)" fill-opacity="1" font-size="32.5" font-family="MS Shell Dlg 2">

        {[1].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1)} fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }   d="M0,0 L298.973,0 L298.973,210 L0,210 L0,0" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}
  </g>

        
          {[2].map(() => (
            <Tooltip title={'Sin datos'}>
            </Tooltip>
          ))}
        
  <g font-weight="400" stroke-width="1" font-style="normal" fill="none" stroke="#000000" transform="matrix(11.8081,0,0,11.8081,0,0)" stroke-opacity="1" stroke-linecap="square" font-size="32.5" stroke-linejoin="bevel" font-family="MS Shell Dlg 2"/>
  <g font-weight="400" font-style="normal" fill="#000000" stroke="none" transform="matrix(0.999751,0,0,0.999751,0,0)" fill-opacity="0" font-size="32.5" font-family="MS Shell Dlg 2">
   <rect height="2480" x="0" y="0" width="3531"/>
  </g>
  <g font-weight="400" stroke-width="1" font-style="normal" fill="none" stroke="#000000" transform="matrix(0.999751,0,0,0.999751,0,0)" stroke-opacity="1" stroke-linecap="square" font-size="32.5" stroke-linejoin="bevel" font-family="MS Shell Dlg 2"/>
  <g font-weight="400" stroke-width="3.07087" font-style="normal" fill="#ccbfdd" stroke="#232323" transform="matrix(0.999751,0,0,0.999751,0,0)" fill-opacity="0.500008" stroke-opacity="0.500008" stroke-linecap="square" font-size="32.5" stroke-linejoin="bevel" font-family="MS Shell Dlg 2">

        {[2].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(2)} fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }   d="M901.257,392.882 L1022.8,405.58 L1022.8,715.792 L903.071,715.792 L901.257,392.882" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[3].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(3)} fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }   d="M1022.2,406.185 L1143.74,418.279 L1141.32,717.606 L1024.01,716.397 L1022.2,406.185" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[4].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(4)} fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }   d="M1143.14,418.884 L1261.05,427.954 L1259.84,718.211 L1141.32,720.025 L1143.14,418.884" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[5].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(5)} fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }   d="M1264.68,429.769 L1378.37,441.258 L1376.55,720.63 L1259.24,718.816 L1264.68,429.769" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[6].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(6)} fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }   d="M1458.19,449.724 L1573.08,459.399 L1570.06,721.839 L1456.98,718.816 L1458.19,449.724" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[7].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(7)} fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }   d="M1572.48,460.004 L1686.16,467.865 L1684.95,720.025 L1570.66,719.421 L1572.48,460.004" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[8].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(8)} fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }   d="M1710.35,469.679 L1800.75,476.331 L1798.03,720.328 L1687.37,719.723 L1687.37,468.318 L1710.35,469.679" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[9].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(9)} fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }   d="M1802.26,476.179 L1918.52,483.436 L1916.85,718.816 L1800.9,719.118 L1802.26,476.179" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[10].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(10)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M903.978,795.764 L1023.1,799.392 L1022.5,1040.06 L905.187,1036.44 L903.978,795.764" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[11].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(11)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M1024.46,800.753 L1141.93,801.358 L1141.78,1005.6 L1128.47,1011.04 L1120.31,1018.29 L1112.9,1032.5 L1111.54,1038.7 L1025.07,1039.31 L1024.46,800.753" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[12].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(12)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M1143.74,801.509 L1376.25,804.079 L1376.55,895.691 L1144.65,894.482 L1143.74,801.509" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[13].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(13)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M1144.04,897.808 L1377.16,898.11 L1375.04,990.327 L1143.14,987.606 L1144.04,897.808" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[14].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(14)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M1144.04,991.234 L1377.46,991.839 L1378.06,1083.15 L1144.04,1082.85 L1145.25,1071.96 L1160.07,1066.52 L1174.28,1052.61 L1174.28,1037.19 L1172.47,1025.1 L1160.98,1013 L1147.97,1006.96 L1144.35,1005.75 L1144.04,991.234" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[15].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(15)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M1142.83,1084.66 L1379.27,1085.27 L1379.27,1176.27 L1143.14,1175.37 L1142.83,1084.66" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[16].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(16)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M1143.44,1178.39 L1378.97,1178.39 L1378.37,1278.16 L1144.35,1277.26 L1143.44,1178.39" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[17].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(17)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M1141.93,1277.56 L1063.32,1276.35 L1063.32,1039.61 L1112,1039.61 L1114.11,1050.19 L1121.37,1058.96 L1126.21,1064.71 L1132.86,1069.85 L1142.53,1071.05 L1141.93,1277.56" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[18].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(18)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M983.194,1039.61 L1062.11,1040.52 L1061.5,1277.26 L984.705,1275.75 L983.194,1039.61" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[19].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(19)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M981.682,1275.75 L905.187,1276.05 L904.582,1038.4 L982.287,1038.7 L981.682,1275.75" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[20].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(20)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M1457.28,803.172 L1685.55,804.683 L1684.35,896.9 L1457.88,895.993 L1457.28,803.172" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[21].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(21)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M1457.88,897.808 L1683.74,897.505 L1682.53,989.42 L1457.58,989.722 L1457.88,897.808" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[22].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(22)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M1457.73,991.839 L1683.59,991.687 L1683.44,1008.01 L1672.25,1011.79 L1665.15,1016.63 L1659.85,1022.38 L1655.32,1031.45 L1655.62,1050.04 L1659.4,1057.6 L1666.96,1066.37 L1674.22,1072.11 L1683.59,1073.02 L1684.04,1082.24 L1458.19,1083.15 L1457.73,991.839" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[23].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(23)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M1457.43,1085.34 L1684.95,1085.34 L1685.55,1176.05 L1458.19,1176.05 L1457.43,1085.34" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[24].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(24)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M1458.19,1180.88 L1685.25,1179.37 L1684.35,1277.94 L1457.88,1275.82 L1458.19,1180.88" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[25].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(25)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M1686.61,1277.48 L1801.05,1277.48 L1800.15,1041.65 L1717,1041.5 L1715.49,1051.63 L1708.08,1062.36 L1699.46,1069.01 L1685.4,1074 L1686.61,1277.48" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[26].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(26)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M1685.55,804.759 L1799.24,803.55 L1798.63,1038.78 L1716.09,1039.69 L1714.28,1029.41 L1707.02,1020.34 L1700.07,1013.38 L1693.72,1009.45 L1684.95,1008.54 L1685.55,804.759" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[27].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(27)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M1801.35,1039.38 L1918.67,1039.08 L1914.74,804.457 L1799.84,803.852 L1801.35,1039.38" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[28].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(28)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M1801.05,1041.5 L1918.52,1041.05 L1918.52,1276.12 L1801.66,1275.82 L1801.05,1041.5" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[29].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(29)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M905.943,1362.22 L983.798,1362.07 L981.417,1610.3 L905.149,1610.49 L905.943,1362.22" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[30].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(30)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M904.885,1613.55 L997.404,1613.85 L996.951,1828.75 L904.28,1828.59 L904.885,1613.55" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[31].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(31)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M984.025,1361.92 L1062.64,1362.22 L1060.52,1611.05 L982.211,1610.75 L984.025,1361.92" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[32].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(32)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M1063.24,1611.05 L1111.31,1611.05 L1112.52,1601.68 L1115.85,1593.21 L1125.83,1585.05 L1131.87,1580.52 L1140.95,1580.21 L1141.85,1363.13 L1064.75,1363.43 L1063.24,1611.05" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[33].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(33)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M1143.67,1362.52 L1377.38,1361.61 L1377.08,1443.55 L1141.55,1443.55 L1143.67,1362.52" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[34].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(34)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M1142.15,1445.36 L1378.59,1442.95 L1377.38,1526.09 L1143.06,1527.6 L1142.15,1445.36" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[35].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(35)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M1142.46,1530.02 L1377.99,1528.51 L1377.08,1609.54 L1172.39,1610.15 L1172.09,1604.1 L1167.85,1594.42 L1162.41,1589.28 L1156.37,1583.54 L1151.53,1581.42 L1141.55,1578.7 L1142.46,1530.02" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[36].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(36)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M998.84,1613.47 L1093.17,1613.47 L1093.17,1827.54 L997.329,1829.35 L998.84,1613.47" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[37].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(37)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M1094.69,1827.23 L1188.72,1826.63 L1187.81,1613.77 L1172.39,1613.47 L1171.48,1620.73 L1167.55,1631.31 L1155.46,1641.59 L1145.48,1643.71 L1130.97,1643.4 L1117.36,1633.73 L1112.22,1620.73 L1110.11,1614.68 L1094.69,1613.77 L1094.69,1827.23" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[38].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(38)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M1189.62,1612.56 L1282.75,1613.17 L1280.63,1826.02 L1190.53,1826.02 L1189.62,1612.56" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[39].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(39)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M1286.68,1824.51 L1377.38,1827.54 L1376.17,1611.96 L1284.56,1612.87 L1286.68,1824.51" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[40].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(40)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M1478.37,1362.22 L1684.57,1363.13 L1684.87,1442.95 L1458.72,1442.64 L1459.62,1361.61 L1478.37,1362.22" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[41].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(41)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M1457.51,1444.16 L1685.18,1444.46 L1685.48,1527.3 L1457.81,1524.88 L1457.51,1444.16" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[42].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(42)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M1458.72,1528.21 L1686.08,1529.12 L1686.08,1609.84 L1458.72,1609.54 L1458.72,1528.21" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[43].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(43)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M1458.41,1611.96 L1540.96,1611.96 L1538.84,1839.63 L1459.02,1836 L1458.41,1611.96" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[44].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(44)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M1541.56,1839.63 L1624.4,1844.77 L1622.89,1611.66 L1541.26,1611.36 L1541.56,1839.63" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[45].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(45)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M1624.4,1612.26 L1706.34,1611.36 L1706.04,1852.33 L1625.61,1845.07 L1624.4,1612.26" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[46].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(46)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M1708.76,1851.42 L1791.91,1855.35 L1790.39,1612.56 L1782.23,1613.77 L1778.91,1624.05 L1768.93,1635.24 L1757.14,1642.2 L1742.02,1642.5 L1725.69,1632.52 L1719.34,1615.29 L1717.53,1611.05 L1708.46,1612.26 L1708.76,1851.42" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[47].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(47)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M1686.69,1609.54 L1717.53,1608.33 L1722.06,1595.33 L1735.06,1582.33 L1745.04,1580.21 L1757.74,1579.91 L1771.35,1588.07 L1779.51,1600.77 L1781.93,1610.45 L1801.28,1608.33 L1800.98,1364.64 L1687.29,1362.82 L1686.69,1609.54" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[48].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(48)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M1804.3,1364.03 L1918.29,1363.13 L1920.41,1609.54 L1803.4,1611.66 L1804.3,1364.03" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[49].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(49)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M1792.96,1856.56 L1876.41,1863.82 L1874.6,1613.17 L1791.45,1612.87 L1792.96,1856.56" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[50].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(50)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M1878.53,1864.42 L1957.75,1868.05 L2017.01,1611.66 L1875.81,1612.26 L1878.53,1864.42" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[51].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(51)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M1923.28,1608.63 L2016.7,1610.15 L2072.64,1362.52 L1921.46,1362.82 L1923.28,1608.63" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[52].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(52)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M1920.25,1277.26 L2094.41,1278.16 L2283.38,503.24 L1919.04,485.703 L1920.25,1277.26" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}

        {[53].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa1 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Lote "+objetoEncontrado.lote : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(53)}fillOpacity={imagenDeFondoActivada ?  0.2:0.8 }    d="M861.12,2086.05 L859.91,2000.18 L1921.77,2037.67 L1896.37,2139.26 L861.12,2086.05" vector-effect="none" fill-rule="evenodd"/>
              
            </Tooltip>)})}
  </g>

        
          {[54].map(() => (
            <Tooltip title={'Sin datos'}>
            </Tooltip>
          ))}
        
  <g font-weight="400" stroke-width="1" font-style="normal" fill="none" stroke="#000000" transform="matrix(11.8081,0,0,11.8081,0,0)" stroke-opacity="1" stroke-linecap="square" font-size="32.5" stroke-linejoin="bevel" font-family="MS Shell Dlg 2"/>
  <g font-weight="400" stroke-width="1" font-style="normal" fill="none" stroke="#000000" transform="matrix(11.8081,0,0,11.8081,0,0)" stroke-opacity="1" stroke-linecap="square" font-size="32.5" stroke-linejoin="bevel" font-family="MS Shell Dlg 2"/>
  <g font-weight="400" stroke-width="1" font-style="normal" fill="none" stroke="#000000" transform="matrix(11.8081,0,0,11.8081,0,0)" stroke-opacity="1" stroke-linecap="square" font-size="32.5" stroke-linejoin="bevel" font-family="MS Shell Dlg 2"/>
  <g font-weight="400" stroke-width="1" font-style="normal" fill="none" stroke="#000000" transform="matrix(1,0,0,1,0,0)" stroke-opacity="1" stroke-linecap="square" font-size="32.5" stroke-linejoin="bevel" font-family="MS Shell Dlg 2"/>
  <g font-weight="400" stroke-width="1" font-style="normal" fill="none" stroke="#000000" transform="matrix(11.8081,0,0,11.8081,0,0)" stroke-opacity="1" stroke-linecap="square" font-size="32.5" stroke-linejoin="bevel" font-family="MS Shell Dlg 2"/>
  <g font-weight="400" stroke-width="1" font-style="normal" fill="none" stroke="#000000" transform="matrix(11.8081,0,0,11.8081,0,0)" stroke-opacity="1" stroke-linecap="square" font-size="32.5" stroke-linejoin="bevel" font-family="MS Shell Dlg 2"/>
  <g font-weight="400" stroke-width="1" font-style="normal" fill="none" stroke="#000000" transform="matrix(11.8081,0,0,11.8081,0,0)" stroke-opacity="1" stroke-linecap="square" font-size="32.5" stroke-linejoin="bevel" font-family="MS Shell Dlg 2"/>
  <g font-weight="400" stroke-width="1" font-style="normal" fill="none" stroke="#000000" transform="matrix(11.8081,0,0,11.8081,0,0)" stroke-opacity="1" stroke-linecap="square" font-size="32.5" stroke-linejoin="bevel" font-family="MS Shell Dlg 2"/>
  <g font-weight="400" stroke-width="1" font-style="normal" fill="none" stroke="#000000" transform="matrix(1,0,0,1,0,0)" stroke-opacity="1" stroke-linecap="square" font-size="32.5" stroke-linejoin="bevel" font-family="MS Shell Dlg 2"/>
 </g>

</svg>





                  </div>
                </> : <></>}




              </TransformComponent>
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
    </>


  )
}

export default Arg;