import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

export default function Services() {
  return (
    <div className="services-container">
      <Link to="/webdesign" className="service">
        <div className="image">
          <iframe src="https://lottie.host/embed/82c09bc3-189b-4499-9929-8fd34ccca64e/jaSWWrJejT.lottie"></iframe>
        </div>
        <h3>Web Design</h3>
        <p>Lorem ipsum dolor sit amet.</p>
      </Link>
      <Link to="/logos" className="service">
        <div className="image">
          <iframe src="https://lottie.host/embed/8321e9a0-090c-4f8f-8710-39a5a5d76a85/rPl6SwPz9M.lottie"></iframe>
        </div>
        <h3>Logos</h3>
        <p>Lorem ipsum dolor sit amet.</p>
      </Link>
      <Link to="/social-media" className="service">
        <div className="image">
          <iframe src="https://lottie.host/embed/f65951f0-4ee4-447d-87f4-8d6c80e65bf5/e9ogpwntTr.lottie"></iframe>
        </div>
        <h3>Social Media</h3>
        <p>Lorem ipsum dolor sit amet.</p>
      </Link>
      <Link to="/branding" className="service">
        <div className="image">
          <iframe src="https://lottie.host/embed/044d5d33-c034-4286-a554-e4e4ac97427f/PWL3tcCqP5.lottie"></iframe>
        </div>
        <h3>Branding</h3>
        <p>Lorem ipsum dolor sit amet.</p>
      </Link>
    </div>
  );
}
