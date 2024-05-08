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
			messageBoxTxt="Quiero consultar el precio del lote N°"
			iconSize="70"
			iconColor="#00A313"
			iconBgColor="#green"
			headerIcon={logo}
			headerIconColor="pink"
			headerTxtColor="white"
			headerBgColor="#89DA59"
			headerTitle="Doble D"
			headerCaption="Online"
			bodyBgColor="#80BD9E"
			chatPersonName="Suporte"
			chatMessage={<>Hola 👋 <br /><br /> En que te puedo ayudar?</>}
			footerBgColor="#fff"
			btnBgColor="springgreen"
			btnTxtColor="black"
			btnTxt="Comenzar Chat"
		/>
	);
};

export default Whatsapp;