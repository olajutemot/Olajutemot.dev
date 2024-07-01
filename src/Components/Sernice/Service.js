import React from "react";
import "./Service.css";

const Service = () => {
  return (
    <div className="Services-section" id="services">
      <h2 className="service-header">Services</h2>
      <div className="Services">
        <div className="service">
          <dir>
            <i class="fa-brands fa-dev"></i>
            <h2>Website Development</h2>
          </dir>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="service">
          <dir>
            <i class="fa-solid fa-mobile"></i>
            <h2>Mobile App Development</h2>
          </dir>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="service">
          <dir>
            <i class="fa-solid fa-desktop"></i>
            <h2>Desktop App Development</h2>
          </dir>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="service">
          <dir>
            <i class="fa-brands fa-wordpress"></i>
            <h2>WordPress Websites </h2>
          </dir>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
