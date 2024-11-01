import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import WhatsappChat from '../inicio/chatwa'; // Ajusta la ruta según sea necesario
import servicioDatos from '../../services/datos';
import Fotobosques from '../../Assets/bosquesfoto.jpg';
import ImagenDefault from '../../Assets/lotes/69.png'; // Imagen predeterminada
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; // Icono de WhatsApp desde Material-UI

const DialogComponent = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const [nivel, setNivel] = useState(null);
  const [datos, setDatos] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
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
      getClients();
    }
  }, [open]);

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
      setDatos(historial);
      if (historial && historial.length > 0) {
        loadImage(historial[0].id);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const loadImage = (idLote) => {
    try {
      const image = require(`../../Assets/lotes/${idLote}.png`);
      setImageSrc(image);
    } catch (error) {
      console.error(`No se encontró la imagen para el lote ${idLote}`);
      setImageSrc(ImagenDefault);
    }
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
    },
    image: {
      width: isMobile ? '80%' : '60%',
      maxHeight: '60vh',
      objectFit: 'contain',
      marginBottom: isMobile ? '20px' : '0',
    },
    info: {
      width: '100%',
      paddingLeft: isMobile ? '0' : '20px',
      display: 'flex',
      flexDirection: 'column',
      textAlign: props.info === "54" || props.info === "53" ? 'center' : 'left', // Centrando para el área comercial
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
      maxWidth="md" 
      fullWidth 
      sx={{ 
        maxWidth: isMobile ? '90vw' : '60vw', 
        maxHeight: '90vh', 
        margin: 'auto',
      }}
    >
      {(props.info == "54" || props.info == "53") ? (
        <>
          <DialogTitle>Información Área Comercial</DialogTitle>
          <DialogContent dividers style={styles.dialogContent}>
            <div style={styles.container}>
              <div style={styles.info}>
                Espacio reservado para lotes con destinos comerciales. Para más información, consulte vía WhatsApp al equipo de ventas.
                <Button
  variant="contained"
  color="success"
  startIcon={<WhatsAppIcon />}
  href={`https://wa.me/5493794008721?text=${encodeURIComponent(
    `Hola, me gustaría recibir información sobre los lotes comerciales .`
  )}`}
  target="_blank"
  style={{ marginTop: '15px' }}
>
  Consultar en WhatsApp
</Button>
              </div>
            </div>
          </DialogContent>
        </>
      ) : (
        <>
          <DialogTitle>Información del Lote</DialogTitle>
          <DialogContent dividers style={styles.dialogContent}>
            <div style={styles.container}>
              <div style={styles.image}>
                {imageSrc ? (
                  <img src={imageSrc} alt="Lote esquema" style={{ width: '100%' }} />
                ) : (
                  props.info === 145 && (
                    <img src={Fotobosques} alt="Lote bosque" style={{ width: '100%' }} />
                  )
                )}
              </div>
              <div style={styles.info}>
                {datos ? (
                  datos.length > 0 ? (
                    <>
                      <p>
                        <div><b>Sector:</b> {datos[0].sector}</div>
                        <div><b>Manzana:</b> {datos[0].manzana}</div>
                        <div><b>Lote:</b> {datos[0].lote}</div>
                      </p>
                      <div style={styles.chatContainer}>
                        <WhatsappChat 
                          precio={datos[0].precio} 
                          preciofinanciado={datos[0].preciofinanciado} 
                          porcentaje_anticipo={datos[0].porcentaje_anticipo} 
                          cantidad_cuotas={datos[0].cantidad_cuotas} 
                          sector={datos[0].sector}
                          manzana={datos[0].manzana}
                          lote={datos[0].lote}
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
        </>
      )}
      <DialogActions>
        <Button onClick={closeDialog} color="primary">Cerrar</Button>
      </DialogActions>
    </Dialog>
  );
});

export default DialogComponent;
