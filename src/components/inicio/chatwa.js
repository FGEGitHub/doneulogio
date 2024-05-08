import React from "react";

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import logo from "../../Assets/doneu1.png";

const Whatsapp = () => {
	return (
		<WhatsAppWidget
    phoneNo="5493794781818"
    position="right"
    widgetWidth="300px"
    widgetWidthMobile="260px"
    autoOpen={true}
    autoOpenTimer={5000}
    messageBox={true}
    messageBoxTxt="Quiero consultar el precio del lot..."
    iconSize="60"
    iconColor="#8eb937" //armonia y estabilidad de identidad don eulogio
    iconBgColor="black"
    headerIcon={logo}
    headerIconColor="pink"
    headerTxtColor="white"
    headerBgColor="#1a393c" // Fondo del encabezado en el color #1a393c
    bodyBgColor="#f5f5f5" // Fondo del cuerpo del chat en un gris claro (#f5f5f5)
    headerTitle="Don Eulogio"
	headerCaption="Online"
    chatPersonName="Soporte"
    chatMessage={<>Hola 👋 <br /><br /> En qué puedo ayudarte?</>}
    footerBgColor="#999" // Pie de página en un tono neutro (#999)
    btnBgColor="#8eb937" // Botón "Comenzar Chat" en verde primavera
    btnTxtColor="black"
    btnTxt="Comenzar Chat"
    placeholder="Escribe tu mensaje"
/>
       
	);
};

export default Whatsapp;