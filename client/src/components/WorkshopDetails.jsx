const details = [
  { icon: "👧", label: "Age Group", value: "8–14 Years" },
  { icon: "📅", label: "Duration", value: "4 Weeks" },
  { icon: "💻", label: "Mode", value: "Online (Live)" },
  { icon: "💰", label: "Fee", value: "₹2,999" },
  { icon: "🚀", label: "Start Date", value: "15 July 2026" },
  { icon: "📜", label: "Certificate", value: "Yes, on Completion" },
];

export default function WorkshopDetails() {
  return (
    <section className="section details-section" id="details">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Workshop At A Glance</span>
          <h2 className="section-title">Everything You Need to Know</h2>
          <p className="section-subtitle">
            A structured, fun-filled programme designed by educators and tech enthusiasts
            to give your child a head start in the AI era.
          </p>
        </div>

        <div className="details-grid">
          {details.map((d) => (
            <div className="detail-card" key={d.label}>
              <div className="detail-icon">{d.icon}</div>
              <div className="detail-info">
                <span className="detail-label">{d.label}</span>
                <span className="detail-value">{d.value}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="details-cta">
          <a href="#register" className="btn btn-primary">
            Reserve Your Spot
          </a>
        </div>
      </div>
    </section>
  );
}
