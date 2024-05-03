import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import servicioDtc from '../../services/datos'
import NativeSelect from '@mui/material/NativeSelect';
import Tooltip from '@mui/material/Tooltip';
import { Paper, CircularProgress, Typography, Card, CardActions } from '@mui/material';
import React, { useEffect, useState, Fragment } from "react";
import DialogActions from '@mui/material/DialogActions';
import InputLabel from '@mui/material/InputLabel';
import styled from 'styled-components';
import servicioDatos from '../../services/datos'


const StyledParagraph = styled.p`
  font-family: 'Montserrat', sans-serif;
`;

export default function SelectTextFields(props) {
  const [open, setOpen] = React.useState(false);
  //const usuario  = useUser().userContext
  const [form, setForm] = useState({
   
    id:props.id,
  })
  const [datos, setDatos] = useState()
  const [activo, setActivo] = useState(false)



  const traer = async () => {
  
    const historial = await servicioDatos.traerlotes()


    setDatos(historial)
    // 

};



  const handleChange = (e) => {
    console.log(form)
    setForm({ ...form, [e.target.name]: e.target.value })
  }


  const handleClickOpen = () => {

    setOpen(true);
    traer()

  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeterminar = async (event) => {

    try {
      event.preventDefault();

      const nov = await servicioDtc.asignarventa(form)
      alert(nov)
    } catch (error) {
      console.error(error);
      console.log('Error algo sucedio')
props.traer()

    }
   setForm({ fecha_nacimiento:"Sin determinar",
    observaciones:"Sin determinar",
  
    dato_escolar:"Sin determinar",
    hora_merienda:"Sin determinar"})
    props.traer()

    setOpen(false);
  };

  const [currency, setCurrency] = React.useState('EUR');

  /*   const handleChange = (event) => {
      setCurrency(event.target.value);
    }; */


  return (




    <Box

      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      < Tooltip title="Venta">
        <Button variant="contained" onClick={handleClickOpen}> asignar  </Button>

      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>

        
            <h3>
              <b> Seleccionar lote</b></h3>

        
<InputLabel variant="outlined" htmlFor="uncontrolled-native">
                                <Typography variant="p" component="div" color="black">
                                    <StyledParagraph>
                                        ¿Tipo de atencion?
                                    </StyledParagraph>
                                </Typography>
                            </InputLabel>
                            <NativeSelect
                                defaultValue={30}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'id_lote',
                                    id: 'uncontrolled-native',
                                }}
                                sx={'width:250px'}
                            >
                                {datos ? <>
                                {datos.map((row) => (
                                       
                                       <option value={row.id}>Manzana {row.manzana} lote {row.lote} </option>

                             ))}
</>:<></>}
                            </NativeSelect>
      

          
            <DialogActions>


              <>
              <Button variant="contained" color="primary" onClick={handleDeterminar}> asignar </Button>
             </>
              <Button variant="outlined" color="error" style={{ marginLeft: "auto" }} onClick={handleClose}>Cancelar</Button>
            </DialogActions>


        </DialogContent>
      </Dialog>
    </Box >


  );
}