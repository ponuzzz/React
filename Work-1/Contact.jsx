import React from "react";
import "./Contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-wrapper">

      
      <section className="contact-hero">
        <div className="hero-text">
          <h1>Contact <span>Diary Mates</span></h1>
          <p>We are here to help! Get in touch with us for any queries or support.</p>
        </div>
      </section>

      
      <section className="contact-cards">
        <div className="contact-card">
          <FaPhone className="contact-icon"/>
          <h3>Phone</h3>
          <p>+91 9876543210</p>
        </div>

        <div className="contact-card">
          <FaEnvelope className="contact-icon"/>
          <h3>Email</h3>
          <p>support@diarymates.com</p>
        </div>

        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon"/>
          <h3>Address</h3>
          <p>123 Dairy Farm Road, Village Name, State</p>
        </div>
      </section>

      
      <section className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required/>
          <input type="email" placeholder="Your Email" required/>
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

    </div>
  );
};

export default Contact;
