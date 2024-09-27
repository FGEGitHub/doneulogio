import WhatsappChat from '../inicio/chatwa'; // Ajusta la ruta según sea necesario
import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import servicioDatos from '../../services/datos';
import Fotobosques from '../../Assets/bosquesfoto.jpg'; // Imagen del bosque

const DialogComponent = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const [nivel, setNivel] = useState(null);
  const [datos, setDatos] = useState(null);
  const [imageSrc, setImageSrc] = useState(null); // Estado para la imagen

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
      getClients(); // Realiza la consulta cuando se abre el modal
    }
  }, [open]);

  // Función para obtener los datos de la base de datos
  const getClients = async () => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser');
    let user = { id: 0, nivel: null };
    
    if (loggedUserJSON) {
      user = JSON.parse(loggedUserJSON);
      setNivel(user.nivel);
    }

    try {
      const historial = await servicioDatos.clickgenerallote({
        id: props.info,
        id_usuario: user.id,
      });
      setDatos(historial);  // Almacena los datos en el estado
      if (historial && historial.length > 0) {
        loadImage(historial[0].id);  // Carga la imagen usando el ID del lote cuando los datos están disponibles
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Función para cargar la imagen del lote correspondiente
  const loadImage = (idLote) => {
    try {
      console.log(idLote)
      const rutaa = idLote+'.png'
      console.log(rutaa)
      const image = require(`../../Assets/lotes/${rutaa}`);
     // const image = require(`../../Assets/lotes/${idLote}.png`); // Cargar la imagen con el ID del lote
      setImageSrc(image);  // Guardar la ruta de la imagen en el estado
    } catch (error) {
      console.error(`No se encontró la imagen para el lote ${idLote}`);
      setImageSrc(null);  // Si no se encuentra la imagen, no mostrar nada
    }
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    image: {
      width: '50%',  // Ajusta el tamaño de la imagen
    },
    info: {
      width: '45%',
      paddingLeft: '20px',
      display: 'flex',
      flexDirection: 'column',
    },
    chatContainer: {
      marginTop: '20px',
    },
    dialogContent: {
      display: 'flex',
      justifyContent: 'space-between',
    }
  };

  return (
    <Dialog open={open} onClose={closeDialog} maxWidth="md" fullWidth>
      <DialogTitle>Información del Lote</DialogTitle>
      <DialogContent dividers style={styles.dialogContent}>
        <div style={styles.container}>
          {/* Imagen del lote */}
          <div style={styles.image}>
            {imageSrc ? (
              <img src={imageSrc} alt="Lote esquema" style={{ width: '100%' }} />
            ) : (
              props.info === 145 && (
                <img src={Fotobosques} alt="Lote bosque" style={{ width: '100%' }} />
              )
            )}
          </div>

          {/* Información y chatbot */}
          <div style={styles.info}>
            {datos ? (
              datos.length > 0 ? (
                <>
                  <div>Sector: {datos[0].sector}</div>
                  <div>Manzana: {datos[0].manzana}</div>
                  <div>Lote: {datos[0].lote}</div>
                  <div>Disponibilidad: {datos[0].disponibilidad}</div>

                  {/* Chat de WhatsApp */}
                  <div style={styles.chatContainer}>
                    <WhatsappChat 
                      precio={datos[0].precio} 
                      preciofinanciado={datos[0].preciofinanciado} 
                    />
                  </div>
                </>
              ) : (
                <div>{props.info === 145 ? 'Bosques de Don Eulogio' : 'No se encontró información'}</div>
              )
            ) : (
              <div>Cargando información...</div>
            )}
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog} color="primary">Cerrar</Button>
      </DialogActions>
    </Dialog>
  );
});

export default DialogComponent;
