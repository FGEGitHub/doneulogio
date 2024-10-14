import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviando los datos a un servidor
    console.log('Datos del formulario:', formData);
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
      <Typography variant="body1" align="center" gutterBottom>
        Completá los datos y nuestro equipo de ventas se contactará a la brevedad.
      </Typography>
      <TextField
        label="Nombre"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Apellido"
        name="apellido"
        value={formData.apellido}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Teléfono"
        name="telefono"
        value={formData.telefono}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Mensaje"
        name="mensaje"
        value={formData.mensaje}
        onChange={handleChange}
        fullWidth
        multiline
        rows={4}
      />
      <Button 
        type="submit" 
        variant="contained" 
        color="success" 
        fullWidth
        sx={{
          backgroundColor: '#2e7d32', 
          '&:hover': {
            backgroundColor: '#1b5e20'
          }
        }}
      >
        Enviar
      </Button>
    </Box>
  );
};

export default ContactForm;
