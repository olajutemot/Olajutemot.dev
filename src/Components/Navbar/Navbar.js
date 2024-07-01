import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <div className="container">
    //   <nav className="navbar">
    //     <h1 className="navbar-title">OlaDev</h1>
    //     <button
    //       className={`navbar-toggler ${isOpen ? "open" : ""}`}
    //       onClick={() => setIsOpen(!isOpen)}
    //     >
    //       <span className="toggler-icon"></span>
    //       <span className="toggler-icon"></span>
    //       <span className="toggler-icon"></span>
    //       {/* This can be styled as a hamburger icon */}
    //     </button>
    //     <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
    //       <li>
    //         <a href="#home">Home</a>
    //       </li>
    //       <li>
    //         <a href="#about">About Me</a>
    //       </li>
    //       <li>
    //         <a href="#services">Services</a>
    //       </li>
    //       <li>
    //         <a href="#experience">Experience</a>
    //       </li>
    //       <li>
    //         <a href="#portfolio">Portfolio</a>
    //       </li>
    //       <li>
    //         <a href="#contact" id="contact">
    //           Contact
    //         </a>
    //       </li>
    //     </ul>
    //   </nav>
    // </div>
    <div className="nav-conatiner container">
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/">OlaDev</a>
        </div>

        <button
          className={`navbar-toggler ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
          {/* This can be styled as a hamburger icon */}
        </button>

        <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
          <a href="#home" className="navbar-link">
            HOME
          </a>
          <a href="/about" className="navbar-link">
            ABOUT
          </a>
          <a href="/#" className="navbar-link">
            CODINGNIGHTSCHOOL
          </a>

          <button
            type=""
            onClick={() => {
              window.location.href = "/portfolio";
            }}
          >
            portfolio
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
