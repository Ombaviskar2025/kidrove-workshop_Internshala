const outcomes = [
  {
    num: "01",
    title: "Understand AI Fundamentals",
    desc: "Learn what AI is, how machine learning works, and explore real-world applications shaping our future.",
  },
  {
    num: "02",
    title: "Build & Program Robots",
    desc: "Assemble and code virtual robots, bringing concepts to life with hands-on simulation tools.",
  },
  {
    num: "03",
    title: "Create Your First AI Model",
    desc: "Train a simple image recognition model using beginner-friendly tools — no coding experience required!",
  },
  {
    num: "04",
    title: "Develop Computational Thinking",
    desc: "Strengthen problem-solving and logical thinking skills that go far beyond technology.",
  },
  {
    num: "05",
    title: "Collaborate & Communicate",
    desc: "Work in teams on exciting projects and present your creations with confidence to peers and mentors.",
  },
  {
    num: "06",
    title: "Earn a Verified Certificate",
    desc: "Receive a certificate of completion that celebrates your child's achievement and boosts their portfolio.",
  },
];

export default function LearningOutcomes() {
  return (
    <section className="section outcomes-section" id="outcomes">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Learning Outcomes</span>
          <h2 className="section-title">What Your Child Will Learn</h2>
          <p className="section-subtitle">
            By the end of this 4-week workshop, your child will walk away with
            real skills, real projects, and real confidence.
          </p>
        </div>

        <div className="outcomes-grid">
          {outcomes.map((o) => (
            <div className="outcome-card" key={o.num}>
              <span className="outcome-num">{o.num}</span>
              <div className="outcome-body">
                <h3 className="outcome-title">{o.title}</h3>
                <p className="outcome-desc">{o.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
