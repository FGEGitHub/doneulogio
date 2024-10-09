import React, { useState} from "react";
import logo from "../../Assets/doneu1.png";
import whatsappLogo from "../../Assets/whatsapp_logo.png";
import "./WhatsappChat.css";

const WhatsappChat = (props) => {
  const [message, setMessage] = useState("");
  const [chatOpen, setChatOpen] = useState(true);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [response, setResponse] = useState([]);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      window.open(`https://wa.me/5493794781818?text=${encodeURIComponent(message)}`, "_blank");
      setMessage("");
    }
  };

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
    let formattedResponse = [];
    switch (question) {
      case "¿Cuáles son los precios de contado?":
        formattedResponse = [{ title: "", value: `El Precio de este lote de contado es de $${props.precio}` }];
        break;
  
      case "¿Cuáles son los precios financiados?":
        formattedResponse = [{ title: "", value: `El Precio de este lote con financiación es de $${props.preciofinanciado}. Aplicando el sistema de financiacion te quedaria un valor de anticipo de $xx y xx` }];
        break;
  
      case "¿Cuáles son las formas de Pago disponibles?":
        formattedResponse = [{
          title: "",
          value: "• Contado: precios promocionales en dólares o pesos.\n• Financiado: entrega del xx% y hasta 6 cuotas."
        }];
        break;
  
      case "¿La operación incluye comisiones inmobiliarias?":
        formattedResponse = [{
          title: "",
          value: "La operación no incluye comisiones de ningún tipo, debido a que la misma se efectúa de forma directa con los propietarios y desarrolladores del proyecto"
        }];
        break;
        case "¿Cuáles son las formas de pago disponibles?":
          formattedResponse = [{
            title: "",
            value: `Se tienen Contemplados 2 formas de pago para la adquisición de tu lote:
            • Modelo Contado: con precios promocionales, pagaderos en dólares o en pesos.
            • Modelo Financiado: con un sistema de entrega del xx% del valor del lote y el saldo a financiarse en hasta 6 cuotas.`
          }];
          break;

          
      default:
        formattedResponse = [{ title: "Información no disponible", value: "Lo siento, no tengo información sobre esa pregunta." }];
    }
    setResponse(formattedResponse);
  };
  

  const handleOtherQuestionClick = () => {
    const defaultMessage = "Hola, tengo una pregunta específica sobre los lotes.";
    window.open(`https://wa.me/5493794781818?text=${encodeURIComponent(defaultMessage)}`, "_blank");
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
            <span>Hola 👋 <br /><br /> Gracias por comunicarte con el equipo de ventas de Don Eulogio.<br /><br /> En que podemos ayudarte?</span>
          </div>
          <div className="whatsapp-questions">
            <button className="whatsapp-question-btn" onClick={() => handleQuestionClick("¿Cuáles son las formas de pago disponibles?")}>
            Cuáles son las formas de pago disponibles?
            </button>
            <button className="whatsapp-question-btn" onClick={() => handleQuestionClick("¿Cuáles son los precios de contado?")}>
            Cuál es el precio de contado de este lote?
            </button>
            <button className="whatsapp-question-btn" onClick={() => handleQuestionClick("¿Cuáles son los precios financiados?")}>
            Cuál es el precio financiado de este lote?
            </button>
            <button className="whatsapp-question-btn" onClick={() => handleQuestionClick("¿La operación incluye comisiones inmobiliarias?")}>
              La operación incluye Comisiones Inmobiliarias?
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
              <div className="whatsapp-footer">
                <input
                  type="text"
                  className="whatsapp-input"
                  placeholder="Escribe tu mensaje"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button className="whatsapp-send-btn" onClick={handleSendMessage}>
                  Enviar
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WhatsappChat;