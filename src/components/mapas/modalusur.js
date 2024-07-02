
import WhatsappChat from '../inicio/chatwa'; // Ajusta la ruta según sea necesario

import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import servicioDatos from '../../services/datos';

const DialogComponent = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const [nivel, setNivel] = useState(null);
  const [datos, setDatos] = useState(null);

  const openDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  useImperativeHandle(ref, () => ({
    openDialog,
    closeDialog,
  }));

  useEffect(() => {
    if (open) {
      getClients();
    }
  }, [open, props.info]);

  const getClients = async () => {
    console.log('info', props.info);

    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser');

    let user = { id: 0, nivel: null };
    if (loggedUserJSON) {
      user = JSON.parse(loggedUserJSON);
      setNivel(user.nivel);
      console.log('nivel', user.nivel);
    }

    try {
      const historial = await servicioDatos.clickgenerallote({
        id: props.info,
        id_usuario: user.id,
      });
      setDatos(historial);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Dialog open={open} onClose={closeDialog} maxWidth="md" fullWidth>
      <DialogTitle>Información del Lote</DialogTitle>
      <DialogContent dividers>
        {datos ? (
          datos.length > 0 ? (
            <>
              <div>Sector: {datos[0].sector}</div>
              <div>Manzana: {datos[0].manzana}</div>
              <div>Lote: {datos[0].lote}</div>
              <div>Disponibilidad: {datos[0].disponibilidad}</div>
            </>
          ) : (
            <div>No se encontró información.</div>
          )
        ) : (
          <div>Cargando información...</div>
        )}
        {props.children}
        <div style={{ marginTop: '20px' }}>
          <WhatsappChat precio={10}/> {/* Aquí se incluye el widget de WhatsApp */}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog} color="primary">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
});

export default DialogComponent;