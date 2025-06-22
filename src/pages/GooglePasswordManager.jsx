import React from 'react';
import { Link } from "react-router-dom"; 
import './BlogStyles.css';
import GPM from "../assets/GooglePasswordManager.png";

const GooglePasswordManager = () => {
  return (
    <>
    <div className="blog-container">
      <h1>Master Your Digital Security with Google Password Manager</h1>
      <img
        className="blog-image"
        src={GPM}
        alt="Google Password Manager illustration"
      />
      <h3>— A Guide by Creonox Technologies</h3>

      <p>
        In today’s digital-first world, one of the biggest threats to personal security is weak or reused passwords. At <strong>Creonox Technologies</strong>, we emphasize digital safety — and one of the simplest yet most powerful tools for everyday users is <strong>Google Password Manager</strong>.
      </p>

      <h2>🧩 What is Google Password Manager?</h2>
      <p>
        Google Password Manager securely stores your login credentials and syncs them across devices. Whether you use Chrome, Android, or the Google app on iOS, it’s built to protect your passwords while making access seamless.
      </p>

      <h2>🛡️ Key Features</h2>
      <ul>
        <li><strong>Secure Storage:</strong> Encrypted, safe, and private within your Google Account.</li>
        <li><strong>Auto-Fill:</strong> Seamless login on apps and websites.</li>
        <li><strong>Password Health:</strong> Detects weak or breached passwords.</li>
        <li><strong>Password Suggestions:</strong> Creates strong, unique passwords automatically.</li>
        <li><strong>Sync Across Devices:</strong> Always have your passwords — everywhere.</li>
      </ul>

      <h2>📱 How to Enable Google Password Manager</h2>

      <h3>On Chrome:</h3>
      <ul>
        <li>Open Chrome &gt; Settings &gt; Autofill &gt; Password Manager</li>
        <li>Enable "Offer to Save Passwords" and "Auto Sign-in"</li>
      </ul>

      <h3>On Android:</h3>
      <ul>
        <li>Settings &gt; Google &gt; Autofill &gt; Passwords</li>
      </ul>

      <h3>On iOS:</h3>
      <ul>
        <li>Install and open the <strong>Google</strong> app or <strong>Chrome</strong></li>
        <li>Sign in and access Password Manager</li>
      </ul>

      <h2>🔐 Best Practices for Security</h2>
      <ul>
        <li>Enable 2-Step Verification on your Google Account</li>
        <li>Never reuse the same password across different sites</li>
        <li>Update any flagged or compromised password</li>
        <li>Use strong, randomly generated passwords</li>
      </ul>

      <h2>🚀 Why Creonox Recommends It</h2>
      <p>
        We build secure platforms, apps, and websites at Creonox Technologies. Google Password Manager aligns with our values of <strong>simplicity, efficiency, and top-tier security</strong>. It empowers users to stay safe — with minimal effort.
      </p>

      <div className="cta-box">
        <h3>📢 Final Thoughts</h3>
        <p>Your passwords are your first line of defense. Don't leave them to chance. Use Google Password Manager and take control of your digital security today.</p>
      </div>

      <h2>🔗 Stay Connected</h2>
      <ul>
        <li>🌐 Website: <a href="https://www.creonox.in" target="_blank" rel="noopener noreferrer">www.creonox.in</a></li>
        <li>📧 Email: <a href="mailto:contact.creonox@gmail.com">contact.creonox@gmail.com</a></li>
        <li>📱 Phone: +91 7517050463</li>
        <li>🔗 LinkedIn: <a href="https://www.linkedin.com/company/creonox-technologies-pvt-ltd/" target="_blank" rel="noopener noreferrer">Creonox Technologies</a></li>
        <li>📸 Instagram: <a href="https://www.instagram.com/creonox.in/" target="_blank" rel="noopener noreferrer">@creonox.in</a></li>
      </ul>
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
  </>
  );
};

export default GooglePasswordManager;
