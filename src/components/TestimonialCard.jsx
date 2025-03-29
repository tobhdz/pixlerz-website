import React from "react";
import "./TestimonialCard.css";
import PropTypes from "prop-types";

export default function TestimonialCard({ nombre, subtitulo, texto, imagen }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <p className="testimonial-text">{texto}</p>
      </div>
      <div className="testimonial-footer">
        <div
          className="testimonial-image"
          style={{ backgroundImage: `url(${imagen})` }}
        ></div>
        <div className="testimonial-info">
          <h4>{nombre}</h4>
          <p className="testimonial-subtitle">{subtitulo}</p>
        </div>
      </div>
    </div>
  );
}

TestimonialCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  imagen: PropTypes.string,
};
