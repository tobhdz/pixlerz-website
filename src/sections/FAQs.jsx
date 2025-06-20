import React, { useState } from "react";
import "./FAQs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const faqs = [
  {
    question: "What do you actually do?",
    answer:
      "We build badass brands. Strategy, design, websites, content, social—full-stack creative so you don't patch together five different freelancers.",
  },
  {
    question: "Who works on my project?",
    answer:
      "No interns, no apprentices. You get senior-level designers, developers, strategists—all handpicked to be the dream team your brand deserves.",
  },
  {
    question: "How long will this take?",
    answer:
      "Fast is for amateurs; done-right takes time. Brand identity typically takes 2–3 weeks, websites 4–8+ weeks, depending on scope and how fast you get us feedback.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Always. Launch day isn't goodbye—it's just the start line. We stick around so your brand doesn't fizzle out.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faqs-container">
      {faqs.map((item, index) => (
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
