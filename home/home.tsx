import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="page">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo-section">
            <div className="logo" />
            <div className="brand">UDAAN Institute</div>
          </div>
          <div className="nav-links">
            <a href="/home">Home</a>
            <a href="/courses">Courses</a>
            <a href="/fees">Fees</a>
            <a href="/contact" className="btn-primary">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-container">
          <div className="hero-text">
            <h1>
              Build Your <span className="gradient-text">Future</span> With Udaan
            </h1>
            <p>JEE, NEET, and Foundation courses with expert mentors.</p>
            <div className="hero-buttons">
              <a href="/admission" className="btn-secondary">
                Start Admission
              </a>
              <a href="/why-udaan" className="btn-outline">
                Why Udaan
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="courses">
        <h2>Popular Courses</h2>
        <div className="course-grid">
          <div className="course-card">JEE (Main + Advanced)</div>
          <div className="course-card">NEET (UG)</div>
          <div className="course-card">Foundation (8th-10th)</div>
        </div>
      </section>

      <section className="fees">
        <h2>Fee Overview</h2>
        <table className="fee-table">
          <thead>
            <tr>
              <th>Course</th>
              <th>Duration</th>
              <th>Approx Fees</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>JEE</td>
              <td>2 Years</td>
              <td>INR 1,20,000</td>
            </tr>
            <tr>
              <td>NEET</td>
              <td>2 Years</td>
              <td>INR 1,10,000</td>
            </tr>
            <tr>
              <td>Foundation</td>
              <td>1 Year</td>
              <td>INR 65,000</td>
            </tr>
          </tbody>
        </table>
      </section>

      <footer className="footer">© 2026 Udaan Coaching Institute</footer>
    </div>
  );
};

export default Home;
