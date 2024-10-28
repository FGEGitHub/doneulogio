import React, { useState } from "react";
import logo from "../../Assets/doneu1.png";
import whatsappLogo from "../../Assets/whatsapp_logo.png";
import "./WhatsappChat.css";

const WhatsappChat = (props) => {
  const [message, setMessage] = useState("");
  const [chatOpen, setChatOpen] = useState(true);
  const [openQuestions, setOpenQuestions] = useState({});
  const [responses, setResponses] = useState({}); // Cambiado a objeto
  const [cuotas, setCuotas] = useState("");
  const [calculos, setCalculos] = useState(null);

  const handleSendMessage = () => {
    const defaultMessage = "Hola, me gustaría obtener más información.";
    window.open(
      `https://wa.me/5493794008721?text=${encodeURIComponent(defaultMessage)}`,
      "_blank"
    );
  };

  const handleQuestionClick = (question) => {
    setCalculos(null);
    let formattedResponse = [];
    switch (question) {
      case "¿Cuáles son las formas de Pago disponibles?":
        formattedResponse = [
          {
            title: "Modelo Contado",
            value:
              "Con precios promocionales, pagaderos en dólares o en pesos.",
          },
          {
            title: "Modelo Financiado",
            value:
              "Con un sistema de anticipo + Cuotas fijas, pagaderas en dólares o en pesos.",
          },
        ];
        break;
      case "¿Cuál es el precio de contado de este lote?":
        formattedResponse = [
          {
            title: "Precio de Contado",
            value: `USD$${props.precio}`, // Precio de contado desde la base de datos
          },
        ];
        break;
      case "¿Cuál es el precio financiado de este lote?":
        const anticipo = (props.preciofinanciado * props.porcentaje_anticipo) / 100;
        const valorCuotas = (props.preciofinanciado - anticipo) / props.cantidad_cuotas;
        formattedResponse = [
          {
            title: "Precio Financiado",
            value: `USD ${props.preciofinanciado}`,
          },
          {
            title: `Anticipo ${props.porcentaje_anticipo}%`,
            value: `USD ${anticipo}`,
          },
          {
            title: "Saldo Financiado",
            value: `USD ${props.preciofinanciado - anticipo}`,
          },
          {
            title: "Cantidad de Cuotas",
            value: `${props.cantidad_cuotas}`,
          },
          {
            title: "Valor de Cuota",
            value: `USD ${valorCuotas}`,
          },
        ];
        break;
      case "¿La operación incluye Comisiones Inmobiliarias?":
        formattedResponse = [
          {
            title: "Comisiones Inmobiliarias",
            value:
              "La operación no incluye comisiones de ningún tipo, debido a que la misma se efectúa de forma directa con los propietarios y desarrolladores del proyecto.",
          },
        ];
        break;
      default:
        formattedResponse = [
          {
            title: "Información no disponible",
            value:
              "Lo siento, no tengo información sobre esa pregunta. ¿Puedo ayudarte con algo más?",
          },
        ];
    }

    setResponses((prevResponses) => ({
      ...prevResponses,
      [question]: formattedResponse,
    }));
    setOpenQuestions((prev) => ({
      ...prev,
      [question]: !prev[question],
    }));
  };

  const handleOtherQuestionClick = () => {
    const defaultMessage =
      "Hola, tengo una pregunta específica sobre los lotes.";
    window.open(
      `https://wa.me/5493794781818?text=${encodeURIComponent(defaultMessage)}`,
      "_blank"
    );
  };

  return (
    <div className={`whatsapp-chat ${chatOpen ? "open" : ""}`}>
      <div className="whatsapp-header" onClick={() => setChatOpen(!chatOpen)}>
        <img src={logo} alt="Logo" className="whatsapp-logo" />
        <div className="whatsapp-header-text">
          <div className="whatsapp-title">Don Eulogio</div>
          <div className="whatsapp-caption">Online</div>
        </div>
      </div>
      {chatOpen && (
        <div className="whatsapp-body">
          <div className="whatsapp-message">
            <span>
              Hola 👋 Gracias por comunicarte con el equipo de ventas de Don Eulogio.
              <br /> <br /> ¿En qué podemos ayudarte?
            </span>
          </div>
          <div className="whatsapp-questions">
            {[
              "¿Cuáles son las formas de Pago disponibles?",
              "¿Cuál es el precio de contado de este lote?",
              "¿Cuál es el precio financiado de este lote?",
              "¿La operación incluye Comisiones Inmobiliarias?",
            ].map((question) => (
              <div key={question} className="whatsapp-question-item">
                <button
                  className="whatsapp-question-btn"
                  onClick={() => handleQuestionClick(question)}
                >
                  {question}
                </button>
                {openQuestions[question] && responses[question] && (
                  <div className="whatsapp-response">
                    <span className="whatsapp-question">{question}</span>
                    <div className="whatsapp-reply">
                      {responses[question].map((item, index) => (
                        <div key={index} className="whatsapp-reply-item">
                          <span className="whatsapp-reply-title">{item.title}</span>
                          <span className="whatsapp-reply-value">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <button className="whatsapp-question-btn" onClick={handleOtherQuestionClick}>
              <img src={whatsappLogo} alt="WhatsApp" className="whatsapp-icon" />
              Quiero contactarme con un representante de venta
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsappChat;
