import React from 'react'
import './NavBar.css'

export default function NavBar() {
  return (
    <div className="navbar">
        <ul>
            <li>
                <img src="./public/img/pixlerzicon.png" alt="Logo" className='logo' />
            </li>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/logos">Logos</a>
            </li>
            <li>
                <a href="/web-design">Web Design</a>
            </li>
            <li>
                <a href="/social-media">Social Media</a>
            </li>
            <li>
                <a href="/branding">Branding</a>
            </li>
            <li>
                <a href="/lets-talk">Let's Talk</a>
            </li>
        </ul>
    </div>
  );
}
