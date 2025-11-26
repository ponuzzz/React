import React from "react";
import "./contact.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Get in <span>touch</span></h1>

            <div className="contact-wrapper">

                {/* ---------- LEFT SIDE ---------- */}
                <div className="contact-left">
                    <h2 className="contact-heading">
                        Let's <span>talk</span>
                    </h2>

                    <p className="contact-description">
                        I'm currently available to take on new projects, so feel free to
                        send me a message about anything that you want me to work on.
                        You can contact anytime.
                    </p>

                    <div className="contact-info">
                        <p>
                            <FaEnvelope className="icon" /> greatstackdev@gmail.com
                        </p>
                        <p>
                            <FaPhoneAlt className="icon" /> +772-825-524
                        </p>
                        <p>
                            <FaMapMarkerAlt className="icon" /> CA, United States
                        </p>
                    </div>
                </div>

                {/* ---------- RIGHT SIDE ---------- */}
                <div className="contact-right">
                    <form className="contact-form">
                        <label>Your Name</label>
                        <input type="text" placeholder="Enter your name" />

                        <label>Your Email</label>
                        <input type="email" placeholder="Enter your email" />

                        <label>Write your message here</label>
                        <textarea placeholder="Enter your message"></textarea>

                        <button type="submit" className="submit-btn">
                            Submit now
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;