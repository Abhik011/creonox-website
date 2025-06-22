import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-container">
        <img src={logo} alt="Logo" className="site-logo" />

        <button className="nav-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <NavLink to="/" onClick={closeMenu} className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>About</NavLink>
          <NavLink to="/services" onClick={closeMenu} className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>Services</NavLink>
          <NavLink to="/blogs" onClick={closeMenu} className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>Blogs</NavLink>
          {/* <NavLink to="/portfolio" onClick={closeMenu} className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>Portfolio</NavLink> */}
          <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
