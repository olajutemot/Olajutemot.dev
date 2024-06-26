import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-section">
      <h2 className="Contact-header">Contact</h2>
      <div className="Contact-container">
        <div className="Contact-details">
          <h4>Drop Me a Message</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <div className="Contacts">
            <dir>
              <i class="fa-solid fa-phone"></i>
              <p>+2348064242923</p>
            </dir>
            <dir>
              <i class="fa-solid fa-envelope"></i>
              <p>olajutemot@gmail.com</p>
            </dir>
            <dir>
              <i class="fa-solid fa-location-dot"></i>
              <p>Palm groove, Ikeja Lagos</p>
            </dir>
          </div>
        </div>
        <div className="Contact-form">
          <form>
            <input type="text" placeholder="Name" id="Name" />
            <input type="email" placeholder="Email" id="Email" />
            <textarea
              id="Message"
              name="Message"
              rows="4"
              cols="30"
              placeholder="Message."
            ></textarea>

            <input type="submit" value="Send" id="Submit" />
          </form>
        </div>
      </div>
      <hr></hr>
      <div>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-linkedin"></i>
      </div>
    </div>
  );
};

export default Contact;