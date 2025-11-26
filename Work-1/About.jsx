import React from "react";
import "./About.css";
import { FaBookOpen, FaPenFancy, FaHeart, FaLeaf, FaStar } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-wrapper">

      
      <section className="about-hero">
        <div className="hero-text">
          <h1>About <span>Diary Mates</span></h1>
          <p>Your companion for modern dairy farming and diary management.</p>
        </div>
        <div className="hero-visual">
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <FaLeaf className="hero-icon" />
        </div>
      </section>

      
      <section className="about-features">
        <h2>Why Choose?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <FaBookOpen className="feature-icon"/>
            <h3>Your Digital Diary</h3>
            <p>Store memories, daily experiences, thoughts, and special moments in one place.</p>
          </div>
          <div className="feature-card">
            <FaPenFancy className="feature-icon"/>
            <h3>Write Freely</h3>
            <p>Express yourself without limits. Revisit your journey anytime.</p>
          </div>
          <div className="feature-card">
            <FaHeart className="feature-icon"/>
            <h3>Your Safe Space</h3>
            <p>Enjoy a calm, secure, and personal space for your thoughts.</p>
          </div>
        </div>
      </section>


      <section className="about-mission">
        <div className="mission-text">
          <h2>Our Mission</h2>
          <p>
            Diary Mates helps farmers track, reflect, and grow.
            We provide a modern diary management system to make daily work easier and organized.
          </p>
        </div>
        <div className="mission-visual">
          <div className="star-shape"></div>
          <FaStar className="mission-icon"/>
        </div>
      </section>

    </div>
  );
};

export default About;
