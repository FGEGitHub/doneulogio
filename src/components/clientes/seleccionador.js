import { useState, useEffect } from "react";


import { useNavigate } from "react-router-dom";
import Clientes from "./tabla"
import Lotes from "../lotes/tabla"

import * as React from 'react';
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import NativeSelect from '@mui/material/NativeSelect';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });



const Seleccion = () => {
    //configuracion de Hooks
    const [mapa, setMapa] = useState();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

  
 
    const handleChange = (e) => {
        console.log( e.target.value)
        setMapa(e.target.value)


    }
    return (
        <>
            <NativeSelect
defaultValue={30}
onChange={handleChange}
inputProps={{
    name: 'anio',
    id: 'uncontrolled-native',

}}

> <option value={''}>Elegir</option>
<option value={0}>Todo</option>
<option value={1}>Clientes</option>
<option value={2}>Lotes</option>
<option value={3}>Ventas</option>



</NativeSelect>
{ mapa === "1" ? <><Clientes/></>:<>


{ mapa === "2" ? <><Lotes/></>:<>
<br/><br/><br/><br/>
{ mapa === "3" ? <><Clientes/></>:<>
<br/><br/><br/><br/>
Sin seleccion



</>}



</>}



</>}

        </>


    )
}

export default Seleccion;