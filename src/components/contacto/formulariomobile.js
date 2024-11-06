import React, { useState } from 'react';
import { TextField, Button, Box, Typography, CircularProgress } from '@mui/material';
import serviciodatos from '../../services/datos';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    mensaje: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Activar la animación de carga

    try {
      // Enviar los datos al servicio
      const response = await serviciodatos.enviarconsulta(formData);
      console.log('Formulario enviado:', response);
      alert('Consulta enviada exitosamente.'); // Mostrar el mensaje de éxito
      // Limpiar el formulario
      setFormData({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        mensaje: '',
      });
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Error al enviar la consulta.'); // Mostrar el mensaje de error
    } finally {
      setLoading(false); // Desactivar la animación de carga
    }
  };

  return (
    <Box 
      component="form" 
      onSubmit={handleSubmit} 
      sx={{ 
        maxWidth: '400px', 
        margin: '0 auto', 
        padding: '16px', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '16px' 
      }}
    >
      <Typography 
        variant="body1" 
        align="center" 
        gutterBottom
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        Completá los datos y nuestro equipo de ventas se contactará a la brevedad.
      </Typography>

      <TextField
        label="Nombre"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        fullWidth
        required
        InputProps={{
          style: { fontFamily: 'Inter, sans-serif' }
        }}
        InputLabelProps={{
          style: { fontFamily: 'Inter, sans-serif' }
        }}
      />
      <TextField
        label="Apellido"
        name="apellido"
        value={formData.apellido}
        onChange={handleChange}
        fullWidth
        required
        InputProps={{
          style: { fontFamily: 'Inter, sans-serif' }
        }}
        InputLabelProps={{
          style: { fontFamily: 'Inter, sans-serif' }
        }}
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        required
        InputProps={{
          style: { fontFamily: 'Inter, sans-serif' }
        }}
        InputLabelProps={{
          style: { fontFamily: 'Inter, sans-serif' }
        }}
      />
      <TextField
        label="Teléfono"
        name="telefono"
        value={formData.telefono}
        onChange={handleChange}
        fullWidth
        required
        InputProps={{
          style: { fontFamily: 'Inter, sans-serif' }
        }}
        InputLabelProps={{
          style: { fontFamily: 'Inter, sans-serif' }
        }}
      />
      <TextField
        label="Mensaje"
        name="mensaje"
        value={formData.mensaje}
        onChange={handleChange}
        fullWidth
        multiline
        rows={4}
        InputProps={{
          style: { fontFamily: 'Inter, sans-serif' }
        }}
        InputLabelProps={{
          style: { fontFamily: 'Inter, sans-serif' }
        }}
      />
      <Button 
        type="submit" 
        variant="contained" 
        color="success" 
        fullWidth
        disabled={loading} // Deshabilitar botón mientras se carga
        sx={{
          backgroundColor: '#2e7d32', 
          '&:hover': {
            backgroundColor: '#1b5e20'
          },
          fontFamily: 'Inter, sans-serif'
        }}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : 'Enviar'}
      </Button>
    </Box>
  );
};

export default ContactForm;
