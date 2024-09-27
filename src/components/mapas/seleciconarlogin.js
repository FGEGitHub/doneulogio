import { useState, useEffect } from "react";


import { useNavigate } from "react-router-dom";
import Bosques from "./bosqueslogin"
import Otro from "./todoslogin"

import * as React from 'react';

import MuiAlert from '@mui/material/Alert';

import NativeSelect from '@mui/material/NativeSelect';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });



const Lotes = () => {
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


<option value={3}>Todos</option>



</NativeSelect>
{ mapa === "1" ? <><Bosques/></>:<>


    <Otro/>


</>}

        </>


    )
}

export default Lotes;

