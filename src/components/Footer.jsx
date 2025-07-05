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
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
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
        <Link to="/form" className="footer-btn">
          <FontAwesomeIcon icon={faBullhorn} /> Let's Talk
        </Link>
      </div>
      <div className="footer-socials">
        <a
          href="https://www.instagram.com/pixlerz_/"
          className="footer-social-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://www.linkedin.com/company/pixlerz"
          className="footer-social-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <div className="footer-legal">
        <Link to="/privacy-policy" className="footer-legal-link">
          Privacy Policy
        </Link>
        <span className="footer-legal-separator">&middot;</span>
        <Link to="/terms-of-use" className="footer-legal-link">
          Terms of Use
        </Link>
        <span className="footer-legal-separator">&middot;</span>
        <Link to="/cookie-policy" className="footer-legal-link">
          Cookie Policy
        </Link>
      </div>
      <div className="footer-copyright">
        Copyright © 2025 Pixlerz LLC. All rights reserved.
      </div>
    </div>
  );
}
