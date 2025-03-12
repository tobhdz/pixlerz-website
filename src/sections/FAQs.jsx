import React, { useState } from "react";
import "./FAQs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function FAQs() {
  // Estado para controlar qué FAQ está abierta
  const [openIndex, setOpenIndex] = useState(null);

  // Función para manejar el clic en el título de la FAQ
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Datos de ejemplo para las FAQs
  const faqs = [
    "Lorem ipsum dolor sit amet?",
    "Lorem ipsum dolor sit amet?",
    "Lorem ipsum dolor sit amet?",
    "Lorem ipsum dolor sit amet?",
    "Lorem ipsum dolor sit amet?",
  ];

  return (
    <div className="faqs-container">
      <h3>FAQs</h3>
      {faqs.map((faq, index) => (
        <div className="faq" key={index}>
          <div className="faq-title" onClick={() => handleToggle(index)}>
            {faq}
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`chevron-icon ${openIndex === index ? "rotate" : ""}`}
            />
          </div>
          {openIndex === index && (
            <div className="faq-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
