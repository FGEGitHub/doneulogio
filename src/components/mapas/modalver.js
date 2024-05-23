// DialogComponent.js
import React, { useState, forwardRef, useImperativeHandle } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Formulario from './formulariolotes'
import servicioDatos from '../../services/datos'


const DialogComponent = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const [nivel, setNivel] = useState(false);


  const getClients = async () => {

    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setNivel(user.nivel)
   

    }
    console.log('props.info')
    const historial = await servicioDatos.clickgenerallote({id:props.info});
    setDatos(historial);
  }



  // Función para abrir el diálogo
  const openDialog = () => {
    setOpen(true);
    getClients()
  };

  // Función para cerrar el diálogo
  const closeDialog = () => {
    setOpen(false);
  };

  // Permite al componente padre llamar a openDialog desde el ref
  useImperativeHandle(ref, () => ({
    openDialog,
    closeDialog, // También puedes exponer la función closeDialog si es necesario
  }), []); // Asegura que esto se ejecute solo una vez

  return (
    <Dialog open={open} onClose={closeDialog} maxWidth={"110%"}>


      {nivel ? <>
        {nivel == 100 ? <>
          <DialogTitle>"Agregar detalless"</DialogTitle>
          <DialogContent>
            <Formulario
              getClients={props.getClients}
              info={props.info}
              mapa={props.mapa}
              cerrar={() => {
                setOpen(false);
              }}
            />
          </DialogContent>
        </> : <>
          <DialogTitle>{"Info del lote"}</DialogTitle>
          <DialogContent>
           {/*  <Componentever
            nivel={nivel}
              info={props.info}
              mapa={props.mapa}
              cerrar={() => {
                setOpen(false);
              }} /> */} 
              Modal info deslogin

               </DialogContent>
        </>}

      </> : <></>}
      {props.children}
      {props.info}



    </Dialog>
  );
});

export default DialogComponent;
