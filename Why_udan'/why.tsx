import React from 'react';
import './WhyUdaan.css';

const WhyUdaan: React.FC = () => {
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
                  alt="Udaan Institute Logo Placeholder"
                  className="logo-img"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuALZdTh6bGgSHvCMSSqdGj1-4bIOu8x6weZcwrnD8-x7sqGX8ys2NLFAW4lADuKli1CTZ2TQaWSvcOyr94hF_FlNIv8AWweiwm4U05d5iWVQ9REwnWYlcbF2OfZeKW4xDjPPWuOHSUl-7BuVzLZixvZYEheaqjmsn2f4UOXkkBhIhEJUe9MDTn9CoPlXl60ZeDpFRpRYzHXrgD9wrMo1ACLuSl9YYWk30EJxND5KBtP-1LY2QDcUbzZV6nf4ifqD6WJSO6iyqnEsdk"
                />
              </div>
              <div>
                <span className="logo-text">UDAAN</span>
                <span className="logo-subtitle">Institute</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="nav-menu">
              <a className="nav-link" href="#">Home</a>
              <a className="nav-link active" href="#">Why Udaan</a>
              <a className="nav-link" href="#">Courses</a>
              <a className="nav-link" href="#">Fees</a>
              <a className="nav-link" href="#">Results</a>
            </div>

            {/* Apply Button */}
            <div className="nav-cta">
              <button className="btn-apply">Apply Now</button>
            </div>

            {/* Mobile Menu Button */}
            <div className="mobile-menu-btn">
              <button className="menu-toggle">
                <span className="material-icons-outlined">menu</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-overlay">
          <div className="bg-circle bg-circle-1"></div>
          <div className="bg-circle bg-circle-2"></div>
        </div>

        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-badge">
              Empowering Dreams. Shaping Futures.
            </span>

            <h1 className="hero-title">
              The{' '}
              <span className="title-highlight">
                Udaan Edge
                <svg
                  className="title-underline"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 10"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                </svg>
              </span>
            </h1>

            <p className="hero-description">
              Why settle for ordinary when you can prepare with the best? Discover what makes Udaan Coaching Institute the preferred choice for JEE & NEET aspirants.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="features-section">
        <div className="section-container">
          <div className="features-grid">
            {/* Feature 1 */}
            <div className="feature-card">
              <div className="feature-icon blue-icon">
                <span className="material-icons-outlined">psychology</span>
              </div>
              <h3 className="feature-title">AI-Powered "UDAAN DOST"</h3>
              <p className="feature-text">
                Our proprietary laptop-based learning & monitoring system acts as a personal tutor, ensuring focused study, discipline, and real-time performance tracking.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="feature-card">
              <div className="feature-icon green-icon">
                <span className="material-icons-outlined">school</span>
              </div>
              <h3 className="feature-title">IITian & Doctor Faculty</h3>
              <p className="feature-text">
                Rare in semi-urban regions, learn directly from experienced IITians and Doctors who have mentored All-India Rankers in JEE & NEET.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="feature-card">
              <div className="feature-icon purple-icon">
                <span className="material-icons-outlined">groups</span>
              </div>
              <h3 className="feature-title">Small Batch Sizes</h3>
              <p className="feature-text">
                We prioritize quality over quantity. Small batches ensure personal attention to every student, guaranteeing no one gets left behind.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="feature-card">
              <div className="feature-icon yellow-icon">
                <span className="material-icons-outlined">lightbulb</span>
              </div>
              <h3 className="feature-title">Concept Clarity First</h3>
              <p className="feature-text">
                Say no to rote learning. We focus on deep conceptual understanding, regular testing and performance analysis to build a strong foundation.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="feature-card">
              <div className="feature-icon pink-icon">
                <span className="material-icons-outlined">favorite</span>
              </div>
              <h3 className="feature-title">Personal Mentoring</h3>
              <p className="feature-text">
                Dedicated mentors for doubt-solving and one-on-one guidance, coupled with regular parent interactions to keep everyone aligned on the goal.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="feature-card">
              <div className="feature-icon teal-icon">
                <span className="material-icons-outlined">payments</span>
              </div>
              <h3 className="feature-title">Quality Within Reach</h3>
              <p className="feature-text">
                Top-tier education shouldn't break the bank. We offer affordable fee structures and scholarships for meritorious students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Laptop Section */}
      <section className="laptop-section">
        <div className="section-container">
          <div className="laptop-content">
            {/* Image */}
            <div className="laptop-image-wrapper">
              <div className="laptop-image-card">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgLdZdKHCJUwuGkNDm8VhCJZlMVWrLHPIVFvJTukGk7qUdUF5Yw42GhwNHCkAaQm6y5tDtYJb46LKSv7HUCPW4l5V5vOhLABNtTkDqEJQ77k1xfSy-QMTAUCk6KD5fRnwC3CwOABKpDQ"
                  alt="Student using laptop for learning"
                  className="laptop-img"
                />
                <div className="laptop-quote">
                  "Like a personal tutor for every student"
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="laptop-info">
              <h2 className="laptop-heading">
                One Laptop, One Purpose:{' '}
                <span className="text-highlight">Learning</span>
              </h2>
              <p className="laptop-description">
                We integrate technology not just for the sake of it, but to drive results. Our laptop-based ecosystem is designed specifically for Udaan institutes to minimize distractions and maximize output.
              </p>

              <div className="laptop-features">
                <div className="laptop-feature">
                  <div className="laptop-feature-icon green-check">
                    <span className="material-icons-outlined">check</span>
                  </div>
                  <div>
                    <h4 className="laptop-feature-title">Distraction-Free Environment</h4>
                    <p className="laptop-feature-text">
                      Locked ecosystem prevents access to social media and games during study hours.
                    </p>
                  </div>
                </div>

                <div className="laptop-feature">
                  <div className="laptop-feature-icon blue-check">
                    <span className="material-icons-outlined">trending_up</span>
                  </div>
                  <div>
                    <h4 className="laptop-feature-title">Smart Performance Tracking</h4>
                    <p className="laptop-feature-text">
                      AI analyzes strengths and weaknesses to provide personalized improvement plans.
                    </p>
                  </div>
                </div>

                <div className="laptop-feature">
                  <div className="laptop-feature-icon orange-check">
                    <span className="material-icons-outlined">lock_clock</span>
                  </div>
                  <div>
                    <h4 className="laptop-feature-title">Discipline Monitoring</h4>
                    <p className="laptop-feature-text">
                      Ensures students stay on track with their study schedules.
                    </p>
                  </div>
                </div>
              </div>

              <div className="laptop-link-wrapper">
                <a href="#" className="laptop-link">
                  Learn more about Udaan Dost
                  <span className="material-icons-outlined">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="section-container">
          <div className="stats-grid">
            <div className="stat-item">
              <p className="stat-number primary-stat">100%</p>
              <p className="stat-label">Concept Focus</p>
            </div>
            <div className="stat-item">
              <p className="stat-number green-stat">24/7</p>
              <p className="stat-label">Doubt Support</p>
            </div>
            <div className="stat-item">
              <p className="stat-number orange-stat">IITian</p>
              <p className="stat-label">Faculty Team</p>
            </div>
            <div className="stat-item">
              <p className="stat-number purple-stat">UPSE</p>
              <p className="stat-label">Scholarship Exam</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to start your journey?</h2>
          <p className="cta-description">
            Join the league of successful students. Admissions are open for JEE & NEET Foundation and Advanced courses.
          </p>
          <div className="cta-buttons">
            <button className="btn-cta-primary">Apply for Admission</button>
            <button className="btn-cta-secondary">Download Brochure</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div>
              <div className="footer-brand">
                <div className="footer-logo-icon">UI</div>
                <span className="footer-brand-text">Udaan Institute</span>
              </div>
              <p className="footer-address">
                Inamdar Nagar, Orchid City,<br />
                Bhigwan Road, Baramati, Pune,<br />
                Maharashtra, 413102.
              </p>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="footer-heading">Contact</h4>
              <ul className="footer-list">
                <li className="footer-list-item">
                  <span className="material-icons-outlined">call</span>
                  +91-8793154040 / +91-8793164040
                </li>
                <li className="footer-list-item">
                  <span className="material-icons-outlined">email</span>
                  <a href="mailto:contact@udaaninstitute.com">contact@udaaninstitute.com</a>
                </li>
                <li className="footer-list-item">
                  <span className="material-icons-outlined">whatsapp</span>
                  +91-8793154040
                </li>
              </ul>
            </div>

            {/* Social Column */}
            <div>
              <h4 className="footer-heading">Social</h4>
              <div className="social-links">
                <a href="#" className="social-link facebook-link">
                  <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      clipRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      fillRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="social-link instagram-link">
                  <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      clipRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 014.185 3.362c.637-.247 1.364-.415 2.427-.465C7.674 2.013 8.021 2 12.315 2zM12.003 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      fillRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
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

export default WhyUdaan;