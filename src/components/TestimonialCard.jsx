import React from "react";
import "./TestimonialCard.css";
import PropTypes from "prop-types";

export default function TestimonialCard({ nombre, texto, imagen }) {
  return (
    <div className="testimonial-card">
      <div
        className="testimonial-image"
        style={{ backgroundImage: `url(${imagen})` }}
      ></div>
      <div className="testimonial-content">
        <h4>{nombre}</h4>
        <p>{texto}</p>
      </div>
    </div>
  );
}

TestimonialCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  imagen: PropTypes.string,
};
