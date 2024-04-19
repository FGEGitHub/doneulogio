import axios from "axios"
const url =require ('./url')


const baseUrl = url.database+''
//const  baseUrl ='http://localhost:4000/'

let token = null

const setToken = newToken =>{
    
    token = `Bearer ${newToken}`
}




const usuarios = async () => {
  const config = {
    headers: {
      Authorization: token
    }
  }//ver 
  //ver 
    const request = await axios.get(baseUrl+'prueba')
    let dataa = request.data
   console.log('hola')

    return dataa
     
}



  

export default { usuarios, setToken}
