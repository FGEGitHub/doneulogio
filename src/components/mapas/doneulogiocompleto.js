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

import Gps from "../../Assets/mapadon.jpg"
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
  const positionRef = React.useRef({
    x: 0,
    y: 0,
  });
  const popperRef = React.useRef(null);
  const areaRef = React.useRef(null);

  const handleMouseMove = (event) => {
    positionRef.current = { x: event.clientX, y: event.clientY };

    if (popperRef.current != null) {
      popperRef.current.update();
    }
  };
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




<svg baseProfile="tiny" viewBox="0 0 2587 2480"  width= "296.926mm" height= "209.973mm" version="1.2">
 <defs/>
 <g stroke="black" stroke-linejoin="bevel" stroke-width="1" fill-rule="evenodd" stroke-linecap="square" fill="none">
  <g stroke="#000000" font-style="normal" stroke-opacity="1" stroke-linejoin="bevel" font-size="32.5" stroke-width="1" font-weight="400" stroke-linecap="square" font-family="MS Shell Dlg 2" transform="matrix(1,0,0,1,0,0)" fill="none"/>
  <g stroke="#000000" font-style="normal" stroke-opacity="1" stroke-linejoin="bevel" font-size="32.5" stroke-width="1" font-weight="400" stroke-linecap="square" font-family="MS Shell Dlg 2" transform="matrix(1,0,0,1,0,0)" fill="none"/>
  <g stroke="#000000" font-style="normal" stroke-opacity="1" stroke-linejoin="bevel" font-size="32.5" stroke-width="1" font-weight="400" stroke-linecap="square" font-family="MS Shell Dlg 2" transform="matrix(11.808,0,0,11.808,0,0)" fill="none"/>
  <g stroke="#000000" font-style="normal" stroke-opacity="1" stroke-linejoin="bevel" font-size="32.5" stroke-width="1" font-weight="400" stroke-linecap="square" font-family="MS Shell Dlg 2" transform="matrix(0.999747,0,0,0.999747,0,0)" fill="none"/>
  <g fill-opacity="1" stroke="none" font-style="normal" font-size="32.5" font-weight="400" font-family="MS Shell Dlg 2" transform="matrix(0.999747,0,0,0.999747,0,0)" fill="#ffffff">
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M-2,-2 L2590,-2 L2590,2483 L-2,2483 L-2,-2"/>
  </g>
  <g stroke="#000000" font-style="normal" stroke-opacity="1" stroke-linejoin="bevel" font-size="32.5" stroke-width="1" font-weight="400" stroke-linecap="square" font-family="MS Shell Dlg 2" transform="matrix(0.999747,0,0,0.999747,0,0)" fill="none"/>
  <g stroke="#000000" font-style="normal" stroke-opacity="1" stroke-linejoin="bevel" font-size="32.5" stroke-width="1" font-weight="400" stroke-linecap="square" font-family="MS Shell Dlg 2" transform="matrix(11.808,0,0,11.808,0,0)" fill="none"/>
  <g stroke="#000000" font-style="normal" stroke-opacity="1" stroke-linejoin="bevel" font-size="32.5" stroke-width="1" font-weight="400" stroke-linecap="square" font-family="MS Shell Dlg 2" transform="matrix(11.808,0,0,11.808,0,0)" fill="none"/>
  <g stroke="#000000" font-style="normal" stroke-opacity="1" stroke-linejoin="bevel" font-size="32.5" stroke-width="1" font-weight="400" stroke-linecap="square" font-family="MS Shell Dlg 2" transform="matrix(11.808,0,0,11.808,0,0)" fill="none"/>
  <g stroke="#000000" font-style="normal" stroke-opacity="1" stroke-linejoin="bevel" font-size="32.5" stroke-width="1" font-weight="400" stroke-linecap="square" font-family="MS Shell Dlg 2" transform="matrix(11.808,0,0,11.808,0,0)" fill="none"/>
  <g stroke="#000000" font-style="normal" stroke-opacity="1" stroke-linejoin="bevel" font-size="32.5" stroke-width="1" font-weight="400" stroke-linecap="square" font-family="MS Shell Dlg 2" transform="matrix(11.808,0,0,11.808,-325.736,-202.485)" fill="none"/>
  <g fill-opacity="1" stroke="none" font-style="normal" font-size="32.5" font-weight="400" font-family="MS Shell Dlg 2" transform="matrix(11.808,0,0,11.808,-325.736,-202.485)" fill="#ffffff">
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M0,0 L364.101,0 L364.101,244.296 L0,244.296 L0,0"/>
  </g>
  <g stroke="#000000" font-style="normal" stroke-opacity="1" stroke-linejoin="bevel" font-size="32.5" stroke-width="1" font-weight="400" stroke-linecap="square" font-family="MS Shell Dlg 2" transform="matrix(11.808,0,0,11.808,-325.736,-202.485)" fill="none"/>
  <g stroke="#000000" font-style="normal" stroke-opacity="1" stroke-linejoin="bevel" font-size="32.5" stroke-width="1" font-weight="400" stroke-linecap="square" font-family="MS Shell Dlg 2" transform="matrix(11.808,0,0,11.808,-325.736,-202.485)" fill="none"/>
  <g fill-opacity="0" stroke="none" font-style="normal" font-size="32.5" font-weight="400" font-family="MS Shell Dlg 2" transform="matrix(0.999747,0,0,0.999747,-325.736,-202.485)" fill="#000000">
   <rect width="4300" x="0" height="2885" y="0"/>
  </g>
  <g stroke="#000000" font-style="normal" stroke-opacity="1" stroke-linejoin="bevel" font-size="32.5" stroke-width="1" font-weight="400" stroke-linecap="square" font-family="MS Shell Dlg 2" transform="matrix(0.999747,0,0,0.999747,-325.736,-202.485)" fill="none"/>
  <g fill-opacity="1" stroke="#232323" font-style="normal" stroke-opacity="1" stroke-linejoin="bevel" font-size="32.5" stroke-width="3.07087" font-weight="400" stroke-linecap="square" font-family="MS Shell Dlg 2" transform="matrix(0.999747,0,0,0.999747,-325.736,-202.485)" fill="#e77148">
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1194.85,826.499 L1217.58,827.825 L1217.21,884.86 L1195.04,883.723 L1194.85,826.499"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1218.53,828.015 L1240.7,830.478 L1240.32,884.102 L1218.34,884.481 L1218.53,828.015"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1241.37,830.667 L1264.1,832.278 L1262.68,884.765 L1240.89,883.818 L1241.37,830.667"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1264.2,832.373 L1286.27,833.604 L1285.61,885.618 L1263.06,884.292 L1264.2,832.373"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1302.28,835.594 L1323.79,837.868 L1323.22,886.092 L1301.15,885.902 L1302.28,835.594"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1324.17,838.152 L1346.81,839.573 L1346.25,886.66 L1324.27,885.997 L1324.17,838.152"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1347.19,839.857 L1368.89,841.847 L1367.75,885.997 L1346.06,886.66 L1347.19,839.857"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1369.65,842.226 L1391.91,843.837 L1390.77,886.944 L1368.04,886.471 L1369.65,842.226"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1194.66,899.877 L1217.3,900.351 L1216.35,943.743 L1194.18,943.174 L1194.66,899.877"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1217.87,900.351 L1239.66,900.256 L1239.38,943.837 L1217.3,943.837 L1217.87,900.351"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1240.13,900.445 L1285.89,900.919 L1285.8,917.688 L1239.66,916.646 L1240.13,900.445"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1239.93,916.893 L1285.8,918.257 L1285.52,935.405 L1240.04,934.458 L1239.93,916.893"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1240.04,935.5 L1285.42,935.974 L1284.66,952.269 L1239.75,951.2 L1240.04,935.5"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1240.16,951.552 L1284.55,952.901 L1284.55,969.556 L1239.75,969.439 L1240.16,951.552"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1239.75,969.908 L1284.55,969.908 L1284.91,988.674 L1239.52,987.619 L1239.75,969.908"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1224.39,944.456 L1238.81,944.515 L1239.05,988.088 L1224.85,988.088 L1224.39,944.456"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1209.02,944.163 L1223.68,944.573 L1224.03,988.088 L1208.79,987.971 L1209.02,944.163"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1194.01,943.987 L1208.73,944.222 L1208.43,987.736 L1193.07,986.915 L1194.01,943.987"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1301.12,900.502 L1345.57,901.323 L1345.34,918.447 L1301.71,917.626 L1301.12,900.502"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1301.47,918.33 L1345.34,918.799 L1345.11,936.041 L1301.24,935.923 L1301.47,918.33"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1301,936.627 L1345.46,936.627 L1345.46,953.048 L1300.89,952.696 L1301,936.627"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1346.4,901.558 L1368.21,902.144 L1367.86,945.658 L1345.93,945.424 L1346.4,901.558"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1368.8,902.144 L1391.08,901.909 L1390.38,946.01 L1368.33,945.541 L1368.8,902.144"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1368.68,946.479 L1368.33,946.128 L1367.51,989.759 L1390.03,989.877 L1390.61,946.362 L1368.68,946.479"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1345.69,946.245 L1367.98,946.128 L1367.39,989.525 L1344.99,989.994 L1345.69,946.245"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1301,953.282 L1345.46,953.048 L1344.99,970.641 L1300.89,970.406 L1301,953.282"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1300.42,971.11 L1344.99,970.758 L1344.99,989.994 L1300.42,988.704 L1300.42,971.11"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1193.57,1003.01 L1207.88,1003.13 L1208.11,1048.4 L1193.33,1048.4 L1193.57,1003.01"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1208.58,1003.48 L1208.58,1003.48 L1223.71,1003.83 L1208.58,1003.48"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1208.58,1003.72 L1223.12,1003.95 L1223.24,1049.22 L1208.11,1048.87 L1208.58,1003.72"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1223.71,1004.07 L1239.08,1003.72 L1238.14,1049.46 L1224.06,1048.76 L1223.71,1004.07"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1239.9,1003.95 L1284.58,1004.42 L1284.58,1019.43 L1239.54,1018.5 L1239.9,1003.95"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1239.78,1018.85 L1284.58,1020.02 L1284.47,1034.09 L1239.08,1033.86 L1239.78,1018.85"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1238.96,1034.8 L1284.11,1034.68 L1283.76,1049.58 L1238.72,1048.99 L1238.96,1034.8"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1193.1,1049.58 L1210.57,1049.22 L1210.46,1087.7 L1191.69,1087.81 L1193.1,1049.58"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1211.04,1049.34 L1229.22,1049.34 L1228.28,1088.52 L1210.34,1087.93 L1211.04,1049.34"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1229.46,1049.93 L1246.93,1050.05 L1246.35,1088.28 L1228.64,1088.05 L1229.46,1049.93"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1247.64,1050.28 L1265.82,1050.05 L1265.47,1088.87 L1247.17,1087.7 L1247.64,1050.28"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1265.93,1050.28 L1284.23,1050.52 L1283.65,1089.22 L1266.29,1088.75 L1265.93,1050.28"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1299.83,1004.3 L1344.4,1004.77 L1344.28,1019.2 L1299.95,1018.73 L1299.83,1004.3"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1299.95,1019.79 L1344.17,1019.9 L1344.17,1035.27 L1299.71,1034.45 L1299.95,1019.79"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1299.36,1035.38 L1344.52,1035.62 L1344.52,1049.69 L1299.6,1049.58 L1299.36,1035.38"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1344.99,1005.24 L1367.51,1005.36 L1366.69,1050.63 L1344.99,1049.93 L1344.99,1005.24"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1368.09,1005.48 L1390.26,1005.71 L1389.56,1051.22 L1367.27,1050.4 L1368.09,1005.48"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1390.61,1005.48 L1417.12,1006.18 L1404.92,1051.69 L1389.68,1051.34 L1390.61,1005.48"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1380.53,1051.81 L1404.69,1051.92 L1393.31,1096.96 L1380.06,1096.26 L1380.53,1051.81"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1380.29,1052.04 L1379.35,1095.55 L1364.46,1094.62 L1364.58,1051.45 L1380.29,1052.04"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1363.64,1051.45 L1363.99,1094.03 L1347.92,1092.74 L1348.27,1051.1 L1363.64,1051.45"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1347.45,1051.22 L1347.33,1092.39 L1331.5,1091.8 L1331.5,1050.87 L1347.45,1051.22"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1330.91,1051.1 L1331.03,1091.45 L1315.31,1090.63 L1315.9,1050.28 L1330.91,1051.1"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1314.84,1050.4 L1314.61,1089.92 L1298.89,1089.22 L1298.89,1050.28 L1314.84,1050.4"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1191.1,1122.3 L1281.18,1123 L1279.54,1248.27 L1189.46,1247.09 L1191.1,1122.3"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1301.12,1124.41 L1383.69,1131.44 L1374.78,1166.4 L1374.08,1248.73 L1299.48,1249.67 L1301.12,1124.41"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1190.05,1262.46 L1211.28,1262.22 L1210.81,1292.37 L1190.4,1291.9 L1190.05,1262.46"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1212.22,1262.34 L1233.21,1262.69 L1232.39,1292.37 L1211.28,1292.13 L1212.22,1262.34"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1233.91,1262.81 L1279.07,1263.16 L1279.19,1278.29 L1233.56,1277 L1233.91,1262.81"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1233.45,1277.7 L1278.02,1278.76 L1278.48,1293.42 L1233.68,1292.72 L1233.45,1277.7"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1233.45,1293.42 L1278.37,1293.66 L1278.02,1308.43 L1233.21,1307.5 L1233.45,1293.42"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1189.7,1293.19 L1232.62,1293.19 L1232.27,1308.43 L1189.7,1307.03 L1189.7,1293.19"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1189.11,1307.73 L1232.74,1308.2 L1232.74,1323.68 L1189.58,1322.98 L1189.11,1307.73"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1233.21,1308.67 L1278.25,1308.79 L1278.13,1323.68 L1232.39,1323.45 L1233.21,1308.67"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1189.11,1323.45 L1232.39,1323.92 L1232.27,1339.28 L1189.34,1338.58 L1189.11,1323.45"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1232.62,1324.03 L1278.02,1324.03 L1278.6,1339.87 L1232.62,1338.58 L1232.62,1324.03"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1189.11,1339.16 L1232.04,1338.93 L1231.92,1353.83 L1189.7,1353.36 L1189.11,1339.16"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1232.86,1339.16 L1278.02,1339.87 L1277.78,1354.53 L1232.51,1353.47 L1232.86,1339.16"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1189.34,1353.83 L1209.87,1354.18 L1209.75,1383.97 L1188.64,1383.38 L1189.34,1353.83"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1210.11,1354.29 L1231.57,1354.65 L1231.1,1384.44 L1209.99,1383.85 L1210.11,1354.29"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1232.51,1354.29 L1277.66,1354.76 L1277.55,1369.89 L1231.8,1369.19 L1232.51,1354.29"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1231.92,1370.01 L1277.55,1370.25 L1277.55,1385.02 L1231.57,1384.32 L1231.92,1370.01"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1298.78,1263.28 L1344.87,1263.63 L1344.4,1278.53 L1298.42,1278.29 L1298.78,1263.28"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1298.42,1278.82 L1344.75,1279.29 L1344.28,1294.65 L1298.66,1293.71 L1298.42,1278.82"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1298.19,1294.3 L1344.64,1295.24 L1344.4,1310.02 L1298.07,1308.61 L1298.19,1294.3"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1298.07,1309.2 L1344.05,1309.9 L1344.05,1324.44 L1298.42,1324.21 L1298.07,1309.2"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1298.19,1324.68 L1344.17,1325.15 L1343.81,1340.63 L1298.19,1339.46 L1298.19,1324.68"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1297.95,1340.04 L1343.7,1341.1 L1343.23,1355.17 L1297.84,1354.94 L1297.95,1340.04"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1298.07,1355.53 L1343.58,1355.06 L1343.58,1370.66 L1298.31,1369.95 L1298.07,1355.53"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1298.31,1370.66 L1343.46,1370.42 L1343.58,1385.08 L1297.6,1385.32 L1298.31,1370.66"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1361.76,1264.39 L1377.24,1264.39 L1376.66,1309.55 L1362.23,1309.67 L1361.76,1264.39"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1377.71,1264.51 L1392.37,1264.39 L1391.79,1309.55 L1377.36,1309.55 L1377.71,1264.51"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1393.08,1264.86 L1407.74,1264.98 L1407.03,1310.14 L1392.26,1310.02 L1393.08,1264.86"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1361.99,1310.6 L1407.27,1310.96 L1406.68,1325.62 L1361.64,1324.91 L1361.99,1310.6"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1361.64,1325.73 L1406.68,1326.2 L1406.68,1341.33 L1361.64,1340.4 L1361.64,1325.73"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1360.7,1341.33 L1376.07,1341.22 L1376.3,1386.14 L1360.12,1386.37 L1360.7,1341.33"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1376.89,1341.33 L1391.32,1340.98 L1390.97,1386.84 L1376.77,1386.84 L1376.89,1341.33"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1391.43,1341.45 L1406.8,1341.22 L1406.33,1387.43 L1391.55,1386.37 L1391.43,1341.45"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1188.05,1399.28 L1209.75,1399.51 L1209.17,1429.77 L1188.29,1429.54 L1188.05,1399.28"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1210.57,1399.86 L1230.51,1399.86 L1230.75,1430.01 L1209.17,1430.36 L1210.57,1399.86"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1231.45,1400.45 L1277.19,1400.33 L1276.37,1415.46 L1231.8,1414.99 L1231.45,1400.45"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1231.33,1415.7 L1275.9,1415.93 L1276.14,1430.94 L1231.69,1430.24 L1231.33,1415.7"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1188.05,1430.36 L1230.75,1430.94 L1230.28,1445.14 L1187.82,1444.08 L1188.05,1430.36"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1231.33,1431.3 L1276.02,1431.41 L1276.26,1445.84 L1231.22,1445.02 L1231.33,1431.3"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1187.12,1445.6 L1230.04,1445.49 L1229.93,1460.85 L1187.59,1460.03 L1187.12,1445.6"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1230.75,1445.6 L1276.37,1446.19 L1275.9,1461.44 L1230.63,1460.85 L1230.75,1445.6"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1187.23,1460.85 L1230.04,1461.56 L1229.58,1476.22 L1186.65,1474.93 L1187.23,1460.85"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1230.51,1461.67 L1276.14,1461.32 L1275.67,1477.04 L1230.4,1476.22 L1230.51,1461.67"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1187.47,1476.33 L1229.69,1476.92 L1229.81,1491.23 L1187.59,1490.06 L1187.47,1476.33"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1230.63,1476.92 L1275.9,1477.51 L1275.32,1491.93 L1230.63,1491.11 L1230.63,1476.92"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1187,1491.46 L1208.23,1491.23 L1208.7,1521.37 L1186.53,1521.37 L1187,1491.46"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1208.35,1491.93 L1229.69,1491.58 L1229.46,1522.19 L1208.58,1521.26 L1208.35,1491.93"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1230.4,1491.7 L1275.2,1492.05 L1274.97,1507.42 L1230.16,1506.83 L1230.4,1491.7"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1230.28,1507.42 L1274.73,1507.89 L1275.2,1523.13 L1229.46,1521.49 L1230.28,1507.42"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1297.02,1401.15 L1342.88,1400.8 L1342.88,1416.16 L1296.9,1416.05 L1297.02,1401.15"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1297.37,1416.4 L1342.88,1416.4 L1341.82,1431.76 L1296.9,1430.83 L1297.37,1416.4"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1297.02,1431.88 L1341.94,1432.35 L1342.41,1446.78 L1296.43,1447.25 L1297.02,1431.88"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1296.2,1447.25 L1342.17,1447.13 L1342.29,1462.03 L1296.9,1461.56 L1296.2,1447.25"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1297.02,1462.49 L1341.82,1462.96 L1342.29,1477.74 L1296.78,1477.04 L1297.02,1462.49"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1296.78,1477.62 L1342.17,1478.21 L1341.59,1492.99 L1296.66,1491.93 L1296.78,1477.62"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1296.55,1492.52 L1341.23,1493.46 L1341.59,1508 L1296.2,1507.89 L1296.55,1492.52"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1296.08,1508.94 L1341.23,1508.71 L1341.12,1522.9 L1296.08,1522.31 L1296.08,1508.94"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1360.47,1401.62 L1375.6,1401.39 L1374.66,1446.89 L1359.88,1447.01 L1360.47,1401.62"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1376.19,1401.74 L1390.73,1401.97 L1390.5,1447.36 L1375.25,1447.01 L1376.19,1401.74"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1391.08,1402.44 L1405.86,1402.32 L1405.39,1447.48 L1391.08,1447.25 L1391.08,1402.44"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1360,1447.83 L1405.86,1447.83 L1405.86,1462.73 L1359.77,1462.61 L1360,1447.83"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1359.77,1463.43 L1405.51,1463.67 L1404.69,1478.56 L1359.88,1477.27 L1359.77,1463.43"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1359.18,1478.33 L1374.31,1478.45 L1374.19,1523.37 L1359.3,1523.13 L1359.18,1478.33"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1374.66,1478.33 L1389.44,1478.45 L1388.97,1523.48 L1374.43,1523.37 L1374.66,1478.33"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1390.03,1478.91 L1405.39,1479.38 L1404.22,1524.07 L1389.44,1523.84 L1390.03,1478.91"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1186.18,1541.9 L1207.76,1542.37 L1207.17,1584.36 L1185.83,1584.12 L1186.18,1541.9"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1208.23,1542.6 L1228.75,1542.37 L1228.52,1584.48 L1208.35,1584.59 L1208.23,1542.6"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1229.22,1542.72 L1274.85,1543.07 L1274.61,1564.18 L1228.87,1563.13 L1229.22,1542.72"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1229.34,1564.3 L1274.38,1564.3 L1274.85,1585.65 L1229.34,1584.83 L1229.34,1564.3"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1185.83,1585.18 L1228.99,1585.18 L1228.4,1605.94 L1185.83,1605.82 L1185.83,1585.18"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1229.34,1585.41 L1274.15,1586 L1274.15,1606.99 L1228.87,1605.82 L1229.34,1585.41"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1185.71,1606.76 L1228.05,1606.41 L1228.52,1627.52 L1185.47,1627.4 L1185.71,1606.76"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1228.64,1606.88 L1274.03,1607.35 L1274.03,1628.93 L1228.99,1627.4 L1228.64,1606.88"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1185.36,1627.87 L1228.17,1628.11 L1227.82,1650.86 L1185.36,1650.39 L1185.36,1627.87"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1228.75,1628.34 L1273.79,1629.28 L1273.91,1651.68 L1228.05,1651.1 L1228.75,1628.34"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1184.89,1651.21 L1228.05,1651.33 L1227.46,1674.2 L1183.95,1673.73 L1184.89,1651.21"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1228.52,1651.92 L1273.21,1652.15 L1272.97,1675.37 L1227.58,1674.55 L1228.52,1651.92"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1295.26,1542.95 L1341.12,1544.36 L1341.12,1565.12 L1295.49,1564.42 L1295.26,1542.95"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1341.59,1544.48 L1361.29,1544.36 L1360.53,1586.76 L1341.18,1586.53 L1341.59,1544.48"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1361.53,1544.71 L1382.17,1544.71 L1381,1586.82 L1360.82,1586.59 L1361.53,1544.71"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1382.4,1544.95 L1404.22,1544.71 L1403.87,1586.7 L1381.11,1586.76 L1382.4,1544.95"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1295.61,1565.01 L1340.41,1565.59 L1340.82,1586.53 L1295.37,1585.53 L1295.61,1565.01"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1295.14,1586.35 L1350.68,1586.7 L1350.62,1607.46 L1294.91,1607.35 L1295.14,1586.35"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1351.26,1587.23 L1404.22,1587.41 L1403.4,1608.28 L1351.09,1607.58 L1351.26,1587.23"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1294.67,1607.82 L1350.74,1608.17 L1350.15,1629.05 L1294.55,1629.05 L1294.67,1607.82"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1351.2,1608.28 L1403.19,1608.61 L1402.81,1629.98 L1350.38,1628.93 L1351.2,1608.28"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1294.44,1629.87 L1349.68,1629.4 L1349.68,1652.15 L1295.26,1652.39 L1294.44,1629.87"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1349.91,1629.63 L1403.05,1630.22 L1402.93,1653.09 L1350.27,1652.74 L1349.91,1629.63"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1295.14,1652.97 L1349.44,1653.68 L1349.68,1675.61 L1294.2,1675.02 L1295.14,1652.97"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1350.15,1653.91 L1402.81,1653.91 L1402.93,1676.31 L1350.03,1675.49 L1350.15,1653.91"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1180,1680.73 L1179.12,1700.52 L1469.74,1781.12 L1469.08,1680.62 L1413.66,1679.41 L1413.66,1684.02 L1294.47,1684.02 L1293.59,1693.7 L1273.57,1690.07 L1273.35,1682.05 L1180,1680.73"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1391.12,897.599 L1411.13,898.149 L1411.35,960.386 L1416.08,960.496 L1416.19,897.709 L1435.21,897.599 L1435.43,892.981 L1416.19,892.761 L1416.3,878.356 L1419.71,877.587 L1422.79,875.058 L1423.89,873.078 L1425.87,869.56 L1425.98,862.742 L1423.89,859.663 L1422.24,857.354 L1420.81,855.815 L1417.62,854.385 L1415.97,853.726 L1410.25,853.396 L1407.5,854.825 L1406.73,855.705 L1404.97,857.794 L1403.65,859.004 L1401.24,861.313 L1401.02,862.742 L1400.8,870.329 L1402.99,873.738 L1404.09,875.387 L1405.19,876.597 L1408.82,878.686 L1412.01,878.796 L1411.9,892.761 L1390.9,893.311 L1391.34,847.788 L1457.75,854.385 L1420.59,990.624 L1390.35,989.415 L1391.12,897.599"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1473.37,1677.32 L1471.17,1785.08 L2300.48,2012.03 L2301.14,1206.69 L2228.13,1196.14 L1966.42,1176.12 L1964,1190.42 L1937.17,1260.57 L1424.44,1176.45 L1424.38,1264.53 L1417.89,1676.44 L1473.37,1677.32"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M2022.83,794.348 L2156.49,874.563 L2239.73,1014.76 L2295.59,1176.62 L2278.87,1178.82 L2181.67,1161.67 L1970.77,1145.17 L2022.83,794.348"/>
   <path   fillOpacity={imagenDeFondoActivada ?  0.1:1 } vector-effect="none" fill-rule="evenodd" d="M1378.09,1169.14 L1423.61,1176.84 L1423.61,1248.97 L1376.33,1248.09 L1378.09,1169.14"/>
  </g>
  <g stroke="#000000" font-style="normal" stroke-opacity="1" stroke-linejoin="bevel" font-size="32.5" stroke-width="1" font-weight="400" stroke-linecap="square" font-family="MS Shell Dlg 2" transform="matrix(0.999747,0,0,0.999747,-325.736,-202.485)" fill="none"/>
  <g stroke="#000000" font-style="normal" stroke-opacity="1" stroke-linejoin="bevel" font-size="32.5" stroke-width="1" font-weight="400" stroke-linecap="square" font-family="MS Shell Dlg 2" transform="matrix(11.808,0,0,11.808,-325.736,-202.485)" fill="none"/>
  <g stroke="#000000" font-style="normal" stroke-opacity="1" stroke-linejoin="bevel" font-size="32.5" stroke-width="1" font-weight="400" stroke-linecap="square" font-family="MS Shell Dlg 2" transform="matrix(11.808,0,0,11.808,-325.736,-202.485)" fill="none"/>
  <g stroke="#000000" font-style="normal" stroke-opacity="1" stroke-linejoin="bevel" font-size="32.5" stroke-width="1" font-weight="400" stroke-linecap="square" font-family="MS Shell Dlg 2" transform="matrix(11.808,0,0,11.808,-325.736,-202.485)" fill="none"/>
  <g stroke="#000000" font-style="normal" stroke-opacity="1" stroke-linejoin="bevel" font-size="32.5" stroke-width="1" font-weight="400" stroke-linecap="square" font-family="MS Shell Dlg 2" transform="matrix(1,0,0,1,0,0)" fill="none"/>
  <g stroke="#000000" font-style="normal" stroke-opacity="1" stroke-linejoin="bevel" font-size="32.5" stroke-width="1" font-weight="400" stroke-linecap="square" font-family="MS Shell Dlg 2" transform="matrix(11.808,0,0,11.808,-325.736,-202.485)" fill="none"/>
  <g stroke="#000000" font-style="normal" stroke-opacity="1" stroke-linejoin="bevel" font-size="32.5" stroke-width="1" font-weight="400" stroke-linecap="square" font-family="MS Shell Dlg 2" transform="matrix(11.808,0,0,11.808,-325.736,-202.485)" fill="none"/>
  <g stroke="#000000" font-style="normal" stroke-opacity="1" stroke-linejoin="bevel" font-size="32.5" stroke-width="1" font-weight="400" stroke-linecap="square" font-family="MS Shell Dlg 2" transform="matrix(11.808,0,0,11.808,-325.736,-202.485)" fill="none"/>
  <g stroke="#000000" font-style="normal" stroke-opacity="1" stroke-linejoin="bevel" font-size="32.5" stroke-width="1" font-weight="400" stroke-linecap="square" font-family="MS Shell Dlg 2" transform="matrix(11.808,0,0,11.808,-325.736,-202.485)" fill="none"/>
  <g stroke="#000000" font-style="normal" stroke-opacity="1" stroke-linejoin="bevel" font-size="32.5" stroke-width="1" font-weight="400" stroke-linecap="square" font-family="MS Shell Dlg 2" transform="matrix(1,0,0,1,0,0)" fill="none"/>
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