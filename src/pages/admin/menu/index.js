




import { useNavigate, useParams } from "react-router-dom";

import React, { useEffect, useState } from "react";



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
            
                window.localStorage.removeItem('loggedNoteAppUser')
                navigate("/login")
              break;
          }
        }else{
          
          navigate('/login')
              window.localStorage.removeItem('loggedNoteAppUser')
              alert('usuario no autorizado')
        }

      }, [])

    return (
      <>
    Menu Admin
 </>
   
    );

}