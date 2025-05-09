import React, { useState } from "react";
import "./FAQs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function FAQs({ title, items = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faqs-container">
      <h3>{title}</h3>
      {items.map((item, index) => (
        <div key={index} className="faq">
          <div className="faq-title" onClick={() => toggleFAQ(index)}>
            <h4>{item.question}</h4>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`chevron-icon ${openIndex === index ? "rotate" : ""}`}
            />
          </div>
          <div className={`faq-content ${openIndex === index ? "open" : ""}`}>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
