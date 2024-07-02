import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio-section container" id="portfolio">
      <h2 className="Portfolio-header">Portfolio</h2>
      <div className="Project">
        <div className="proj-details">
          <h3>PROJECT 1</h3>
          <h2>Desktop Game app</h2>
          <img
            src="menu/project tile 1.png"
            alt="project1"
            className="image-1"
          />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.{" "}
          </p>
          <a href="#readmore">
            <i class="fa-solid fa-arrow-right"></i> Read More
          </a>
        </div>
        <div className="proj-image">
          <div className="outline-b"></div>
          <img
            src="menu/project tile 1.png"
            alt="project1"
            className="image-1"
          />
        </div>
      </div>
      <div className="Project">
        <div className="proj-image">
          <div className="outline-c"></div>
          <img
            src="menu/project tile 1.png"
            alt="project1"
            className="image-2"
          />
        </div>

        <div className="proj-details">
          <h3>PROJECT 1</h3>
          <h2>Desktop Game app</h2>
          <img
            src="menu/project tile 1.png"
            alt="project1"
            className="image-1"
          />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.{" "}
          </p>
          <a href="#readmore">
            <i class="fa-solid fa-arrow-right"></i> Read More{" "}
          </a>
        </div>
      </div>
      <div className="Project">
        <div className="proj-details">
          <h3>PROJECT 1</h3>
          <h2>Desktop Game app</h2>
          <img
            src="menu/project tile 1.png"
            alt="project1"
            className="image-1"
          />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.{" "}
          </p>
          <a href="#readmore">
            <i class="fa-solid fa-arrow-right"></i> Read More{" "}
          </a>
        </div>
        <div className="proj-image">
          <div className="outline-b"></div>
          <img
            src="menu/project tile 1.png"
            alt="project1"
            className="image-1"
          />
        </div>
      </div>
      <div className="Project">
        <div className="proj-image">
          <div className="outline-c"></div>
          <img
            src="menu/project tile 1.png"
            alt="project1"
            className="image-2"
          />
        </div>
        <div className="proj-details">
          <h3>PROJECT 1</h3>
          <h2>Desktop Game app</h2>
          <img
            src="menu/project tile 1.png"
            alt="project1"
            className="image-1"
          />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.{" "}
          </p>
          <a href="#readmore">
            <i class="fa-solid fa-arrow-right"></i> Read More{" "}
          </a>
        </div>
      </div>
      <button className="button1 portfolio-button">View all</button>
    </div>
  );
};

export default Portfolio;
