import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#" className="navbar-brand">
          <span className="brand-kid">Kid</span>
          <span className="brand-rove">rove</span>
          <span className="brand-dot">.</span>
        </a>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#details" onClick={() => setMenuOpen(false)}>Details</a></li>
          <li><a href="#outcomes" onClick={() => setMenuOpen(false)}>What You'll Learn</a></li>
          <li><a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a></li>
          <li>
            <a href="#register" className="nav-cta" onClick={() => setMenuOpen(false)}>
              Enroll Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
