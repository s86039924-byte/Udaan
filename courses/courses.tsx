import React from "react";
import "./coursews.css";

const Courses = () => {
  return (
    <div className="page">
      <nav className="nav">
        <div>
          <div className="logo-main">UDAAN</div>
          <div className="logo-sub">Programs</div>
        </div>
        <div className="nav-links">
          <a href="/home">Home</a>
          <a href="/courses" className="active">
            Courses
          </a>
          <a href="/fees">Fees</a>
          <a href="/contact">Contact</a>
        </div>
        <button className="btn-primary">Apply</button>
      </nav>

      <section className="hero">
        <h1>
          Courses for <span>Every Aspirant</span>
        </h1>
        <p>Structured classroom and test systems for school + competitive exams.</p>
      </section>

      <section className="filters">
        <button className="filter active">All</button>
        <button className="filter">JEE</button>
        <button className="filter">NEET</button>
        <button className="filter">Foundation</button>
      </section>

      <section className="courses">
        <div className="card">
          <h3>JEE Main + Advanced</h3>
          <p>Two-year integrated preparation with topic-wise testing.</p>
          <button className="btn-outline">View Details</button>
        </div>
        <div className="card">
          <h3>NEET UG</h3>
          <p>Concept-first biology, physics and chemistry strategy.</p>
          <button className="btn-outline">View Details</button>
        </div>
        <div className="card">
          <h3>Foundation (8th-10th)</h3>
          <p>Olympiad and board-focused conceptual strengthening program.</p>
          <button className="btn-outline">View Details</button>
        </div>
        <div className="card">
          <h3>Crash Course</h3>
          <p>Revision-focused modules for last-mile performance improvements.</p>
          <button className="btn-outline">View Details</button>
        </div>
      </section>

      <section className="ai-section">
        <h2>AI-enabled performance analytics for each student</h2>
        <button className="btn-secondary">Try Demo</button>
      </section>

      <section className="scholarship">
        <h2>Merit Scholarships Available</h2>
      </section>

      <footer className="footer">© 2026 Udaan Coaching Institute</footer>
    </div>
  );
};

export default Courses;
