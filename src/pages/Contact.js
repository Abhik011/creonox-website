import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
import { Helmet } from 'react-helmet';

function Contact() {
  return (

    <>
    <Helmet>
  <title>Contact Creonox – Let’s Build Something Great</title>
  <meta name="description" content="Ready to start your project? Contact Creonox Technologies to collaborate on custom websites, apps, and branding solutions." />
</Helmet>

    <div className="contact-page">
      {/* Hero */}
      <div className="contact-hero">
        <h1>Let’s Talk</h1>
        <p>Have an idea? A question? We’re here to help.</p>
      </div>

      {/* Contact Form */}
      <div className="contact-form-section">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Contact Info</h3>
          <p>📧 contact.creonox@gmail.com</p>
          <p>📞 +91 74987 22304</p>
          <p>🌍 Panvel, Maharashtra</p>
        </div>
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
  <Link to="/portfolio"><p>Portfolio</p></Link>
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
    </>
  );
}

export default Contact;
