import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <h1 className="navbar-title">OlaDev</h1>
        <ul className="navbar-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact" id="contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
