import React, { useState } from 'react';
import mail from '../../Assets/mail.svg';
import wasap from '../../Assets/wasap.svg';

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
    // Lógica para manejar el envío del formulario
    console.log('Formulario enviado:', formData);
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h3 style={styles.title}>
          Completá los datos y nuestro equipo de ventas se contactara a la brevedad.
        </h3>
        
        {/* Agrupando Nombre y Apellido en una misma fila */}
        <div style={styles.row}>
          <input
            style={styles.inputHalf}
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
          <input
            style={styles.inputHalf}
            type="text"
            name="apellido"
            placeholder="Apellido"
            value={formData.apellido}
            onChange={handleChange}
          />
        </div>

        <input
          style={styles.input}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          style={styles.input}
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          value={formData.telefono}
          onChange={handleChange}
        />
        <textarea
          style={styles.textarea}
          name="mensaje"
          placeholder="Mensaje"
          value={formData.mensaje}
          onChange={handleChange}
        />
        <button style={styles.button} type="submit">Enviar</button>
      </form>

      <div style={styles.contactInfo}>
      <p  style={{  alignItems: 'left'}}>
          <img src={wasap} alt="Teléfono" style={styles.icon} /> 3794008721
        </p>
        <p  style={{  alignItems: 'left'}}>
          <img src={mail} alt="Correo electrónico" style={styles.icon} /> doneulogio.ua@gmail.com
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
  },
  title: {
    textAlign: 'left',
    fontFamily: "Inter",
    fontSize: "24px",
    marginBottom: '20px',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  input: {
    marginBottom: '10px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
  },
  inputHalf: {
    marginBottom: '10px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '48%', // Ocupa la mitad del espacio disponible
  },
  textarea: {
    marginBottom: '10px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    height: '100px',
    resize: 'none',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#2C7D3B',
    color: 'white',
    cursor: 'pointer',
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontSize: '16px',
  },
  icon: {
    width: '24px',
    height: '24px',
    marginRight: '8px',
  },
};

export default ContactForm;
