import React from "react";
import "./Testimonials.css";
import TestimonialCard from "../components/TestimonialCard";

export default function Testimonials() {
  return (
    <div className="testimonials-container" id="testimonials">
      <h3>Lorem ipsum dolor sit</h3>

      <div className="testimonials-columns-container">
        <div className="testimonials-column">
          {[1, 2].map((_, index) => (
            <div
              key={index}
              className="testimonials-slide"
              aria-hidden={index === 1}
            >
              <TestimonialCard
                nombre="Client"
                texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                imagen="/path/to/image1.jpg"
              />
              <TestimonialCard
                nombre="Client"
                texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                imagen="/path/to/image2.jpg"
              />
              <TestimonialCard
                nombre="Client"
                texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                imagen="/path/to/image3.jpg"
              />
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
              <TestimonialCard
                nombre="Client"
                texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                imagen="/path/to/image4.jpg"
              />
              <TestimonialCard
                nombre="Client"
                texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                imagen="/path/to/image5.jpg"
              />
              <TestimonialCard
                nombre="Client"
                texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                imagen="/path/to/image6.jpg"
              />
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
              <TestimonialCard
                nombre="Client"
                texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                imagen="/path/to/image7.jpg"
              />
              <TestimonialCard
                nombre="Client"
                texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                imagen="/path/to/image8.jpg"
              />
              <TestimonialCard
                nombre="Client"
                texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                imagen="/path/to/image9.jpg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
