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
  const isMobile = window.innerWidth <= 768;
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
      flexDirection: isMobile ? 'column' : 'row', // Cambia la dirección según el dispositivo
      alignItems: 'center',
    },
    image: {
      width: isMobile ? '80%' : '60%', // Ajusta el tamaño según el dispositivo
      maxHeight: '60vh', // Limita la altura máxima para evitar desbordamientos
      objectFit: 'contain', // Asegura que la imagen mantenga su proporción
      marginBottom: isMobile ? '20px' : '0', // Añade espacio inferior en móvil
    },
    info: {
      width: '100%', // Ocupa todo el ancho disponible
      paddingLeft: isMobile ? '0' : '20px',
      display: 'flex',
      flexDirection: 'column',
    },
    chatContainer: {
      marginTop: '5px',
    },
    dialogContent: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'space-between',
    },
  };

  return (
    <Dialog 
      open={open} 
      onClose={closeDialog} 
      maxWidth="md" // Reduce el tamaño máximo del modal en escritorio
      fullWidth 
      sx={{ 
        maxWidth: isMobile ? '90vw' : '60vw', // Ajusta el ancho según la versión
        maxHeight: '90vh', // Limita la altura máxima
        margin: 'auto', // Centrado horizontal
      }}
    >
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
                      porcentaje_anticipo={datos[0].porcentaje_anticipo} 
                      cantidad_cuotas={datos[0].cantidad_cuotas} 
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
