import React from "react";
import "./Fees.css";

const Fees = () => {
  return (
    <div className="page">

      {/* NAV */}
      <nav className="nav">
        <div className="logo">
          <span className="logo-main">UDAAN</span>
          <span className="logo-sub">Institute</span>
        </div>
        <button className="btn-primary">Apply Now</button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <h1>
          Detailed Fee <span>Structure</span>
        </h1>
        <p>
          Transparent and affordable education for JEE & NEET aspirants.
        </p>
      </section>

      {/* COURSE FEES TABLE */}
      <section className="section">
        <h2 className="section-title">Course Fees</h2>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Course</th>
                <th>Total Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Foundation 8th</td>
                <td>₹35,000</td>
              </tr>
              <tr>
                <td>JEE 11th</td>
                <td>₹1,25,000</td>
              </tr>
              <tr>
                <td>NEET 11th</td>
                <td>₹1,25,000</td>
              </tr>
              <tr>
                <td>JEE/NEET Dropper</td>
                <td>₹85,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* HOSTEL FEES */}
      <section className="section light">
        <h2 className="section-title">Hostel Fees</h2>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Boys</th>
                <th>Girls</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Annual</td>
                <td>₹1,10,000</td>
                <td>₹1,10,000</td>
              </tr>
              <tr>
                <td>Monthly</td>
                <td>₹10,000</td>
                <td>₹10,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* TERMS */}
      <section className="section">
        <h2 className="section-title">Terms & Conditions</h2>
        <ul className="terms">
          <li>Admission subject to seat availability.</li>
          <li>Fees once paid are non-refundable.</li>
          <li>Scholarship decisions are final.</li>
          <li>Discipline and attendance mandatory.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to start your journey?</h2>
        <div className="cta-buttons">
          <button className="btn-secondary">Call Now</button>
          <button className="btn-outline-white">Email Us</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2024 Udaan Coaching Institute</p>
      </footer>

    </div>
  );
};

export default Fees;
