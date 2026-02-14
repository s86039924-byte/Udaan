import React from 'react';
import './why.css';

const WhyUdaan: React.FC = () => {
  return (
    <div className="page-wrapper why-page">
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
                  src="/computer.jpg"
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
              <p className="stat-number orange-stat">Top </p>
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
            <a
              className="btn-cta-primary"
              href="https://forms.gle/jv8b1o5ByFU99txz6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply for Admission
            </a>
            <button className="btn-cta-secondary">Download Brochure</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUdaan;
