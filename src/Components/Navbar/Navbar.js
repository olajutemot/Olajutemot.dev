import React, { useState } from "react";
import "./Navbar.css";
// import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [active, setActive] = useState(false);

  return (
    <nav>
      <a href="/" className="title">
        OlaDev
      </a>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <a href="#about" onClick={() => setMenuOpen(!menuOpen)}>
            About Me
          </a>
        </li>
        <li>
          <a href="#services" onClick={() => setMenuOpen(!menuOpen)}>
            Services
          </a>
        </li>
        <li>
          <a href="#experience" onClick={() => setMenuOpen(!menuOpen)}>
            Experience
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={() => setMenuOpen(!menuOpen)}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setMenuOpen(!menuOpen)}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
