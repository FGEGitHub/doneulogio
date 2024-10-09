import WhatsappChat from '../inicio/chatwa'; // Ajusta la ruta según sea necesario
import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import servicioDatos from '../../services/datos';
import Fotobosques from '../../Assets/bosquesfoto.jpg'; // Imagen del bosque
import ImagenDefault from '../../Assets/lotes/69.png'; // Imagen predeterminada

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
      const image = require(`../../Assets/lotes/${idLote}.png`); // Cargar la imagen con el ID del lote
      setImageSrc(image);  // Guardar la ruta de la imagen en el estado
    } catch (error) {
      console.error(`No se encontró la imagen para el lote ${idLote}`);
      setImageSrc(ImagenDefault);  // Si no se encuentra la imagen, se muestra la predeterminada
    }
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    image: {
      width: '60%',  // Tamaño mayor por defecto
    },
    info: {
      width: '40%',
      paddingLeft: '20px',
      display: 'flex',
      flexDirection: 'column',
    },
    chatContainer: {
      marginTop: '5px',
    },
    dialogContent: {
      display: 'flex',
      justifyContent: 'space-between',
    }
  };

  // Estilos para móviles
  const mobileStyles = {
    image: {
      width: '100%',  // En móviles, imagen ocupa todo el ancho disponible
    },
  };

  // Detectar si es móvil
  const isMobile = window.innerWidth <= 768;

  return (
<Dialog 
  open={open} 
  onClose={closeDialog} 
  maxWidth="xl" 
  fullWidth 
  sx={{ 
    maxWidth: '90vw', 
    height: '150vh',               // Aumenta la altura del modal
    margin: 'auto',               // Centrado horizontal
   // top: '10%',                   // Ajusta para mover el modal más abajo
   // transform: 'translateY(10%)', // Mueve ligeramente el modal hacia abajo para centrarlo mejor
    maxHeight: '90vh'             // Limita la altura máxima
  }}
>
<DialogTitle>Información del Lote</DialogTitle>
      <DialogContent dividers style={styles.dialogContent}>
        <div style={styles.container}>
          {/* Imagen del lote */}
          <div style={isMobile ? mobileStyles.image : styles.image}>
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
                <p>
                  <div><b>Sector:</b> {datos[0].sector}</div>
                  <div><b>Manzana:</b> {datos[0].manzana}</div>
                  <div><b>Lote:</b> {datos[0].lote}</div>
                  <div><b>Disponibilidad:</b> {datos[0].disponibilidad}</div>
</p>
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
