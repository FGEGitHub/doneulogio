import Box from '@mui/material/Box';

import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import servicioDatos from '../../services/datos'
import React, { useEffect, useState, Fragment } from "react";
import DialogActions from '@mui/material/DialogActions';
import DeleteIcon from '@mui/icons-material/Delete';
import { useParams } from "react-router-dom"
import InputLabel from '@mui/material/InputLabel';


export default function SelectTextFields(props) {
  const [open, setOpen] = React.useState(false);
  //const usuario  = useUser().userContext
  let params = useParams()


  
  const [activo, setActivo] = useState(false)






  const [inscripcion, setInscripcion] = useState()


  const handleClickOpen = () => {

    setOpen(true);

  };

  const handleClose = () => {
    setActivo(false)
    setOpen(false);
  };





  ////
  const handleDeterminar = async (event) => {
    // event.preventDefault();


    try {

      await servicioDatos.borrarlaventa(
      { id:props.id}


      )
      props.traer()

    } catch (error) {
      console.error(error);
      console.log('Error algo sucedio')

    }
    setActivo(false)
    setOpen(false);
  };/////
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
     
      <DeleteIcon  onClick={handleClickOpen}/>
     
      <Dialog open={open} onClose={handleClose}>

   
        <DialogContent>

        <h2>Seguro que quiere borrar la venta? </h2>      
   
                 <br />
           
                 <InputLabel variant="standard" htmlFor="uncontrolled-native">
                             
                            </InputLabel>
     
            
   
   

                 <DialogActions>
         <Button variant="contained" color="primary"   onClick={handleDeterminar} >Borrar</Button>
          <Button  variant="outlined" color="error" style={{ marginLeft: "auto" }} onClick={handleClose}>Cancelar</Button>
         
        </DialogActions>
           
         
        </DialogContent>
      
      </Dialog>
    </Box >

   
  );
}
