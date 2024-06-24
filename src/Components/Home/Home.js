import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="Hero-section">
      <h1>
        I'm a{" "}
        <div className="hero-message">
          FULL STACK <br /> SOFTWARE <br /> DEVELOPER
        </div>
      </h1>
      <button className="button1">Previous projects</button>
    </div>
  );
};

export default Home;
