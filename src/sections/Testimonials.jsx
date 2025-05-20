import React from "react";
import "./Testimonials.css";
import TestimonialCard from "../components/TestimonialCard";

export default function Testimonials() {
  const testimonios = [
    {
      nombre: "The Systems Effect",
      subtitulo: "Derek Coffey",
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imagen: "./img/clients/Derek.webp",
    },
    {
      nombre: "QLQ esta comida",
      subtitulo: "Fernando Andres",
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imagen: "./img/clients/FernandoAndres.webp",
    },
    {
      nombre: "Results Staffing",
      subtitulo: "Ruben Fuentes",
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imagen: "./img/clients/RubenFuentes.webp",
    },
    {
      nombre: "Dynamic Funding",
      subtitulo: "David",
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imagen: "./img/clients/David.webp",
    },
  ];

  return (
    <div className="testimonials-container" id="testimonials">
      <h3>Lorem ipsum dolor sit amet</h3>

      <div className="testimonials-columns-container">
        <div className="testimonials-column">
          {[1, 2].map((_, index) => (
            <div
              key={index}
              className="testimonials-slide"
              aria-hidden={index === 1}
            >
              {testimonios.map((testimonio, i) => (
                <TestimonialCard key={i} {...testimonio} />
              ))}
            </div>
          ))}
        </div>

        <div className="testimonials-column testimonials-reverse">
          {[1, 2].map((_, index) => (
            <div
              key={index}
              className="testimonials-slide"
              aria-hidden={index === 1}
            >
              {testimonios.map((testimonio, i) => (
                <TestimonialCard key={i} {...testimonio} />
              ))}
            </div>
          ))}
        </div>

        <div className="testimonials-column">
          {[1, 2].map((_, index) => (
            <div
              key={index}
              className="testimonials-slide"
              aria-hidden={index === 1}
            >
              {[...testimonios].reverse().map((testimonio, i) => (
                <TestimonialCard key={i} {...testimonio} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
