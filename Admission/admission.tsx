import React from 'react';
import './admission.css';

const Scholarships: React.FC = () => {
  return (
    <div className="page-wrapper admission-page">
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
                <a
                  className="btn-primary"
                  href="https://forms.gle/jv8b1o5ByFU99txz6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                src="/cheer.png"
                loading="eager"
                decoding="async"
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
            <a
              className="btn-roadmap"
              href="https://forms.gle/jv8b1o5ByFU99txz6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply for Admission Now →
            </a>
          </div>
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
            <a
              className="btn-cta-primary"
              href="https://forms.gle/jv8b1o5ByFU99txz6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register for UPSE
            </a>
            <a className="btn-cta-phone" href="tel:+918793154040">
              <span className="material-icons-outlined">call</span>
              +91-8793154040
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scholarships;
