import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <div className="portfolio-hero">
        <h1><span>Our Work</span> Speaks for Itself</h1>
        <p>Explore the real-world impact we've created through design, code, and strategy.</p>
      </div>

      {/* Projects Grid */}
      <div className="portfolio-grid">
        <div className="project-card">
          <img src="https://img.freepik.com/free-photo/website-development-banner_23-2150416734.jpg" alt="Project 1" />
          <h3>Luxury Fashion eCommerce</h3>
          <p>A complete MERN stack build inspired by Loro Piana — responsive, elegant, and fast.</p>
        </div>

        <div className="project-card">
          <img src="https://img.freepik.com/free-photo/app-interface-design_53876-97307.jpg" alt="Project 2" />
          <h3>Recipe App (Tadka)</h3>
          <p>AI-powered Android app that recommends recipes based on ingredients and user chat.</p>
        </div>

        <div className="project-card">
          <img src="https://img.freepik.com/free-photo/marketing-strategy-planning-communication-concept_53876-125206.jpg" alt="Project 3" />
          <h3>FinderHub</h3>
          <p>Lost-and-found system for university students using Firebase and real-time chat.</p>
        </div>
      </div>

      {/* CTA */}
      <div className="portfolio-cta">
        <h2>Want to See Your Project Here?</h2>
        <p>Partner with Creonox and let's build something remarkable together.</p>
        <div className="cta-btn-wrapper">
          <Link to="/contact"><button className="cta-btn">Start Your Journey</button></Link>
        </div>
      </div>
      <footer className="footer">
  <div className="footer-shapes">
    <div className="shape cube"></div>
    <div className="shape zigzag"></div>
    <svg className="shape line-svg" viewBox="0 0 300 10" preserveAspectRatio="none">
      <line x1="0" y1="5" x2="300" y2="5" stroke="#999" strokeWidth="2" strokeDasharray="10,5" />
    </svg>
  </div>

  <div className="footer-cols">
    <div className="footer-col">
      <h3>CREONOX</h3>
      <p>Turning ideas into reality — one line of code at a time.</p>
    </div>

    <div className="footer-col">
  <h4>Quick Links</h4>
  <Link to="/"><p>Home</p></Link>
  <Link to="/about"><p>About</p></Link>
  <Link to="/services"><p>Services</p></Link>
  {/* <Link to="/portfolio"><p>Portfolio</p></Link> */}
  <Link to="/contact"><p>Contact</p></Link>
</div>
    <div className="footer-col">
      <h4>Get in Touch</h4>
      <p>📞 +91 74987 22304</p>
      <p>✉️ contact.creonox@gmail.com</p>
    </div>
  </div>

  <p className="footer-bottom">© 2025 Creonox Technologies. All rights reserved.</p>
</footer>
    </div>
  );
}

export default Portfolio;
