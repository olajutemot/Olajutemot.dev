import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="About-section">
      <div className="outline-a"></div>
      <img src="menu/Portfolio Headshot.jpg" alt="Timilehin" />

      <div className="About">
        <h2>ABOUT ME</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambl
        </p>
        <div className="buttons">
          <button className="button1">Hire me</button>
          <button className="button2">Resume</button>
        </div>
      </div>
    </div>
  );
};

export default About;
