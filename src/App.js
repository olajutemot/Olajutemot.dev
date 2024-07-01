import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Sernice/Service";
import Experience from "./Components/Experience/Experience";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import "./App.css";

function App() {
  return (
    <div className="Main-container">
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Services />
        <Experience />
      </div>
      <Contact />
    </div>
  );
}

export default App;
