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
  const [clientes, setClientes] = useState()
  const [lotes, setLotes] = useState()
  const [activo, setActivo] = useState(false)

  useEffect(() => {
    traer();
  }, []);

  const traer = async () => {
    const historial = await serviciodatos.traerclientes();
    setClientes(historial);
    const historial2 = await serviciodatos.traerlotes();
    setLotes(historial2);

  };





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

      const nov = await serviciodatos.nuevaVenta(form)
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
      Nueva venta
    </button>
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>

        
            <h3>
              <b> NUEVA VENTA</b></h3>
             
          
            <TextField

              onChange={handleChange}
              name="fecha"
              id="date"
              label="Fecha"
              type="date"
              defaultValue="2024-03-01"
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
             

                            
                    <InputLabel variant="outlined" htmlFor="uncontrolled-native">
                                <Typography variant="p" component="div" color="black">
                                    
                                    Cliente
                               
                                </Typography>
                            </InputLabel>
                            <br/>
                            <NativeSelect
                                defaultValue={30}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'nombre',
                                    id: 'uncontrolled-native',
                                }}
                                sx={'width:250px'}
                            >
                          
                          <option value={'Sin determinar'}>Sin determinar</option>
  {clientes && clientes.map((row) => (
    <option key={row.id} value={row.id}>{row.nombre}</option>
  ))}
                             
                           
                   
                            </NativeSelect> 
                            <InputLabel variant="outlined" htmlFor="uncontrolled-native">
                                <Typography variant="p" component="div" color="black">
                                    
                                    Lote
                               
                                </Typography>
                            </InputLabel>
                            <br/>
                            <NativeSelect
                                defaultValue={30}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'lote',
                                    id: 'uncontrolled-native',
                                }}
                                sx={'width:250px'}
                            >
                          
                          <option value={'Sin determinar'}>Sin determinar</option>
  {lotes && lotes.map((row) => (
    <option key={row.id} value={row.id}>{row.sector}-{row.manzana}-{row.lote}</option>
  ))}
                           
                   
                            </NativeSelect> 
                            <InputLabel variant="outlined" htmlFor="uncontrolled-native">
                                <Typography variant="p" component="div" color="black">
                                    
                                    Lote
                               
                                </Typography>
                            </InputLabel>
                            <br/>
                            <NativeSelect
                                defaultValue={30}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'modelo_venta',
                                    id: 'uncontrolled-native',
                                }}
                                sx={'width:250px'}
                            >
                          
                          <option value={'Sin determinar'}>Sin determinar</option>
                          <option value={'Contado'}>Contado</option>
                          <option value={'Financiado'}>Financiado</option>
                   
                            </NativeSelect> 
                            <TextField
              autoFocus
              margin="dense"
              id="Dni"
              
              label="Valor_escritura"
              name="valor_escritura"
              onChange={handleChange}
              fullWidth
              variant="standard"
            />
    
<TextField
              autoFocus
              margin="dense"
              id="Dni"
              
              label="Observaciones"
              name="observaciones"
              onChange={handleChange}
              fullWidth
              variant="standard"
            />
        
            
          
            <DialogActions>


              <>
              {form.lote  && form.nombre  ? <> <Button variant="contained" color="primary" onClick={handleDeterminar}> crear </Button></> :  <>Completar los datos</>}
             </>
              <Button variant="outlined" color="error" style={{ marginLeft: "auto" }} onClick={handleClose}>Cancelar</Button>
            </DialogActions>


        </DialogContent>
      </Dialog>
    </Box >


  );
}