




import { useNavigate, useParams } from "react-router-dom";

import React, { useEffect, useState } from "react";

import Clientes from '../../../components/mapas/seleciconarlogin'

export default function Paginas() {
  const navigate = useNavigate();
  /*   const theme = useTheme();
    const classes = useStyles();
    const [loginVisible, setLoginvisible] = useState(false)
    const isMatch = useMediaQuery(theme.breakpoints.down("md")); */
  useEffect(() => {
      
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
    console.log(loggedUserJSON) 
        if (loggedUserJSON) {
          const user = JSON.parse(loggedUserJSON)
          console.log(user)
          switch (user.nivel) {
            case 100:
             break;
           //   navigate('/')
           
           
            default:
            console.log('defaul')
                window.localStorage.removeItem('loggedNoteAppUser')
                navigate("/login")
              break;
          }
        }else{
          console.log('else')
          //navigate('/login')
            //  window.localStorage.removeItem('loggedNoteAppUser')
              //alert('usuario no autorizado')
        }
       
      }, [])


return (
  <>
  <div style={{ backgroundColor: '#ba9470' }}>
  <br/> <br/> <br/>
  <Clientes/>
  <br/> <br/> <br/> <br/>
  </div>
  </>

);

}