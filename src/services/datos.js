import axios from "axios"
const url =require ('./url')


const baseUrl = url.database+"doneu/"

/* 



const probar= async  () => {
  const headers = new Headers()
headers.append("Content-Type", "application/json")

const body = {
  "test": "holaa"
}

const options = {
  method: "POST",
  headers,
  mode: "cors",
  body: JSON.stringify(body),
}



console.log(options)
   
  const {data } = await axios.post("https://eo8dw963278aa7.m.pipedream.net",options)
  console.log(data)
return data}   */

const enviar= async  (datos) => {

   
     const {data } = await axios.post(baseUrl+"dsadasda",datos)
    
  return data
 }  
 
 const actualizarventa= async  (datos) => {

   
  const {data } = await axios.post(baseUrl+"actualizarventa",datos)
 
return data
}  
 const traer= async  (datos) => {


   const {data } = await axios.get(baseUrl+"dasdasda",datos)

return data
}  

const traerlotes= async  (datos) => {


  const {data } = await axios.get(baseUrl+"traerlotes")

return data
}  

const traerventa= async  (datos) => {


  const {data } = await axios.get(baseUrl+"traerventa/"+datos)

return data
}  
const traerclientes= async  (datos) => {


  const {data } = await axios.get(baseUrl+"traerclientes")

return data
}  



const determinarmapa1bosques= async  (datos) => {

console.log(datos)
  const {data } = await axios.post(baseUrl+"determinarmapa1bosques",datos)

return data
}  


const asignarventa= async  (datos) => {

  console.log(datos)
    const {data } = await axios.post(baseUrl+"asignarventa",datos)
  
  return data
  }  

  
  const clickgenerallote= async  (datos) => {

    console.log(datos)
      const {data } = await axios.post(baseUrl+"clickgenerallote",datos)
    
    return data
    }  
 export default {clickgenerallote,actualizarventa,traerventa,asignarventa,determinarmapa1bosques, traer,enviar,traerlotes,traerclientes}