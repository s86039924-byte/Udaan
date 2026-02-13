import React from 'react';
import './Scholarships.css';

const Scholarships: React.FC = () => {
  return (
    <div className="page-wrapper">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-content">
            {/* Logo */}
            <div className="logo-section">
              <img
                alt="Udaan Institute Logo"
                className="logo-img"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhQ5QYvX6dV7A53pieVNeL81SrbQRWt2TcnG4TOlDF_ErsRffehqaGKDQtS8_t0p5OmOy7hcjU-cmU54QB1p3IqTWDv7xqyV2WkH_sBrSdOfiCP5fbTj1ZR2UO84v1cgWAK7LufDYLDzu3yX-Z4s3DfZC-tx8tw-RK1JSxx0DpM4-IQm3ZiFdrR1QszuJtJn8AVNTUY1-b7_pHMoWASGAo3stAlZMlvGwZh-zCdR6rlBNrlr9jT9aKEhObziPmEl6oLXRUZbU7qIs"
              />
              <div className="logo-text-wrapper">
                <span className="logo-text">UDAAN</span>
                <span className="logo-subtitle">Institute</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="nav-menu">
              <a className="nav-link" href="#">Home</a>
              <a className="nav-link" href="#">Courses</a>
              <a className="nav-link" href="#">Faculty</a>
              <a className="nav-link active" href="#">Admissions</a>
              <a className="btn-enroll" href="#">Enroll Now</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-bg-gradient"></div>
        
        <div className="hero-container">
          <div className="hero-content-grid">
            <div className="hero-text">
              <h1 className="hero-title">
                Unlock Your Potential with{' '}
                <span className="hero-highlight">Scholarships</span>
              </h1>
              <p className="hero-description">
                Merit should never be limited by financial constraints. Take the{' '}
                <strong>Udaan Pratibha Search Exam (UPSE)</strong> and secure up to 100% scholarship for JEE & NEET coaching.
              </p>
              <div className="hero-buttons">
                <a className="btn-primary" href="#upse-details">
                  Register for UPSE
                </a>
                <a className="btn-secondary" href="#process">
                  How it Works
                </a>
              </div>
            </div>

            <div className="hero-image-wrapper">
              <div className="hero-image-glow"></div>
              <img
                alt="Students Studying Group"
                className="hero-image"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg5WodSwqVrT_CIHfVL5fN8Qb4kb46iROa-phMWmQnzDe_ySakvYmHBvkvO9EWI-_3Q550Yd6Blg_zlm1UFlpkBDZ2Lzeq_D_HISW4qhSdLZm5NOZNtFxDURNa-Z8ofkUbfvFhEjYBg8DsSEYE3g03OBTJsg7QdT8asj_8yeNRdFACwXxPFjT8UkpW0gD_FQBBS9-ONQjt96LMJlfx5txFkGPRui-Cy-jqq6MEM1CVxsEowvm-oOjdtbfp0td8_N59OxkjbrtN2L0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* UPSE Details Section */}
      <div className="upse-section" id="upse-details">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">Opportunity Awaits</span>
            <h2 className="section-title">Udaan Pratibha Search Exam (UPSE)</h2>
            <p className="section-description">
              UPSE is not just an exam; it's a gateway to premier engineering and medical institutes. We identify and nurture talent, ensuring that deserving students get the best guidance regardless of their economic background.
            </p>
          </div>

          <div className="features-grid">
            {/* Feature 1 */}
            <div className="feature-card">
              <div className="feature-icon blue-icon">
                <span className="material-icons-outlined">school</span>
              </div>
              <h3 className="feature-title">Merit-Based Scholarships</h3>
              <p className="feature-text">
                Scholarships are awarded based on UPSE performance and previous academic records. Top performers can secure up to 100% tuition fee waiver.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="feature-card">
              <div className="feature-icon orange-icon">
                <span className="material-icons-outlined">monetization_on</span>
              </div>
              <h3 className="feature-title">Economic Support</h3>
              <p className="feature-text">
                Special financial aid provisions for economically deserving students to ensure talent never stops due to financial limitations.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="feature-card">
              <div className="feature-icon green-icon">
                <span className="material-icons-outlined">done_all</span>
              </div>
              <h3 className="feature-title">Early Admission Edge</h3>
              <p className="feature-text">
                UPSE qualifiers get priority in batch selection, better allocation, and access to our exclusive Udaan Dost AI-powered learning platform.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Admission Roadmap */}
      <section className="roadmap-section" id="process">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Admission Roadmap</h2>
            <p className="section-description">
              Your journey from application to enrollment starts here.
            </p>
          </div>

          <div className="roadmap-grid">
            {/* Step 1 */}
            <div className="roadmap-step">
              <div className="step-badge blue-badge">1</div>
              <div className="step-content">
                <h3 className="step-title">UPSE Test</h3>
                <p className="step-text">
                  Appear for Udaan Pratibha Search Exam online or at our center.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="roadmap-step">
              <div className="step-badge orange-badge">2</div>
              <div className="step-content">
                <h3 className="step-title">Result & Analysis</h3>
                <p className="step-text">
                  Receive your UPSE score and detailed performance report.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="roadmap-step">
              <div className="step-badge purple-badge">3</div>
              <div className="step-content">
                <h3 className="step-title">Counseling</h3>
                <p className="step-text">
                  One-on-one guidance session to choose the right course and batch.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="roadmap-step">
              <div className="step-badge green-badge">4</div>
              <div className="step-content">
                <h3 className="step-title">Enrollment</h3>
                <p className="step-text">
                  Complete admission formalities and begin your success journey.
                </p>
              </div>
            </div>
          </div>

          <div className="roadmap-cta">
            <button className="btn-roadmap">Apply for Admission Now →</button>
          </div>
        </div>
      </section>

      {/* Fee Structure Section */}
      <section className="fee-section">
        <div className="section-container">
          <div className="fee-header">
            <h2 className="section-title">Fee Structure Overview</h2>
            <p className="section-description">
              Transparent pricing for our comprehensive coaching programs.
            </p>
            <a href="#" className="download-link">Download Detailed Brochure ↓</a>
          </div>

          <div className="table-container">
            <table className="fee-table">
              <thead>
                <tr>
                  <th>Course / Class</th>
                  <th>One-Time Payment</th>
                  <th>Installment Type</th>
                  <th>Total Fee</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="course-cell">Foundation Class 8th</td>
                  <td className="amount-cell">₹30,000</td>
                  <td className="installment-cell">2 Installments</td>
                  <td className="total-cell">₹35,000</td>
                  <td className="action-cell">
                    <button className="btn-view">View Breakup</button>
                  </td>
                </tr>
                <tr>
                  <td className="course-cell">JEE Class 11th</td>
                  <td className="amount-cell">₹1,00,000</td>
                  <td className="installment-cell">3 Installments</td>
                  <td className="total-cell">₹1,25,000</td>
                  <td className="action-cell">
                    <button className="btn-view">View Breakup</button>
                  </td>
                </tr>
                <tr>
                  <td className="course-cell">NEET Class 11th</td>
                  <td className="amount-cell">₹1,00,000</td>
                  <td className="installment-cell">3 Installments</td>
                  <td className="total-cell">₹1,25,000</td>
                  <td className="action-cell">
                    <button className="btn-view">View Breakup</button>
                  </td>
                </tr>
                <tr>
                  <td className="course-cell">JEE/NEET Repeater</td>
                  <td className="amount-cell">₹70,000</td>
                  <td className="installment-cell">3 Installments</td>
                  <td className="total-cell">₹85,000</td>
                  <td className="action-cell">
                    <button className="btn-view">View Breakup</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="fee-note">
            * Fees are subject to change. Scholarship discounts are applied on the Total Fee. Hostel fees are separate.
          </p>
        </div>
      </section>

      {/* Guidelines Section */}
      <div className="guidelines-section">
        <div className="guidelines-container">
          <h2 className="guidelines-title">Admission Guidelines & Terms</h2>
          <div className="guidelines-list">
            <div className="guideline-card">
              <h3 className="guideline-heading">
                <span className="material-icons-outlined">info</span>
                Admission Criteria
              </h3>
              <p className="guideline-text">
                Admission is subject to availability of seats. We maintain small batch sizes for personalized attention, so early registration is recommended.
              </p>
            </div>

            <div className="guideline-card">
              <h3 className="guideline-heading">
                <span className="material-icons-outlined">verified</span>
                Scholarship Validity
              </h3>
              <p className="guideline-text">
                Scholarship decisions based on UPSE are final. To retain the scholarship in subsequent years, students must maintain discipline and meet minimum attendance and performance criteria.
              </p>
            </div>

            <div className="guideline-card">
              <h3 className="guideline-heading">
                <span className="material-icons-outlined">payments</span>
                Refund Policy
              </h3>
              <p className="guideline-text">
                Fees once paid are non-refundable. Please read the detailed terms and conditions in the brochure before enrollment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-pattern"></div>
        <div className="cta-container">
          <h2 className="cta-title">Ready to start your journey?</h2>
          <p className="cta-description">
            Join Udaan Institute and get the best guidance from IITian and Doctor faculty.
          </p>
          <div className="cta-buttons">
            <a className="btn-cta-primary" href="#">Register for UPSE</a>
            <a className="btn-cta-phone" href="tel:+918793154040">
              <span className="material-icons-outlined">call</span>
              +91-8793154040
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-brand-col">
              <div className="footer-brand">
                <span className="footer-brand-text">UDAAN</span>
                <span className="footer-brand-subtitle">Institute</span>
              </div>
              <p className="footer-tagline">
                Empowering Dreams. Shaping Futures. We provide structured and result-oriented coaching programs designed to build strong academic foundations.
              </p>
              <div className="footer-social">
                <a href="#" className="social-icon">
                  <span className="material-icons-outlined">facebook</span>
                </a>
                <a href="#" className="social-icon">
                  <span className="material-icons-outlined">email</span>
                </a>
                <a href="#" className="social-icon">
                  <span className="material-icons-outlined">chat</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Scholarship (UPSE)</a></li>
                <li><a href="#">Results</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="footer-heading">Contact Us</h4>
              <ul className="footer-contact">
                <li className="contact-item">
                  <span className="material-icons-outlined contact-icon">location_on</span>
                  <span>Udaan Institute, Inamdar Nagar, Orchid City, Bhigwan Road, Baramati, Pune - 413102</span>
                </li>
                <li className="contact-item">
                  <span className="material-icons-outlined contact-icon">phone</span>
                  <span>+91-8793154040</span>
                </li>
                <li className="contact-item">
                  <span className="material-icons-outlined contact-icon">email</span>
                  <span>
                    <a href="mailto:contact@udaaninstitute.com">contact@udaaninstitute.com</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2023 Udaan Coaching Institute. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Scholarships;