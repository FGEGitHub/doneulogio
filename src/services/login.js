import axios from "axios"
const url =require ('./url')


const baseUrl = url.database+'/'
//const  baseUrl ='http://localhost:4000/signin2'



const login= async  (credentials) => {
 
  const {data } = await axios.post(baseUrl+'signinde',credentials)
  if (data ==='Sin Exito'){
   alert(data)}
    return data 
}   

const guardar= async  credentials => {
    const {data } = await axios.post(baseUrl+"login",credentials)
    return data 
} 
export default {login, guardar}
