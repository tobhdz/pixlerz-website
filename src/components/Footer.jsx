import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faLightbulb,
  faLaptopCode,
  faVideo,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";
import { faSmile } from "@fortawesome/free-regular-svg-icons";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo-box">
        <img
          src="./img/pixlerztext.png"
          alt="Weplash Logo"
          className="footer-logo"
        />
      </div>
      <div className="footer-top-buttons">
        <Link to="/form" className="footer-btn">
          Let's Talk
        </Link>
        <button className="footer-btn">
          Send an E-Mail
          </button>
      </div>
      <div className="footer-services">
        <Link to="/webdevelopment" className="footer-btn">
          <FontAwesomeIcon icon={faLaptopCode} /> Web Development
        </Link>
        <Link to="/logodesign" className="footer-btn">
          <FontAwesomeIcon icon={faSmile} /> Logo Design
        </Link>
        <Link to="/socialmedia" className="footer-btn">
          <FontAwesomeIcon icon={faVideo} /> Social Media
        </Link>
        <Link to="/branding" className="footer-btn">
          <FontAwesomeIcon icon={faBullhorn} /> Branding
        </Link>
      </div>
      <div className="footer-copyright">
        Copyright © 2025 Pixlerz. All rights reserved.
      </div>
    </div>
  );
}
