import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import Servicesimages from '../assets/servicestec.png';

function Services() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal-on-scroll");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // Animate once
        }
      });
    }, {
      threshold: 0.1,
    });

    reveals.forEach((el) => observer.observe(el));

    return () => {
      reveals.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <div className="bg">
        <div className="services-hero ">
          <div className="hero-content reveal-on-scroll">
            <h1 className="heading-left reveal-on-scroll-shake">Build Better.</h1>
            <h2 className="heading-right">
              Launch <span>Smarter.</span>
            </h2>
            <p className="tagline">
              We craft powerful digital products that solve problems and spark growth.
            </p>
          </div>

          <div className="hero-image reveal-on-scroll">
            <img src={Servicesimages} alt="Tech Illustration" />
          </div>
        </div>

        <div className="services-section reveal-on-scroll">
          <h2 className="services-heading">What We Offer</h2>
          <div className="services-grid">
            <div className="service-card reveal-on-scroll">
              <img src="https://cdn-icons-png.flaticon.com/128/841/841364.png" alt="Website" />
              <h3>Website Development</h3>
              <p>Modern, responsive websites tailored to your brand and goals.</p>
            </div>
            <div className="service-card reveal-on-scroll">
              <img src="https://cdn-icons-png.flaticon.com/128/4208/4208394.png" alt="Mobile App" />
              <h3>Mobile App Development</h3>
              <p>High-performance Android and iOS apps built to scale.</p>
            </div>
            <div className="service-card reveal-on-scroll">
              <img src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png" alt="UI/UX" />
              <h3>UI/UX Design</h3>
              <p>Intuitive, engaging interfaces that enhance user experience.</p>
            </div>
          </div>
        </div>

        <div className="why-choose-section reveal-on-scroll">
          <h2 className="why-heading">Why Choose Creonox?</h2>
          <div className="why-grid">
            <div className="why-box reveal-on-scroll">
              <h4>Fast & Reliable</h4>
              <p>We deliver top-tier work on time — every time.</p>
            </div>
            <div className="why-box reveal-on-scroll">
              <h4>Client-Centric</h4>
              <p>Your goals guide every decision we make.</p>
            </div>
            <div className="why-box reveal-on-scroll">
              <h4>Scalable Tech</h4>
              <p>Our solutions grow with your business needs.</p>
            </div>
            <div className="why-box reveal-on-scroll">
              <h4>End-to-End Support</h4>
              <p>From idea to deployment — we’re with you all the way.</p>
            </div>
          </div>
        </div>

        <div className="services-cta reveal-on-scroll">
          <h2>Let’s Build Something Amazing Together</h2>
          <p>Get in touch with our team and turn your vision into a scalable digital product.</p>
          <div className="cta-btn-wrapper">
            <Link to="/contact"><button className="cta-btn">Start Your Project</button></Link>
          </div>
        </div>
      </div>

      <div className="tech-stack-section reveal-on-scroll">
        <h2 className="tech-heading">Technologies We Use</h2>
        <div className="tech-grid">
          {[
            { name: 'React.js', img: 'https://cdn-icons-png.flaticon.com/128/1126/1126012.png' },
            { name: 'Node.js', img: 'https://cdn-icons-png.flaticon.com/128/919/919825.png' },
            { name: 'HTML5', img: 'https://cdn-icons-png.flaticon.com/128/732/732190.png' },
            { name: 'CSS3', img: 'https://cdn-icons-png.flaticon.com/128/732/732190.png' },
            { name: 'JavaScript', img: 'https://cdn-icons-png.flaticon.com/128/6132/6132221.png' },
            { name: 'MongoDB', img: 'https://cdn-icons-png.flaticon.com/128/732/732212.png' },
          ].map((tech, index) => (
            <div key={index} className="tech-logo reveal-on-scroll">
              <img src={tech.img} alt={tech.name} />
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
  <div className="footer-shapes ">
    <div className="shape cube"></div>
    <div className="shape zigzag"></div>
    <svg className="shape line-svg" viewBox="0 0 300 10" preserveAspectRatio="none">
      <line x1="0" y1="5" x2="300" y2="5" stroke="#999" strokeWidth="2" strokeDasharray="10,5" />
    </svg>
  </div>

  <div className="footer-cols reveal-on-scroll">
    <div className="footer-col ">
      <h3>CREONOX</h3>
      <p>Turning ideas into reality — one line of code at a time.</p>
    </div>

    <div className="footer-col reveal-on-scroll">
  <h4>Quick Links</h4>
  <Link to="/"><p>Home</p></Link>
  <Link to="/about"><p>About</p></Link>
  <Link to="/services"><p>Services</p></Link>
  {/* <Link to="/portfolio"><p>Portfolio</p></Link> */}
  <Link to="/contact"><p>Contact</p></Link>
</div>

    <div className="footer-col reveal-on-scroll">
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

export default Services;
