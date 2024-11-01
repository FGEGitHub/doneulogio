import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import serviciodatos from '../../services/datos'
import NativeSelect from '@mui/material/NativeSelect';

import { Paper, CircularProgress, Typography, Card, CardActions } from '@mui/material';
import React, { useEffect, useState, Fragment } from "react";
import DialogActions from '@mui/material/DialogActions';
import InputLabel from '@mui/material/InputLabel';
import Tooltip from '@mui/material/Tooltip';

export default function SelectTextFields(props) {
  const [open, setOpen] = React.useState(false);
  //const usuario  = useUser().userContext
  const [form, setForm] = useState({

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

      const nov = await serviciodatos.nuevocliente(form)
alert(nov)
    } catch (error) {
      console.error(error);
      console.log('Error algo sucedio')


    }
   setForm({})
 

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
      < Tooltip title="Nuevo cliente">
      <button   onClick={handleClickOpen} style={{ 
                    backgroundColor: '#6AC32E', 
                    color: 'white', 
                    padding: '10px 20px', 
                    border: 'none', 
                    borderRadius: '5px', 
                    cursor: 'pointer'
                }}>
      Nuevo Cliente
    </button>
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>

        
            <h3>
              <b> NUEVO CLIENTE</b></h3>
             
                 
              <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Nombre"
              name="nombre"
              onChange={handleChange}
              fullWidth
              variant="standard"
            />

<TextField
              autoFocus
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

              onChange={handleChange}
              name="fecha_nac"
              id="date"
              label="Fecha de nacimiento"
              type="date"
              defaultValue="2023-03-01"
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
                                defaultValue={30}
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
                                defaultValue={30}
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
                                <option value={'Pareja'}>Pareja</option>
                   
                            </NativeSelect> 
<TextField
              autoFocus
              margin="dense"
              id="Dni"
              
              label="correo"
              name="correo"
              onChange={handleChange}
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="dni"
              
              label="Telefono"
              name="telefono"
              onChange={handleChange}
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
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
              {form.nombre  ? <> <Button variant="contained" color="primary" onClick={handleDeterminar}> crear </Button></> :  <>Completar los datos</>}
             </>
              <Button variant="outlined" color="error" style={{ marginLeft: "auto" }} onClick={handleClose}>Cancelar</Button>
            </DialogActions>


        </DialogContent>
      </Dialog>
    </Box >


  );
}