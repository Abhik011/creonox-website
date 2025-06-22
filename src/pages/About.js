import React, { useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import './About.css';
import manasi from "../assets/manasi-sonje.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';


function About() {
  const ctaRef = useRef();

  useEffect(() => {
    // --- Tilt Effect ---
    const el = ctaRef.current;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      el.style.transform = `rotateX(0deg) rotateY(0deg)`;
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    // --- Scroll Reveal ---
    const reveals = document.querySelectorAll(".reveal-on-scroll");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach((el) => observer.observe(el));

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div className="About-hero reveal-on-scroll">
        <div className="About-content reveal-on-scroll">
          <h1>Not Just Developer</h1>
          <h3>–Problem Solvers</h3>
          <p>
            At Creonox, we go beyond code — we solve real problems with smart, scalable digital solutions.
            Our focus is simple: build fast, build right, and build what matters.
          </p>
          <div className="About-btn-wrapper">
            <Link to="/services"><button className="about-btn">Get Started</button></Link>
          </div>
        </div>
      </div>

      <div className="About-who reveal-on-scroll" >
        <div className="who-content">
          <div className="who-grid">
            <div className="who-text">
              <h2>Who We Are</h2>
              <p>
                Creonox is a team of thinkers, makers, and problem-solvers dedicated to turning ideas into powerful digital products.
              </p>
            </div>
            <div className="who-image">
              <img src="https://img.freepik.com/free-vector/team-concept-illustration_114360-595.jpg" alt="Who We Are" />
            </div>
          </div>
        </div>
      </div>

      <div className="About-what reveal-on-scroll">
        <div className="what-content">
          <div className="what-grid">
            <div className="what-image">
              <img src="https://img.freepik.com/free-vector/design-team-concept-illustration_114360-600.jpg" alt="What We Do" />
            </div>
            <div className="what-text">
              <h2>What We Do</h2>
              <p>
                We build modern websites, apps, and digital systems that solve real-world problems and drive results.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="About-mission-vision reveal-on-scroll">
        <div className="mv-wrapper">
          <div className="mv-block">
            <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="Mission" />
            <h3>Our Mission</h3>
            <p>Empowering startups and businesses with cutting-edge tech to solve real-world problems.</p>
          </div>
          <div className="mv-block">
            <img src="https://cdn-icons-png.flaticon.com/128/3208/3208720.png" alt="Vision" />
            <h3>Our Vision</h3>
            <p>To be a globally trusted tech partner driving meaningful digital transformation.</p>
          </div>
        </div>
      </div>

      <div className="About-values reveal-on-scroll">
        <h2>Our Core Values</h2>
        <p className="values-subtext">The principles that drive our culture and client success.</p>
        <div className="values-grid">
          <div className="value-card">
            <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="Integrity" />
            <h4>Integrity</h4>
            <p>Transparency and trust in everything we do.</p>
          </div>
          <div className="value-card">
            <img src="https://cdn-icons-png.flaticon.com/128/1674/1674291.png" alt="Innovation" />
            <h4>Innovation</h4>
            <p>Continuously improving with the latest technologies.</p>
          </div>
          <div className="value-card">
            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828961.png" alt="Quality" />
            <h4>Quality</h4>
            <p>Code, design, and performance that speaks for itself.</p>
          </div>
          <div className="value-card">
            <img src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png" alt="Client First" />
            <h4>Client First</h4>
            <p>Your success is our mission.</p>
          </div>
        </div>
      </div>

      <div className="About-team reveal-on-scroll">
  <h2>Meet Our Team</h2>
  <p className="team-subtext">Passionate designers, developers, and innovators.</p>
  <div className="team-grid">
  <div className="team-card">
  <img
    src="https://media.licdn.com/dms/image/v2/D5603AQHRhx-1b6YIEw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729068572294?e=1753920000&v=beta&t=6oOpWP4V0hRQZBMV9l-ppzk0J3FB6bSWfoi_TZftAUE"
    alt="Abhijeet"
  />
  <h4>Abhijeet Kulkarni</h4>
  <p>Founder & CEO</p>
  <div className="team-socials">
    <a href="https://www.linkedin.com/in/abhijeet-kulkarni-2a0892321/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
    <a href="https://github.com/Abhik011" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faGithub} />
    </a>
    <a href="https://www.instagram.com/creonox.founder" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faInstagram} />
    </a>
  </div>
</div>

<div className="team-card">
<img src={manasi} alt="Manasi" />
<h4>Manasi Sonje</h4>
      <p>COO</p>
  <div className="team-socials">
    <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faGithub} />
    </a>
    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faInstagram} />
    </a>
  </div>
</div>
  </div>
</div>


      <div className="cta-tilt-wrapper reveal-on-scroll">
        <div className="About-cta" ref={ctaRef}>
          <h2>Ready to Build Something Great?</h2>
          <p>
            Let’s bring your ideas to life — with strategy, design, and development tailored to your goals.
          </p>
          <div className="cta-btn-wrapper">
            <Link to="/contact"><button className="cta-btn">Let’s Work Together</button></Link>
          </div>
        </div>
      </div>

      <footer className="footer">
  <div className="footer-shapes reveal-on-scroll">
    <div className="shape cube"></div>
    <div className="shape zigzag"></div>
    <svg className="shape line-svg" viewBox="0 0 300 10" preserveAspectRatio="none">
      <line x1="0" y1="5" x2="300" y2="5" stroke="#999" strokeWidth="2" strokeDasharray="10,5" />
    </svg>
  </div>

  <div className="footer-cols reveal-on-scroll">
    <div className="footer-col">
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

export default About;
