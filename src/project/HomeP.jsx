import React from "react";
import "./home.css"; // your CSS file

const HomeP = () => {
  return (
    <div className="hero-container">
      {/* NAVIGATION BAR */}
      <nav className="navbar">
        <div className="logo">SR</div>

        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>

        <button className="talk-btn">Let's Talk</button>
      </nav>

      {/* HERO SECTION */}
      <div className="hero-content">
        <div className="hero-text">
          <span className="badge">
            • MERN Stack Intern at Techolas Technologies
          </span>

          <h1>
            Hello, I'm <span className="highlight">Salman Rasheed</span>
          </h1>

          <h2>
            MERN Stack Developer | Currently interning at Techolas Technologies
          </h2>

          <p>
            BCA graduate currently pursuing a MERN Stack internship at Techolas
            Technologies. Passionate about creating responsive, user-friendly
            web applications with modern technologies. Let's build something
            amazing together.
          </p>

          <div className="btn-group">
            <button className="primary-btn">View My Work</button>
            <button className="secondary-btn">Contact Me</button>
          </div>
        </div>

        {/* IMAGE */}
        <div className="hero-image">
          <img src="/mnt/data/PRO.img.png" alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default HomeP;
