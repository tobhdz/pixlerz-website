import React from "react";
import "./Testimonials.css";
import TestimonialCard from "../components/TestimonialCard";

export default function Testimonials() {
  const testimonios = [
    {
      nombre: "Urban Nova",
      subtitulo: "Jason Carter",
      texto:
        "Pixlerz completely transformed our brand. It finally feels sharp, modern, and aligned with who we are.",
      imagen: "./img/clients/JasonCarter.webp",
    },
    {
      nombre: "Fresh Roots Co.",
      subtitulo: "Emily Rogers",
      texto:
        "The visuals they designed took our social media to a whole new level. Everything looks clean and professional.",
      imagen: "./img/clients/EmilyRogers.webp",
    },
    {
      nombre: "Altura Consulting",
      subtitulo: "Mark Stevens",
      texto:
        "Working with Pixlerz on our branding was a game-changer. They captured our essence from the very first draft.",
      imagen: "./img/clients/MarkStevens.webp",
    },
    {
      nombre: "Elevate Leaders",
      subtitulo: "Ashley Thompson",
      texto:
        "The presentation slides looked stunning. Every screen felt intentional and perfectly aligned with our message.",
      imagen: "./img/clients/AshleyThompson.webp",
    },
    {
      nombre: "Move Agency",
      subtitulo: "Brandon Lee",
      texto:
        "They don't just design, they understand strategy. Our Instagram engagement tripled.",
      imagen: "./img/clients/BrandonLee.webp",
    },
    {
      nombre: "FinHub Capital",
      subtitulo: "Rachel Morgan",
      texto:
        "Pixlerz helped us turn our pitch deck into a powerful, clear, and visual tool. It helped us secure funding.",
      imagen: "./img/clients/RachelMorgan.webp",
    },
    {
      nombre: "Joe Cowling",
      subtitulo: "",
      texto:
        "I have a hard time articulating what I am looking for when it comes to design work, but even with my lack of direction, Pixlerz worked with me and grasped what I was looking for even better than I did. Their eye for design and detail is phenomenal, I would highly recommend.",
      imagen: "./img/clients/JoeCowling.webp",
    },
  ];

  return (
    <div className="testimonials-container" id="testimonials">
      <h3>Testimonials</h3>

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
