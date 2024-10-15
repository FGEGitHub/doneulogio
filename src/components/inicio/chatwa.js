import React, { useState } from "react";
import logo from "../../Assets/doneu1.png";
import whatsappLogo from "../../Assets/whatsapp_logo.png";
import "./WhatsappChat.css";

const WhatsappChat = (props) => {
  const [message, setMessage] = useState("");
  const [chatOpen, setChatOpen] = useState(true);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [response, setResponse] = useState([]);
  const [cuotas, setCuotas] = useState("");
  const [calculos, setCalculos] = useState(null);

  const handleSendMessage = () => {
    const defaultMessage = "Hola, me gustaría obtener más información.";
    window.open(
      `https://wa.me/5493794781818?text=${encodeURIComponent(defaultMessage)}`,
      "_blank"
    );
  };

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
    setCalculos(null);
    let formattedResponse = [];
    switch (question) {
      case "¿Cuáles son las formas de Pago disponibles?":
        formattedResponse = [
          {
            title: "Formas de Pago",
            value:
              "Se tienen contemplados 2 formas de pago para la adquisición de tu lote:\n• Modelo Contado: Con precios promocionales, pagaderos en dólares o en pesos.\n• Modelo Financiado: Con un sistema de entrega del 50% del valor del lote y el saldo a financiarse en hasta 6 cuotas.",
          },
        ];
        break;
      case "¿Cuál es el precio de contado de este lote?":
        formattedResponse = [
          {
            title: "Precio de Contado",
            value: `$${props.precio}`, // Precio de contado desde la base de datos
          },
        ];
        break;
      case "¿Cuál es el precio financiado de este lote?":
        const anticipo = props.preciofinanciado *props.porcentaje_anticipo/100;
        const valorCuotas = (props.preciofinanciado-anticipo) / props.cantidad_cuotas;
        formattedResponse = [
          {
            title: "Precio Financiado",
            value: `$${props.preciofinanciado}`,
          },
          {
            title: "Financiación",
            value: `Anticipo (${props.porcentaje_anticipo}): $${anticipo.toFixed(2)}. Las ${props.cantidad_cuotas} cuotas serán de $${valorCuotas.toFixed(2)} cada una.`,
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
    setResponse(formattedResponse);
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
            <button
              className="whatsapp-question-btn"
              onClick={() => handleQuestionClick("¿Cuáles son las formas de Pago disponibles?")}
            >
              ¿Cuáles son las formas de Pago disponibles?
            </button>
            <button
              className="whatsapp-question-btn"
              onClick={() => handleQuestionClick("¿Cuál es el precio de contado de este lote?")}
            >
              ¿Cuál es el precio de contado de este lote?
            </button>
            <button
              className="whatsapp-question-btn"
              onClick={() => handleQuestionClick("¿Cuál es el precio financiado de este lote?")}
            >
              ¿Cuál es el precio financiado de este lote?
            </button>
            <button
              className="whatsapp-question-btn"
              onClick={() => handleQuestionClick("¿La operación incluye Comisiones Inmobiliarias?")}
            >
              ¿La operación incluye Comisiones Inmobiliarias?
            </button>
            <button className="whatsapp-question-btn" onClick={handleOtherQuestionClick}>
              <img src={whatsappLogo} alt="WhatsApp" className="whatsapp-icon" />
              Tengo otra pregunta
            </button>
          </div>

          {selectedQuestion && (
            <div className="whatsapp-response">
              <span className="whatsapp-question">{selectedQuestion}</span>
              <div className="whatsapp-reply">
                {response.map((item, index) => (
                  <div key={index} className="whatsapp-reply-item">
                    <span className="whatsapp-reply-title">{item.title}</span>
                    <span className="whatsapp-reply-value">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WhatsappChat;
