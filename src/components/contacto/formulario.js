import React, { useState } from 'react';
import mail from '../../Assets/mail.svg';
import wasap from '../../Assets/wasap.svg';
import serviciodatos from '../../services/datos'; // Importar el servicio que usas

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Enviar los datos al servicio
      const response = await serviciodatos.enviarconsulta(formData);
      console.log('Formulario enviado:', response);
      // Opcional: Mostrar un mensaje de éxito
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      // Opcional: Mostrar un mensaje de error
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <p style={styles.title}>
          Completá los datos y nuestro equipo de ventas se contactara a la brevedad.
        </p>

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
        <div style={styles.contactItem}>
          <img src={wasap} alt="Teléfono" style={styles.icon} /> 3794008721
        </div>
        <div style={styles.contactItem}>
          <img src={mail} alt="Correo electrónico" style={styles.icon} />
          <span>doneulogio.ua@gmail.com</span>
        </div>
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
    color:'#373737'
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
    width: '48%',
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
    alignItems: 'flex-start',
    fontSize: '21.5px',
    color: '#373737',
    lineHeight: '1.8', // Ajusta el interlineado aquí si es necesario
   
  },
  
  icon: {
    width: '100%',
    height: '100%',
    marginRight: '8px',
  },
  contactItem: {
    display: 'flex',
   // marginTop:'-5%',
    marginLeft:'-10%',
    alignItems: 'center',
   // marginBottom: '5px', // Reducido para acercar los elementos
    marginBottom: '15px',
  }
  
};

export default ContactForm;