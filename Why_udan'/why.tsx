import React from "react";
import "./why.css";

const WhyUdaan = () => {
  return (
    <div className="page">
      <nav className="nav">
        <div className="nav-left">
          <div className="logo-circle">U</div>
          <div>
            <h3 className="logo-title">UDAAN</h3>
            <p className="logo-sub">Why Udaan</p>
          </div>
        </div>
        <div className="nav-links">
          <a href="/home">Home</a>
          <a href="/courses">Courses</a>
          <a href="/admission">Admission</a>
          <a href="/why-udaan" className="active">
            Why Udaan
          </a>
        </div>
      </nav>

      <section className="hero">
        <h1>
          Why Choose <span className="highlight">UDAAN</span>
        </h1>
        <p>Focused mentorship, advanced learning systems, and results-driven culture.</p>
      </section>

      <section className="features">
        <div className="card">
          <h3>Expert Faculty</h3>
          <p>Guidance by IITians and medical professionals.</p>
        </div>
        <div className="card">
          <h3>AI Assisted Learning</h3>
          <p>Adaptive assessments and personalized feedback.</p>
        </div>
        <div className="card">
          <h3>Scholarship Pathway</h3>
          <p>UPSE support to help deserving students reduce fees.</p>
        </div>
      </section>

      <section className="cta">
        <h2>Experience a smarter way to prepare</h2>
        <button className="btn-white">Explore Programs</button>
      </section>

      <footer className="footer">© 2026 Udaan Coaching Institute</footer>
    </div>
  );
};

export default WhyUdaan;
