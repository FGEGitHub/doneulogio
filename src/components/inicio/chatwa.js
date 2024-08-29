import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../../Assets/doneu1.png";
import whatsappLogo from "../../Assets/whatsapp_logo.png";
import "./WhatsappChat.css";

const WhatsappChat = (props) => {
  const [message, setMessage] = useState("");
  const [chatOpen, setChatOpen] = useState(false);
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
        formattedResponse = [{
          title: "Precios de contado",
          value: `$${props.precio}` // Display the single price directly
        }];
        break;
        case "¿Cuáles son los precios financiados?":
          formattedResponse = [{
            title: "Precios de contado",
            value: `$${props.preciofinanciado}` // Display the single price directly
          }];
          break;

      default:
        formattedResponse = [{
          title: "Información no disponible",
          value: "Lo siento, no tengo información sobre esa pregunta. ¿Puedo ayudarte con algo más?"
        }];
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
            <span>Hola 👋 <br /><br /> ¿En qué puedo ayudarte con los lotes de Don Eulogio?</span>
          </div>
          <div className="whatsapp-questions">
            <button className="whatsapp-question-btn" onClick={() => handleQuestionClick("¿Cuáles son los precios de contado?")}>
            ¿Cuáles son los precios de contado?
            </button>
            <button className="whatsapp-question-btn" onClick={() => handleQuestionClick("¿Cuáles son los precios financiados?")}>
            ¿Cuáles son los precios financiados?
            </button>
            <button className="whatsapp-question-btn" onClick={() => handleQuestionClick("¿Cuál es la superficie de los lotes?")}>
              ¿Cuál es la superficie de los lotes?
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