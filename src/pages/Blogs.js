import React from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css';
import whywebsite2025imageb from "../assets/8744789.jpg";
import AiAndUXBlogimages from '../assets/AiAndUXBlog.png';
import startupimages from '../assets/StartupMistakesBlog.png';
import GPMM from '../assets/GooglePasswordManager.png';


function Blogs() {
  return (
    <div className="blogs-page">
      {/* Hero Section */}
      <div className="blogs-hero">
        <h1><span className="gradient-text">Innovate. Educate. Inspire.</span></h1>

        <p>Read how we’re shaping digital success — one post at a time.</p>
      </div>

      {/* Blog Cards */}
      <div className="blog-grid">
        <div className="blog-card">
          <img src={whywebsite2025imageb} alt="Blog 1" />
          <h3>Why Your Business Needs a Website in 2025</h3>
          <p>Discover how an online presence builds trust, boosts leads, and grows revenue.</p>
          <br />
          <Link to="/whywebsite2025"><h5>Learn more...</h5></Link>
        </div>

        <div className="blog-card">
          <img src={AiAndUXBlogimages} alt="Blog 2" />
          <h3>AI and UX: A Perfect Match</h3>
          <p>How AI is transforming user experience and product interfaces.</p>
          <br />
          <Link to="/AiAndUXBlog"><h5>Learn more...</h5></Link>
        </div>

        <div className="blog-card">
          <img src={startupimages} alt="Blog 3" />
          <h3>5 Startup Mistakes to Avoid When Building an App</h3>
          <p>Learn what early-stage founders get wrong—and how to avoid them.</p>
               <br />
          <Link to="/StartupMistakesBlog"><h5>Learn more...</h5></Link>
        </div>
        <div className="blog-card">
          <img src={GPMM} alt="Blog 3" />
          <h3>Master Your Digital Security with Google Password Manager</h3>
          <p>Learn how to manage, protect, and simplify your passwords using Google Password Manager. </p>
               <br />
          <Link to="/GooglePasswordManager"><h5>Learn more...</h5></Link>
        </div>
      </div>
      {/* Editor’s Picks Section */}

      {/* CTA */}
      <div className="blogs-cta">
        <h2>Have an Idea Worth Sharing?</h2>
        <p>Let us help you turn your story into something impactful.</p>
        <Link to="/contact"><button className="cta-btn">Submit Your Story</button></Link>
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

export default Blogs;
