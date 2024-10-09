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
    setCalculos(null); // Reiniciar cálculos
    let formattedResponse = [];
    switch (question) {
      case "¿Cuáles son los precios de contado?":
        formattedResponse = [
          {
            title: "Precios de contado",
            value: `$${props.precio}`, // Mostrar el precio de contado
          },
        ];
        break;
      case "¿Cuáles son los precios financiados?":
        formattedResponse = [
          {
            title: "Precio financiado",
            value: `$${props.preciofinanciado}`, // Mostrar el precio financiado
          },
          {
            title: "Por favor, ingresa la cantidad de cuotas",
            value: "¿Cuántas cuotas deseas para financiar el lote?",
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

  const handleCuotasChange = (e) => {
    setCuotas(e.target.value);
  };

  const handleCalcular = () => {
    const numeroCuotas = parseInt(cuotas);
    if (!isNaN(numeroCuotas) && numeroCuotas > 0) {
      const anticipo = props.preciofinanciado / 2;
      const valorCuotas = anticipo / numeroCuotas;
      const nuevoResponse = [
        ...response,
        {
          title: "Anticipo y cuotas",
          value: `Anticipo (50%): $${anticipo.toFixed(
            2
          )}. Las cuotas serán de $${valorCuotas.toFixed(2)} cada una.`,
        },
      ];
      setResponse(nuevoResponse);
      setCalculos({
        anticipo: anticipo.toFixed(2),
        valorCuotas: valorCuotas.toFixed(2),
      });
    } else {
      alert("Por favor, ingresa un número válido de cuotas.");
    }
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
            <span>
              Hola 👋 <br />
              <br /> ¿En qué puedo ayudarte con los lotes de Don Eulogio?
            </span>
          </div>
          <div className="whatsapp-questions">
            <button
              className="whatsapp-question-btn"
              onClick={() => handleQuestionClick("¿Cuáles son los precios de contado?")}
            >
              ¿Cuáles son los precios de contado?
            </button>
            <button
              className="whatsapp-question-btn"
              onClick={() => handleQuestionClick("¿Cuáles son los precios financiados?")}
            >
              ¿Cuáles son los precios financiados?
            </button>
            <button
              className="whatsapp-question-btn"
              onClick={() => handleQuestionClick("¿Cuál es la superficie de los lotes?")}
            >
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

              {selectedQuestion === "¿Cuáles son los precios financiados?" && !calculos && (
                <div className="whatsapp-cuotas">
                  <input
                    type="number"
                    className="whatsapp-input whatsapp-input-fullwidth"
                    placeholder="Ingresa la cantidad de cuotas"
                    value={cuotas}
                    onChange={handleCuotasChange}
                  />
                  <button className="whatsapp-send-btn" onClick={handleCalcular}>
                    Calcular
                  </button>
                </div>
              )}
            </div>
          )}

         
        </div>
      )}
    </div>
  );
};

export default WhatsappChat;
