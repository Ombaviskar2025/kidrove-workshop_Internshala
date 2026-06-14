export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Summer 2026 · Limited Seats
        </div>

        <h1 className="hero-title">
          AI <span className="amp">&</span> Robotics
          <br />
          <span className="hero-title-accent">Summer Workshop</span>
        </h1>

        <p className="hero-desc">
          Empower your child to build, program, and think like a creator.
          A 4-week online adventure where kids aged 8–14 explore the exciting
          world of artificial intelligence and robotics — no prior experience needed!
        </p>

        <div className="hero-tags">
          <span className="tag">🤖 Hands-on Projects</span>
          <span className="tag">🧠 AI Concepts</span>
          <span className="tag">👾 Fun &amp; Interactive</span>
          <span className="tag">🏆 Certificate</span>
        </div>

        <div className="hero-actions">
          <a href="#register" className="btn btn-primary btn-lg">
            Enroll Now — ₹2,999
          </a>
          <a href="#details" className="btn btn-ghost btn-lg">
            Learn More ↓
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">200+</span>
            <span className="stat-label">Kids Trained</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-num">4.9★</span>
            <span className="stat-label">Parent Rating</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-num">15 Jul</span>
            <span className="stat-label">Start Date</span>
          </div>
        </div>
      </div>

      <div className="hero-illustration" aria-hidden="true">
        <div className="robot-card">
          <div className="robot-screen">
            <div className="code-line c1"></div>
            <div className="code-line c2"></div>
            <div className="code-line c3"></div>
            <div className="code-line c4"></div>
          </div>
          <div className="robot-eyes">
            <div className="eye"></div>
            <div className="eye"></div>
          </div>
          <div className="robot-mouth"></div>
        </div>
      </div>
    </section>
  );
}
