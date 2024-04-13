import React, { useEffect, useState, } from "react";
import servicio1 from '../../services/datos';


const SimplePage = () => {
  const [formData, setFormData] = useState();
  const [estado, setEstado] = useState();

  // Función para manejar cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    console.log(formData)
  };

  useEffect(() => {
    traer()
}, [])

const traer = async ()=>{
 // await servicio1.probar(formData)
 // const rta = await servicio1.traer(formData)


  setEstado("rta")
}


  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
  
    e.preventDefault();
    const rta = await servicio1.crear(formData)
    alert(rta)
    // Aquí puedes hacer lo que quieras con los datos del formulario
   
  };
  return (
   <>
      <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name='"question"'
         
          onChange={handleInputChange}
        />
      </div>
       
      <button type="submit">Enviar</button>
    </form>
    <br/>      <br/>      <br/>      <br/>      <br/>      <br/>      <br/>      <br/>      <br/>      <br/>
 nombre
   </>
  );
};

export default SimplePage;
