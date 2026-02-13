import React from 'react';
import './FeeStructure.css';

const FeeStructure: React.FC = () => {
  return (
    <div className="page-wrapper">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-content">
            {/* Logo */}
            <div className="logo-section">
              <div className="logo-circle">
                <img
                  alt="Udaan Institute Logo"
                  className="logo-img"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVtGh2DK6kVQ99_ZH-T0yo6oydj-YWmEJH6fAQevS_bI4SKJrIGna0GcWzDOYqWDKSEuITYoxYbc5_unVCyGEAaEGRYHMwzYy8dbeG726vVqF1nJMxiUJnXQWG9dek5_dvgNedi848TBVX1IZFiMz-AkcMgCTE-A8dYbg4pIXsmzJoM15Fc5uI3u98fSvpQqx_Eb81VXmtirUcfNiwCnaX9MaY5kk-lPfe1xRnSer4KfW7Xlq7XCMWM_wJ9MP8EK6vsdGOkvbUm78"
                />
              </div>
              <div>
                <h1 className="logo-text">UDAAN</h1>
                <p className="logo-subtitle">Institute</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="nav-cta">
              <a className="btn-apply" href="#contact">Apply Now</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-bg-pattern"></div>
          
          <div className="hero-container">
            <span className="hero-badge">Empowering Dreams. Shaping Futures.</span>
            <h2 className="hero-title">
              Detailed Fee <span className="title-gradient">Structure</span>
            </h2>
            <p className="hero-description">
              Transparent and affordable education for JEE & NEET aspirants. Invest in your future with our structured learning programs.
            </p>
            <div className="hero-features">
              <div className="hero-feature">
                <span className="material-icons-round">check_circle</span>
                <span>Structured Installments</span>
              </div>
              <div className="hero-feature">
                <span className="material-icons-round">check_circle</span>
                <span>Scholarships Available</span>
              </div>
              <div className="hero-feature">
                <span className="material-icons-round">check_circle</span>
                <span>Hostel Facilities</span>
              </div>
            </div>
          </div>
        </section>

        {/* Fee Tables Section */}
        <section className="fee-tables-section">
          <div className="section-container">
            {/* Course Fees */}
            <div className="table-wrapper">
              <div className="table-header">
                <h3 className="table-title">
                  <span className="material-icons-round">school</span>
                  Course Fees
                </h3>
                <span className="update-badge">Updated for 2024-25</span>
              </div>

              <div className="table-container">
                <div className="table-scroll">
                  <table className="fee-table">
                    <thead>
                      <tr>
                        <th scope="col">Course / Class</th>
                        <th scope="col">One-Time (₹)</th>
                        <th scope="col">Installment Type</th>
                        <th scope="col">1st Inst. (₹)</th>
                        <th scope="col">2nd Inst. (₹)</th>
                        <th scope="col">3rd Inst. (₹)</th>
                        <th scope="col">4th Inst. (₹)</th>
                        <th scope="col">Total Fee (₹)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="course-name">Foundation Class 8th</td>
                        <td>30,000</td>
                        <td>One-Time / 2</td>
                        <td>20,000</td>
                        <td>15,000</td>
                        <td>—</td>
                        <td>—</td>
                        <td className="total-fee">35,000</td>
                      </tr>
                      <tr>
                        <td className="course-name">Foundation Class 9th</td>
                        <td>40,000</td>
                        <td>2 Installments</td>
                        <td>30,000</td>
                        <td>15,000</td>
                        <td>—</td>
                        <td>—</td>
                        <td className="total-fee">45,000</td>
                      </tr>
                      <tr>
                        <td className="course-name">Foundation Class 10th</td>
                        <td>40,000</td>
                        <td>2 Installments</td>
                        <td>30,000</td>
                        <td>15,000</td>
                        <td>—</td>
                        <td>—</td>
                        <td className="total-fee">45,000</td>
                      </tr>
                      <tr>
                        <td className="course-name">Foundation Combo (8-10)</td>
                        <td>1,00,000</td>
                        <td>3-Year Course</td>
                        <td>40,000</td>
                        <td>45,000</td>
                        <td>35,000</td>
                        <td>—</td>
                        <td className="total-fee">1,20,000</td>
                      </tr>
                      <tr>
                        <td className="course-name">JEE Class 11th</td>
                        <td>1,00,000</td>
                        <td>3 Installments</td>
                        <td>70,000</td>
                        <td>30,000</td>
                        <td>25,000</td>
                        <td>—</td>
                        <td className="total-fee">1,25,000</td>
                      </tr>
                      <tr>
                        <td className="course-name">JEE Class 12th</td>
                        <td>1,00,000</td>
                        <td>2 Installments</td>
                        <td>70,000</td>
                        <td>30,000</td>
                        <td>25,000</td>
                        <td>—</td>
                        <td className="total-fee">1,25,000</td>
                      </tr>
                      <tr>
                        <td className="course-name">JEE Combo (11th + 12th)</td>
                        <td>1,80,000</td>
                        <td>3 Installments</td>
                        <td>80,000</td>
                        <td>60,000</td>
                        <td>60,000</td>
                        <td>—</td>
                        <td className="total-fee">2,00,000</td>
                      </tr>
                      <tr>
                        <td className="course-name">JEE Dropper</td>
                        <td>70,000</td>
                        <td>3 Installments</td>
                        <td>50,000</td>
                        <td>20,000</td>
                        <td>15,000</td>
                        <td>—</td>
                        <td className="total-fee">85,000</td>
                      </tr>
                      <tr>
                        <td className="course-name">NEET Class 11th</td>
                        <td>1,00,000</td>
                        <td>3 Installments</td>
                        <td>70,000</td>
                        <td>30,000</td>
                        <td>25,000</td>
                        <td>—</td>
                        <td className="total-fee">1,25,000</td>
                      </tr>
                      <tr>
                        <td className="course-name">NEET Class 12th</td>
                        <td>1,00,000</td>
                        <td>2 Installments</td>
                        <td>70,000</td>
                        <td>30,000</td>
                        <td>25,000</td>
                        <td>—</td>
                        <td className="total-fee">1,25,000</td>
                      </tr>
                      <tr>
                        <td className="course-name">NEET Combo (11th + 12th)</td>
                        <td>1,80,000</td>
                        <td>3 Installments</td>
                        <td>80,000</td>
                        <td>60,000</td>
                        <td>60,000</td>
                        <td>—</td>
                        <td className="total-fee">2,00,000</td>
                      </tr>
                      <tr>
                        <td className="course-name">NEET Dropper</td>
                        <td>70,000</td>
                        <td>3 Installments</td>
                        <td>50,000</td>
                        <td>20,000</td>
                        <td>15,000</td>
                        <td>—</td>
                        <td className="total-fee">85,000</td>
                      </tr>
                      <tr>
                        <td className="course-name">Class 9th to 12th Combo</td>
                        <td>2,25,000</td>
                        <td>4 Installments</td>
                        <td>1,00,000</td>
                        <td>75,000</td>
                        <td>75,000</td>
                        <td>50,000</td>
                        <td className="total-fee">3,00,000</td>
                      </tr>
                      <tr>
                        <td className="course-name">Class 10th to 12th Combo</td>
                        <td>2,25,000</td>
                        <td>3 Installments</td>
                        <td>1,00,000</td>
                        <td>75,000</td>
                        <td>75,000</td>
                        <td>—</td>
                        <td className="total-fee">2,50,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Hostel Fees */}
            <div className="hostel-fees-section">
              <h3 className="hostel-title">
                <span className="material-icons-round">hotel</span>
                Hostel Fees
              </h3>
              <p className="hostel-subtitle">Residential facilities include accommodation and meals.</p>

              <div className="hostel-table-container">
                <table className="hostel-table">
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Boys</th>
                      <th>Girls</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="category-cell">Annual Fee</td>
                      <td>₹1,10,000 / Year</td>
                      <td>₹1,10,000 / Year</td>
                    </tr>
                    <tr>
                      <td className="category-cell">Monthly Fee</td>
                      <td>₹10,000 / Month</td>
                      <td>₹10,000 / Month</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="terms-section">
              <div className="terms-card">
                <h4 className="terms-title">
                  <span className="material-icons-round">info</span>
                  Terms & Conditions
                </h4>
                <ul className="terms-list">
                  <li>
                    <span className="bullet"></span>
                    Admission is subject to availability of seats.
                  </li>
                  <li>
                    <span className="bullet"></span>
                    Fees once paid are <span className="non-refundable">non-refundable</span>.
                  </li>
                  <li>
                    <span className="bullet"></span>
                    Scholarship decisions are final and based on internal evaluation.
                  </li>
                  <li>
                    <span className="bullet"></span>
                    Students must maintain discipline and attendance.
                  </li>
                </ul>
              </div>

              <div className="financial-aid-card">
                <h4 className="aid-title">Need Financial Aid?</h4>
                <p className="aid-description">
                  We offer scholarships for meritorious and economically deserving students through our <span className="highlight">Udaan Pratibha Search Exam (UPSE)</span>.
                </p>
                <button className="aid-btn">
                  Check Scholarship Details <span className="material-icons-round">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Invest Section */}
        <section className="why-invest-section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Why Invest in Udaan?</h2>
              <p className="section-description">Beyond coaching, we provide a complete ecosystem for success.</p>
            </div>

            <div className="benefits-grid">
              {/* Benefit 1 */}
              <div className="benefit-card">
                <div className="benefit-icon green-icon">
                  <span className="material-icons-round">laptop_mac</span>
                </div>
                <h3 className="benefit-title">Udaan Dost</h3>
                <p className="benefit-text">
                  AI-powered, laptop-based learning system designed specifically for our institutes. Focused study without distractions.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="benefit-card">
                <div className="benefit-icon orange-icon">
                  <span className="material-icons-round">school</span>
                </div>
                <h3 className="benefit-title">Expert Faculty</h3>
                <p className="benefit-text">
                  Classes taught by experienced IITians and Doctors. Personal attention with small batch sizes.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="benefit-card">
                <div className="benefit-icon blue-icon">
                  <span className="material-icons-round">trending_up</span>
                </div>
                <h3 className="benefit-title">Proven Results</h3>
                <p className="benefit-text">
                  Consistent excellent board results and growing number of successful JEE & NEET qualifiers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-pattern"></div>
          <div className="cta-container">
            <h2 className="cta-title">Ready to start your journey?</h2>
            <p className="cta-description">Contact us today to schedule a counseling session or take the admission test.</p>
            <div className="cta-buttons">
              <a className="cta-btn primary" href="tel:+918793154040">
                <span className="material-icons-round">call</span> Call +91-8793154040
              </a>
              <a className="cta-btn secondary" href="mailto:contact@udaaninstitute.com">
                <span className="material-icons-round">email</span> Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Address Column */}
            <div>
              <div className="footer-brand">
                <div className="footer-logo-circle">U</div>
                <span className="footer-brand-text">Udaan Institute</span>
              </div>
              <p className="footer-address">
                Inamdar Nagar, Orchid City, <br />
                Bhigwan Road, Baramati, <br />
                Pune, Maharashtra, 413102.
              </p>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="footer-heading">Contact</h3>
              <ul className="footer-contact">
                <li>
                  <span className="material-icons-round">phone</span>
                  +91-8793154040 / +91-8793164040
                </li>
                <li>
                  <span className="material-icons-round">email</span>
                  <a href="mailto:contact@udaaninstitute.com">contact@udaaninstitute.com</a>
                </li>
                <li>
                  <span className="material-icons-round">chat</span>
                  WhatsApp Available
                </li>
              </ul>
            </div>

            {/* Connect Column */}
            <div>
              <h3 className="footer-heading">Connect</h3>
              <div className="social-links">
                <a href="#" className="social-link instagram">
                  <svg fill="currentColor" height="20" viewBox="0 0 24 24" width="20">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
                <a href="#" className="social-link facebook">
                  <svg fill="currentColor" height="20" viewBox="0 0 24 24" width="20">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2024 Udaan Coaching Institute. All rights reserved. Prices subject to change without prior notice.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FeeStructure;