export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-kid">Kid</span>
          <span className="brand-rove">rove</span>
          <span className="brand-dot">.</span>
          <p className="footer-tagline">
            Inspiring the next generation of creators, thinkers, and innovators.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#details">Workshop Details</a></li>
            <li><a href="#outcomes">What You'll Learn</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#register">Enroll Now</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>📧 <a href="mailto:hello@kidrove.com">hello@kidrove.com</a></p>
          <p>📞 <a href="tel:+919876543210">+91 98765 43210</a></p>
          <p>🌐 <a href="https://www.kidrove.com" target="_blank" rel="noreferrer">www.kidrove.com</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Kidrove. All rights reserved. Made with ❤️ for young learners.</p>
      </div>
    </footer>
  );
}
