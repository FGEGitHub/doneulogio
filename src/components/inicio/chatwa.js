import React, { useState } from "react";
import logo from "../../Assets/doneu1.png";
import whatsappLogo from "../../Assets/whatsapp_logo.png"; // Asegúrate de tener un logo de WhatsApp en esta ruta
import "./WhatsappChat.css"; // Asegúrate de crear este archivo CSS para los estilos

const WhatsappChat = (props) => {
  const [message, setMessage] = useState("");
  const [chatOpen, setChatOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [response, setResponse] = useState("");

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      window.open(`https://wa.me/5493794781818?text=${encodeURIComponent(message)}`, "_blank");
      setMessage("");
    }
  };

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
    if (question === "¿Cuál es el precio del lote?") {
      setResponse("el precio es "+ props.precio);
    } else if (question === "¿Está disponible el lote?") {
      setResponse("Sí, está disponible");
    }
  };

  const handleOtherQuestionClick = () => {
    const defaultMessage = "Hola, tengo otra pregunta.";
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
            <span>Hola 👋 <br /><br /> En qué puedo ayudarte?</span>
          </div>
          <div className="whatsapp-questions">
            <button className="whatsapp-question-btn" onClick={() => handleQuestionClick("¿Cuál es el precio del lote?")}>
              ¿Cuál es el precio del lote?
            </button>
            <button className="whatsapp-question-btn" onClick={() => handleQuestionClick("¿Está disponible el lote?")}>
              ¿Está disponible el lote?
            </button>
            <button className="whatsapp-question-btn" onClick={handleOtherQuestionClick}>
              <img src={whatsappLogo} alt="WhatsApp" className="whatsapp-icon" />
              Tengo otra pregunta
            </button>
          </div>
          {selectedQuestion && (
            <div className="whatsapp-response">
              <span>{selectedQuestion}</span>
              <div className="whatsapp-reply">
                <span>{response}</span>
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