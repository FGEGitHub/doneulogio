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


 const traer= async  (datos) => {


   const {data } = await axios.get(baseUrl+"dasdasda",datos)

return data
}  

const traerlotes= async  (datos) => {


  const {data } = await axios.get(baseUrl+"traerlotes",datos)

return data
}  
 export default { traer,enviar,traerlotes}