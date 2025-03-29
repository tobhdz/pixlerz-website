import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <img src="./img/pixlerzicon.png" alt="Logo" className="logo" />
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/webdesign">Web Design</Link>
        </li>
        <li>
          <Link to="/logos">Logos</Link>
        </li>
        <li>
          <Link to="/socialmedia">Social Media</Link>
        </li>
        <li>
          <Link to="/branding">Branding</Link>
        </li>
        <li>
          <Link to="/">Let's Talk</Link>
        </li>
      </ul>
    </div>
  );
}
