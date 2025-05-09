import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img src="./img/pixlerzicon.png" alt="Logo" className="logo" />
        </Link>

        <button className="hamburger" onClick={toggleMenu}>
          <span className={`hamburger-line ${isOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${isOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${isOpen ? "open" : ""}`}></span>
        </button>

        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/webdevelopment" onClick={() => setIsOpen(false)}>
              Web Development
            </Link>
          </li>
          <li>
            <Link to="/logodesign" onClick={() => setIsOpen(false)}>
              Logo Design
            </Link>
          </li>
          <li>
            <Link to="/socialmedia" onClick={() => setIsOpen(false)}>
              Social Media
            </Link>
          </li>
          <li>
            <Link to="/branding" onClick={() => setIsOpen(false)}>
              Branding
            </Link>
          </li>
          <li>
            <Link to="/form" onClick={() => setIsOpen(false)}>
              Let's Talk
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
