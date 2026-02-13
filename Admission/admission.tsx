import React from "react";
import "./admission.css";

const Admission = () => {
  return (
    <div className="page">
      <nav className="nav">
        <div>
          <div className="logo-main">UDAAN</div>
          <div className="logo-sub">Admissions</div>
        </div>
        <div className="nav-links">
          <a href="/home">Home</a>
          <a href="/courses">Courses</a>
          <a href="/fees">Fees</a>
          <a href="/admission" className="active">
            Admission
          </a>
        </div>
      </nav>

      <section className="hero">
        <h1>
          Admission <span>2026</span>
        </h1>
        <p>Apply for JEE, NEET, and Foundation batches in a few steps.</p>
        <div className="hero-buttons">
          <button className="btn-secondary">Apply Now</button>
          <button className="btn-outline">Download Brochure</button>
        </div>
      </section>

      <section className="section light">
        <h2 className="section-title">Why Join Udaan</h2>
        <div className="grid-3">
          <div className="card">IITian and Doctor faculty team</div>
          <div className="card">AI-powered progress tracking</div>
          <div className="card">Scholarship support through UPSE</div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Admission Steps</h2>
        <div className="grid-4">
          <div className="step">1. Register</div>
          <div className="step">2. Counseling</div>
          <div className="step">3. Scholarship Test</div>
          <div className="step">4. Confirm Seat</div>
        </div>
      </section>

      <section className="section light">
        <h2 className="section-title">Documents Required</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Document</th>
                <th>Required</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Aadhaar / ID Proof</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Previous Marksheet</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Passport Photo</td>
                <td>Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="cta">
        <h3>Seats are limited for each batch</h3>
        <button className="btn-secondary">Book Counseling</button>
      </section>

      <footer className="footer">© 2026 Udaan Coaching Institute</footer>
    </div>
  );
};

export default Admission;
