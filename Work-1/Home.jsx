import React from 'react';
import './Home.css';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaLeaf, FaHeartbeat, FaChartLine, FaCogs, FaWallet, FaShoppingCart } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home">


      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Diary Mates</h1>
          <p>Your companion for modern farming and dairy management</p>
          <button>Get Started</button>
        </div>
        <div className="hero-visual">
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="circle circle3"></div>
          <FaLeaf className="hero-icon" />
        </div>
      </section>


      <section className="concepts">
        <h2>Why Choose Diary Mates?</h2>
        <div className="concept-cards">
          <div className="card">
            <FaHeartbeat className="card-icon" />
            <h3>Track Your Livestock</h3>
            <p>Keep detailed records of your livestock for better health and productivity.</p>
          </div>
          <div className="card">
            <FaChartLine className="card-icon" />
            <h3>Monitor Milk Production</h3>
            <p>Analyze trends and improve efficiency with easy-to-read reports.</p>
          </div>
          <div className="card">
            <FaLeaf className="card-icon" />
            <h3>Expert Tips</h3>
            <p>Receive farming advice tailored for your dairy farm needs.</p>
          </div>
        </div>
      </section>


      <section className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <FaCogs className="service-icon" />
            <h3>Health Monitoring</h3>
            <p>Track animal health with alerts for vaccinations and check-ups.</p>
          </div>
          <div className="service-card">
            <FaWallet className="service-icon" />
            <h3>Financial Management</h3>
            <p>Manage expenses, income, and profits effortlessly.</p>
          </div>
          <div className="service-card">
            <FaShoppingCart className="service-icon" />
            <h3>Marketplace Access</h3>
            <p>Connect with suppliers and buyers in your region.</p>
          </div>
        </div>
      </section>


      <footer>
        <div className="footer-content">
          <h3>Diary Mates</h3>
          <p>Making dairy farming smarter and easier</p>
          <div className="social-icons">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaPhone />
            <FaEnvelope />
          </div>
        </div>
        <p className="footer-bottom">&copy; 2025 Diary Mates. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default Home;
