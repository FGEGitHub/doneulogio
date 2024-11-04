import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import servicioDatos from '../../services/datos'
import NativeSelect from '@mui/material/NativeSelect';
import Tooltip from '@mui/material/Tooltip';
import { Paper, CircularProgress, Typography, Card, CardActions } from '@mui/material';
import React, { useEffect, useState, Fragment } from "react";
import DialogActions from '@mui/material/DialogActions';
import InputLabel from '@mui/material/InputLabel';
import styled from 'styled-components';


const StyledParagraph = styled.p`
  font-family: 'Montserrat', sans-serif;
`;

export default function SelectTextFields(props) {
    const [open, setOpen] = React.useState(false);
    //const usuario  = useUser().userContext
    const [form, setForm] = useState({
        id: props.id,
     
        fecha_nac: props.fecha_nac,
        observaciones: props.observaciones,
       
        nombre: props.nombre,
      
        dni: props.dni,
        correo: props.correo,

        telefono: props.telefono,
        provincia: props.provincia,
        sexo: props.sexo,
        estado_civil: props.estado_civil,
 
       
    })
    const [datos, setDatos] = useState()
    const [activo, setActivo] = useState(false)







    const handleChange = (e) => {
        console.log(form)
        setForm({ ...form, [e.target.name]: e.target.value })
    }


    const handleClickOpen = () => {

        setOpen(true);


    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDeterminar = async (event) => {

        try {
            event.preventDefault();

            const nov = await servicioDatos.modificarcliente(form)
alert(nov)
        } catch (error) {
            console.error(error);
            console.log('Error algo sucedio')


        }

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
            < Tooltip title="Nueva Clase">
                <Button variant="outlined" onClick={handleClickOpen}> Modificar  </Button>

            </Tooltip>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>


                    <h3>
                        <b> Modificar a {props.nombre}</b></h3>
       
                        <TextField
               defaultValue={props.nombre}
              margin="dense"
              id="name"
              label="Nombre"
              name="nombre"
              onChange={handleChange}
              fullWidth
              variant="standard"
            />

<TextField
               defaultValue={props.dni}
              margin="dense"
              id="name"
              
              label="Dni"
              name="dni"
              onChange={handleChange}
              fullWidth
              variant="standard"
            />
       
          
            <br/>
            <TextField
       defaultValue={props.fecha_nac}
              onChange={handleChange}
              name="fecha_nac"
              id="date"
              label="Fecha de nacimiento"
              type="date"
            
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
             

                            
                    <InputLabel variant="outlined" htmlFor="uncontrolled-native">
                                <Typography variant="p" component="div" color="black">
                                    
                                       Estado civil
                               
                                </Typography>
                            </InputLabel>
                            <br/>
                            <NativeSelect
                               defaultValue={props.estado_civil}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'estado_civil',
                                    id: 'uncontrolled-native',
                                }}
                                sx={'width:250px'}
                            >
                          
                                <option value={'Sin determinar'}>
                                       Sin determinar
                                 
                                </option>
                                <option value={'Soltero/a'}>Soltero</option>
                                <option value={'Casadoa'}>Casado</option>
                                <option value={'Pareja'}>Pareja</option>
                   
                            </NativeSelect> 
                                        
                    <InputLabel variant="outlined" htmlFor="uncontrolled-native">
                                <Typography variant="p" component="div" color="black">
                                    
                                  Sexo
                               
                                </Typography>
                            </InputLabel>
                            <br/>
                            <NativeSelect
                                defaultValue={props.sexo}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'sexo',
                                    id: 'uncontrolled-native',
                                }}
                                sx={'width:250px'}
                            >
                          
                                <option value={'Sin determinar'}>
                                       Sin determinar
                                 
                                </option>
                                <option value={'Masculino'}>Masculino</option>
                                <option value={'Femenino'}>Femenino</option>
                  
                   
                            </NativeSelect> 
<TextField
               defaultValue={props.correo}
              margin="dense"
              id="Dni"
              
              label="correo"
              name="correo"
              onChange={handleChange}
              fullWidth
              variant="standard"
            />
            <TextField
               defaultValue={props.telefono}
              margin="dense"
              id="dni"
              
              label="Telefono"
              name="telefono"
              onChange={handleChange}
              fullWidth
              variant="standard"
            />
            <TextField
               defaultValue={props.provincia}
              margin="dense"
              id="dni"
              
              label="Provincia"
              name="provincia"
              onChange={handleChange}
              fullWidth
              variant="standard"
            />

                    <DialogActions>


                        <>
                            <> <Button variant="contained" color="primary" onClick={handleDeterminar}> Modificar </Button></>
                        </>
                        <Button variant="outlined" color="error" style={{ marginLeft: "auto" }} onClick={handleClose}>Cancelar</Button>
                    </DialogActions>


                </DialogContent>
            </Dialog>
        </Box >


    );
}