import React from "react";
import { Link } from "react-router-dom";
import "./BlogStyles.css";
import WhyWebsite2025images from "../assets/8744789.jpg";
export default function WhyWebsite2025() {
  return (
    <>
      <div className="blog-container">
        <h1>Why Your Business Needs a Website in 2025</h1>
        <p className="intro">
          Discover how an online presence builds trust, boosts leads, and grows revenue. In an era where attention spans are short and digital touchpoints define trust, your website is the front door to your business.
        </p>

        <img
          src={WhyWebsite2025images}
          alt="Business website illustration"
          className="blog-image"
        />

        <h2>1. First Impressions Start Online</h2>
        <p>
          Consumers now expect businesses to have a strong digital identity. In fact, 75% of people judge a company’s credibility based on their website design. A mobile-friendly, fast-loading, visually appealing website sets the tone for trust and professionalism.
        </p>
        <img
          src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149051555.jpg?uid=R101901710&ga=GA1.1.2120283610.1743746655&semt=ais_items_boosted&w=740"
          alt="User interface design"
          className="blog-image"
        />

        <h2>2. 24/7 Online Presence = More Leads</h2>
        <p>
          A website never sleeps. Whether it’s 3 AM or Sunday afternoon, your potential customers can learn about your services, submit inquiries, or place orders. This gives your business a competitive edge and increases revenue opportunities.
        </p>

        <h2>3. Boost Credibility and Brand Awareness</h2>
        <p>
          Having a website builds trust instantly. You can showcase customer testimonials, certifications, reviews, team members, and case studies—all of which contribute to legitimacy and credibility.
        </p>

        <h2>4. SEO Helps You Rank and Get Found</h2>
        <p>
          Search engines like Google use your website’s content, speed, structure, and keywords to determine your ranking. An SEO-optimized site can bring in thousands of organic visitors each month without spending on ads.
        </p>

        <img
          src="https://img.freepik.com/free-photo/searching-engine-optimizing-seo-browsing-concept_53876-64993.jpg?uid=R101901710&ga=GA1.1.2120283610.1743746655&semt=ais_items_boosted&w=740"
          alt="SEO optimization chart"
          className="blog-image"
        />

        <h2>5. Showcase Products, Services & Case Studies</h2>
        <p>
          A well-structured website is your best tool to showcase products, services, and portfolios. Add galleries, customer stories, or videos to build connection and trust with your audience.
        </p>

        <h2>6. Integrate Digital Marketing Efforts</h2>
        <p>
          Your website acts as the anchor for all digital marketing. Every ad, social media post, or newsletter should redirect users to your site, where they can take action—sign up, buy, or book a demo.
        </p>

        <h2>7. Track Performance & Make Data-Driven Decisions</h2>
        <p>
          With tools like Google Analytics, you can track traffic sources, bounce rates, and conversion goals. This empowers you to make smart decisions and invest in what’s actually working.
        </p>

        <h2>🔧 Bonus: Key Features Your Website Must Have in 2025</h2>
        <ul>
          <li><strong>Mobile Responsiveness:</strong> Over 65% of traffic is on mobile devices</li>
          <li><strong>Page Speed:</strong> Visitors leave if your site takes more than 3 seconds to load</li>
          <li><strong>Secure HTTPS:</strong> Builds trust and protects data</li>
          <li><strong>Call-to-Actions:</strong> Guide visitors to take the next step</li>
          <li><strong>SEO Optimization:</strong> Rank higher and stay ahead of competitors</li>
          <li><strong>Chatbot or Live Support:</strong> Boosts engagement and conversion</li>
        </ul>

        <img
          src="https://img.freepik.com/free-photo/top-view-tools-marketing_1134-83.jpg?uid=R101901710&ga=GA1.1.2120283610.1743746655&semt=ais_items_boosted&w=740"
          alt="Web optimization tools"
          className="blog-image"
        />

        <h2>🚀 Conclusion: Don’t Wait. Build Your Website Today</h2>
        <p>
          In 2025, a website is your business card, salesperson, and support agent—working 24/7 for you. Whether you’re a freelancer, local shop, or startup founder, building a great website is the first step to digital success.
        </p>

        <div className="contact-box">
          <h3>💡 Need a Website That Converts?</h3>
          <p>
            At <strong>Creonox Technologies</strong>, we design stunning, scalable websites that help you get noticed and grow. From custom web design to SEO and mobile optimization—we've got you covered.
          </p>
          <p>📧 Email: <a href="mailto:contact.creonox@gmail.com">contact.creonox@gmail.com</a></p>
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

        <div className="footer-cols ">
          <div className="footer-col ">
            <h3>CREONOX</h3>
            <p>Turning ideas into reality — one line of code at a time.</p>
          </div>

          <div className="footer-col ">
            <h4>Quick Links</h4>
            <Link to="/"><p>Home</p></Link>
            <Link to="/about"><p>About</p></Link>
            <Link to="/services"><p>Services</p></Link>
            {/* <Link to="/portfolio"><p>Portfolio</p></Link> */}
            <Link to="/contact"><p>Contact</p></Link>
          </div>

          <div className="footer-col ">
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
