import { useState } from "react";

const faqs = [
  {
    q: "Does my child need any prior experience in coding or robotics?",
    a: "Not at all! This workshop is designed for complete beginners. Our expert instructors start from the very basics and guide children step by step. All you need is curiosity and enthusiasm!",
  },
  {
    q: "What tools or equipment will my child need?",
    a: "Just a laptop or desktop with a stable internet connection. All software tools used in the workshop are free, browser-based, and easy to set up. We'll send a setup guide before the first session.",
  },
  {
    q: "How are the live sessions conducted?",
    a: "Sessions run live via Zoom, Monday to Friday, for 1.5 hours each day. All sessions are recorded and accessible for 30 days so your child never misses a beat.",
  },
  {
    q: "What is the refund policy?",
    a: "We offer a full refund if requested within 3 days of purchase, or if you cancel before the workshop begins. Once the programme starts, we offer a 50% refund within the first week.",
  },
  {
    q: "Will there be a certificate at the end?",
    a: "Yes! Every child who completes the workshop and submits their final project will receive a verified digital certificate that can be shared on LinkedIn, school portfolios, and more.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Got Questions?</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Can't find what you're looking for? Reach us at{" "}
            <a href="mailto:hello@kidrove.com" className="faq-link">
              hello@kidrove.com
            </a>
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div
              className={`faq-item ${openIndex === i ? "open" : ""}`}
              key={i}
            >
              <button
                className="faq-question"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span>{faq.q}</span>
                <span className="faq-icon">{openIndex === i ? "−" : "+"}</span>
              </button>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
