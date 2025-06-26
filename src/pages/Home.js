import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./Home.css";
import computerimage from "../assets/computer-image.png";
import whywebsiteimage from "../assets/8744789.jpg";
import startupimages from '../assets/StartupMistakesBlog.png';

// 🧠 Custom Hook
function useScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal-on-scroll");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
    });

    reveals.forEach((el) => observer.observe(el));
  }, []);
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useScrollReveal(); // ✅ Call inside the component, not outside

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    < >
      {/* Dot Navigation */}

      <Helmet>
        <title>Top Mobile App Development Company India – Android, iOS, AI</title>

        <meta name="description" content="Creonox, a top mobile app development company India, builds Android, iOS, Flutter, AI apps designed to grow your business."> </meta>

      </Helmet>

      {/* Hero Section */}
      <section id="home" className="home-body reveal-on-scroll">
        <div className="bodymain">
          <h1 className="reveal-on-scroll">We Build Websites</h1>
          <h2 className="reveal-on-scroll">That Build Your Business</h2>
          <p className="reveal-on-scroll">
            Modern, responsive, and high-converting websites tailored to your brand.
          </p>
          <div className="btngs-wrapper reveal-on-scroll">
            <Link to="/services"><button className="btngs">Get Started</button></Link>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="choose" className="text-content reveal-on-scroll">
        <div className="text-main-content">
          <h3 className="reveal-on-scroll">Why Choose</h3>
          <h1 className="reveal-on-scroll">CREONOX</h1>
          <div className="div-main-content">
            <div className="features-container">
              {[
                {
                  icon: "https://cdn-icons-png.flaticon.com/128/18419/18419259.png",
                  title: "Affordable Excellence",
                  desc: "High-quality development. Startup-friendly pricing.",
                },
                {
                  icon: "https://cdn-icons-png.flaticon.com/128/11907/11907916.png",
                  title: "Expert Team",
                  desc: "Our skilled team delivers secure, scalable, and lightning-fast web & app solutions.",
                },
                {
                  icon: "https://cdn-icons-png.flaticon.com/128/2203/2203124.png",
                  title: "Fast Delivery",
                  desc: "On-time delivery without compromising quality.",
                },
              ].map((feature, index) => (
                <div className="feature-box reveal-on-scroll" key={index}>
                  <img src={feature.icon} alt={feature.title} />
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="images-feature-box reveal-on-scroll">
              <img src={computerimage} alt="Creonox computer" />
            </div>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section id="promise" className="promise-section reveal-on-scroll">
        <h3 className="reveal-on-scroll1">Our Promise</h3>
        <p className="promise-intro reveal-on-scroll1">
          At Creonox, we understand that trust is earned — and we’re here to earn yours.
        </p>
        <div className="promise-grid">
          {[
            {
              icon: "https://cdn-icons-png.flaticon.com/128/2498/2498090.png",
              title: "Startup-Friendly",
              desc: "We’re affordable, efficient, and eager to grow with you.",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/128/18724/18724838.png",
              title: "Skilled Team",
              desc: "Our developers bring passion and precision to every project.",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/128/3714/3714303.png",
              title: "Quality-First Code",
              desc: "Every line we write is optimized for speed, security, and scalability.",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/128/922/922699.png",
              title: "Custom Designs",
              desc: "No templates — only tailored solutions that reflect your brand.",
            },
          ].map((item, index) => (
            <div className="promise-feature reveal-on-scroll1" key={index}>
              <img src={item.icon} alt="icon" />
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
          <h2 className="reveal-on-scroll"><em>“We're not just building websites. We're building your trust — one project at a time.”</em></h2>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blogs" className="blogs-section reveal-on-scroll">
        <h2 className="reveal-on-scroll">Snippet of Blogs</h2>
        <p className="blogs-subtext reveal-on-scroll">
          Stay updated with smart tips, tech trends, and expert insights from the Creonox team.
        </p>

        <div className="blog-grid">
          {[{
            img: whywebsiteimage,
            title: "Why Your Business Needs a Website in 2025",
            desc: "Discover how an online presence builds trust, boosts leads, and grows revenue.",
            link: "/Whywebsite2025",
          }, {
            img: startupimages,
            title: "5 Startup Mistakes to Avoid When Building an App",
            desc: "Learn what early-stage founders get wrong—and how to avoid them.",
            link: "/StartupMistakesBlog",
          }].map((blog, i) => (
            <div className="blog-card reveal-on-scroll" key={i}>
              <img src={blog.img} alt="blog" />
              <h4>{blog.title}</h4>
              <p>{blog.desc}</p>
              <Link to={blog.link}><a>Learn more...</a></Link>
            </div>
          ))}
        </div>

        <Link to="/Blogs">
          <button className="explore-button reveal-on-scroll">Explore Blogs</button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-shapes reveal-on-scroll">
          <div className="shape cube"></div>
          <div className="shape zigzag"></div>
          <svg className="shape line-svg" viewBox="0 0 300 10" preserveAspectRatio="none">
            <line x1="0" y1="5" x2="300" y2="5" stroke="#999" strokeWidth="2" strokeDasharray="10,5" />
          </svg>
        </div>
        <div className="footer-cols">
          <div className="footer-col reveal-on-scroll">
            <h3>CREONOX</h3>
            <p>Turning ideas into reality — one line of code at a time.</p>
          </div>

          <div className="footer-col reveal-on-scroll">
            <h4>Quick Links</h4>
            <Link to="/"><p>Home</p></Link>
            <Link to="/about"><p>About</p></Link>
            <Link to="/services"><p>Services</p></Link>
            <Link to="/contact"><p>Contact</p></Link>
          </div>

          <div className="footer-col reveal-on-scroll">
            <h4>Get in Touch</h4>
            <p>📞 +91 74987 22304</p>
            <p>✉️ contact.creonox@gmail.com</p>
          </div>
        </div>

        <p className="footer-bottom reveal-on-scroll">© 2025 Creonox Technologies. All rights reserved.</p>
      </footer>
    </>
  );
}
