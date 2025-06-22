import React from "react";
import { Link } from "react-router-dom";
import "./BlogStyles.css";
import startupimages from '../assets/StartupMistakesBlog.png';


export default function StartupMistakesBlog() {
  return (
    <>
      <div className="blog-container">
        <h1>5 Startup Mistakes to Avoid When Building an App</h1>
        <p className="intro">
          Building your first app is exciting—but small missteps can cost you big. Here’s how to avoid the most common startup blunders.
        </p>

        <img src={startupimages} className="blog-image" alt="coverpage" />

        <h2>1. Skipping Proper Market Validation</h2>
        <p>
          Many founders dive into development without knowing if their app solves a real problem. Validate your idea with potential users through surveys, interviews, or landing pages before you write a single line of code.
        </p>

        <h2>2. Building Too Much, Too Soon</h2>
        <p>
          Trying to launch with a feature-heavy product can delay release and drain resources. Focus on your MVP (Minimum Viable Product)—what is the simplest version that delivers core value?
        </p>

        <img src="https://img.freepik.com/free-photo/online-marketing_53876-176744.jpg?uid=R101901710&ga=GA1.1.2120283610.1743746655&semt=ais_items_boosted&w=740" alt="Minimum Viable Product planning" className="blog-image" />

        <h2>3. Underestimating UI/UX Design</h2>
        <p>
          A clunky interface or confusing navigation can kill a great idea. Design isn’t just aesthetics—it’s how users experience your product. Invest in clear flows, intuitive actions, and mobile-first responsiveness.
        </p>

        <h2>4. Not Planning for Scalability</h2>
        <p>
          Your backend must scale with your growth. Choosing cheap or limited tech early may force a rebuild later. Use scalable stacks like MERN, Firebase, or cloud services to future-proof your app.
        </p>

        <h2>5. Launching Without a Marketing Plan</h2>
        <p>
          “Build it and they will come” is a myth. Launch your app with a go-to-market strategy: build a waitlist, use social media teasers, and run targeted ads. Early traction depends on awareness.
        </p>

        <h2>🚀 Final Takeaway</h2>
        <p>
          Every successful app starts with strategy—not just code. Avoiding these 5 mistakes helps you save money, move faster, and create something users truly want.
        </p>

        <div className="contact-box">
          <h3>💡 Need Help Launching Your App?</h3>
          <p>
            <strong>Creonox Technologies</strong> can help you design, develop, and scale your startup idea with confidence.
          </p>
          <p>📧 Email: <a href="mailto:contact.creonox@gmail.com">contact.creonox@gmail.com</a></p>
        </div>
      </div>

      {/* Footer */}
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
            <h3>CREONOX </h3>
            <p>Turning ideas into reality — one line of code at a time.</p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <Link to="/"><p>Home</p></Link>
            <Link to="/about"><p>About</p></Link>
            <Link to="/services"><p>Services</p></Link>
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
