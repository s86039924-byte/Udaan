import React from 'react';
import './UdaanInstitute.css';

const UdaanInstitute: React.FC = () => {
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlqoliIGb1iGMvmNxEcRAROaKRgl89ICC4Lw3NwNtj9DQBj5uRijep_qH_09TTu85wKEovI7HOcvUg18ClgeljA0oIZAei792ucI96yMGne2NUWaQZ9EUtkKQ1Gy3dV0kFaktGQZ-c27DWIt_p6nzUVeCKXpDNrxhIMPopPKCudUtP5KkdCnQvvZ7jPVquoU0nJuNQH6G9h2iWaJRz5lY5tCuW3mnaznhG9UArWJ13oKh2S1N4KCaH63_19iyNvzItF0ot6tR63Sg"
                />
              </div>
              <span className="logo-text">
                UDAAN <span className="logo-accent">INSTITUTE</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="nav-menu">
              <a className="nav-link" href="#courses">Courses</a>
              <a className="nav-link" href="#why-udaan">Why Us</a>
              <a className="nav-link" href="#faculty">Faculty</a>
              <a className="nav-link" href="#fees">Fees</a>
              <a className="btn-enroll" href="#contact">Enroll Now</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="mobile-menu-btn">
              <button className="menu-toggle">
                <span className="material-icons">menu</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-bg-overlay">
          <div className="bg-circle bg-circle-1"></div>
          <div className="bg-circle bg-circle-2"></div>
        </div>

        <div className="hero-container">
          <div className="hero-content">
            {/* Badge */}
            <div className="hero-badge">
              <span className="material-icons">school</span>
              JEE • NEET • Foundation
            </div>

            {/* Heading */}
            <h1 className="hero-title">
              Empowering Dreams. <br />
              <span className="title-gradient">Shaping Futures.</span>
            </h1>

            {/* Description */}
            <p className="hero-description">
              Join Udaan Coaching Institute for structured, result-oriented coaching designed to build strong academic foundations and achieve competitive exam success.
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta">
              <a className="btn-primary" href="#courses">
                Explore Courses
                <span className="material-icons">arrow_forward</span>
              </a>
              <a className="btn-secondary" href="#contact">
                <span className="material-icons icon-primary">calendar_today</span>
                Book a Demo
              </a>
            </div>

            {/* Features */}
            <div className="hero-features">
              <div className="feature-item">
                <span className="material-icons check-icon">check_circle</span> IITian Faculty
              </div>
              <div className="feature-item">
                <span className="material-icons check-icon">check_circle</span> AI-Powered Learning
              </div>
              <div className="feature-item">
                <span className="material-icons check-icon">check_circle</span> Personal Mentoring
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hero-image-wrapper">
            <div className="hero-image-card">
              <img
                alt="Students studying together in a modern classroom"
                className="hero-img"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZfLCwfzlgOdPVjjDefqmBiQQy0Iqv8a71EnD7tf60-nbv52Xooc9KqBlRDLu_4Aomx5fzohyOymSuAEWTcxeFPYeU8V_FQEPQIrKaWLqDB2r4Q0v2q2Eras4vPmsjyLrbdmGtzcOzY7sxgGCjlQw3cGwr7sAYclahzzvytC7V9l7Jl4jiubmT8pEwOwfAauFJXSNtaNvzuYGYoaonKg5zMadOWqlxL2GB4jUK5LM8wzvg62SCAUX8hCz3bGxkLZkd0LxGnITjfjg"
              />
              <div className="udaan-dost-card">
                <div className="card-header">
                  <div className="card-icon">
                    <span className="material-icons">laptop_mac</span>
                  </div>
                  <div>
                    <h4 className="card-title">Udaan Dost</h4>
                    <p className="card-subtitle">AI-Powered System</p>
                  </div>
                </div>
                <p className="card-quote">"One laptop, one purpose — learning"</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Why Udaan Section */}
      <section className="why-udaan-section" id="why-udaan">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">Our Advantage</span>
            <h2 className="section-title">Why Udaan is Unique?</h2>
            <p className="section-description">
              What sets Udaan Coaching Institute apart is our commitment to technology and personal attention.
            </p>
          </div>

          <div className="features-grid">
            {/* Feature 1 */}
            <div className="feature-card">
              <div className="feature-icon blue-icon">
                <span className="material-icons">desktop_windows</span>
              </div>
              <h3 className="feature-title">Udaan Dost System</h3>
              <p className="feature-text">
                Our exclusive laptop-based learning and computing system. Execute elevated study materials, live performance tracking. Like a complete batch inside a PC, NEET batch.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="feature-card">
              <div className="feature-icon green-icon">
                <span className="material-icons">groups</span>
              </div>
              <h3 className="feature-title">Small Batch Sizes</h3>
              <p className="feature-text">
                We prioritize quality over quantity. Small batches ensure personal attention to every student, ensuring no one learning kid gets unseen daily.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="feature-card">
              <div className="feature-icon orange-icon">
                <span className="material-icons">school</span>
              </div>
              <h3 className="feature-title">Expert Batch Faculty</h3>
              <p className="feature-text">
                Learn from the best. Our faculty consists of experts (BTech, IIT, Medical) who have mentored all India rankers in JEE & NEET.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="feature-card">
              <div className="feature-icon purple-icon">
                <span className="material-icons">analytics</span>
              </div>
              <h3 className="feature-title">Performance Analysis</h3>
              <p className="feature-text">
                Data-driven, real-time deep performance analysis for every student. We focus on continuous assessment through rigorous testing.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="feature-card">
              <div className="feature-icon pink-icon">
                <span className="material-icons">person</span>
              </div>
              <h3 className="feature-title">Personal Mentoring</h3>
              <p className="feature-text">
                Dedicated mentors for disciplined goal tracking and one-on-one guidance. We maintain unwavered and ongoing support to bring everyone up!
              </p>
            </div>

            {/* Feature 6 */}
            <div className="feature-card">
              <div className="feature-icon teal-icon">
                <span className="material-icons">payments</span>
              </div>
              <h3 className="feature-title">Affordable Excellence</h3>
              <p className="feature-text">
                Quality education within reach. We offer affordable fees along with career flexibility (Exam Scholarships for meritorious students).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses-section" id="courses">
        <div className="section-container">
          <div className="courses-header">
            <div>
              <span className="section-label">Academic Programs</span>
              <h2 className="section-title">Our Courses</h2>
            </div>
            <a href="#" className="view-all-link">
              View Fee Structure →
            </a>
          </div>

          <div className="courses-grid">
            {/* Course 1 - JEE */}
            <div className="course-card">
              <div className="course-icon green-course">
                <span className="material-icons">functions</span>
              </div>
              <h3 className="course-name">JEE (Main & Adv)</h3>
              <ul className="course-features">
                <li>Physics Mastery</li>
                <li>Comprehensive Syllabus</li>
                <li>Mock Tests & Analysis</li>
              </ul>
              <a href="#" className="course-link">Learn More</a>
            </div>

            {/* Course 2 - NEET */}
            <div className="course-card">
              <div className="course-icon blue-course">
                <span className="material-icons">science</span>
              </div>
              <h3 className="course-name">NEET (UG)</h3>
              <ul className="course-features">
                <li>NCERT Focused</li>
                <li>Botany-Priority Team</li>
              </ul>
              <a href="#" className="course-link">Learn More</a>
            </div>

            {/* Course 3 - Foundation */}
            <div className="course-card">
              <div className="course-icon orange-course">
                <span className="material-icons">menu_book</span>
              </div>
              <h3 className="course-name">Foundation</h3>
              <ul className="course-features">
                <li>Early JEE/NEET Prep</li>
                <li>Strong Concept-Base</li>
              </ul>
              <a href="#" className="course-link">Learn More</a>
            </div>

            {/* Course 4 - Board Support */}
            <div className="course-card">
              <div className="course-icon purple-course">
                <span className="material-icons">auto_stories</span>
              </div>
              <h3 className="course-name">Board Support</h3>
              <ul className="course-features">
                <li>Syllabus Prep</li>
                <li>Regular Practice</li>
              </ul>
              <a href="#" className="course-link">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="faculty-section" id="faculty">
        <div className="section-container">
          <div className="faculty-content">
            <div className="faculty-image">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKC12UElOQo0npFrrjBCIuV2eAdpbHHjZTKPM8mzzDqD3SuONSbZlFmocyHfB2g4dIh5wKwqiY1VHTbMQJcplQsm3eIJga4wska-bAWeTnQ4vazjS8P6vwm4SjUol8b6820LkUbUAYSHdc0dRfbA5tMq-8tHn9E0EFFFb_6oij5WaGLqAq4X39jui7CeDCZapOSwC7FBY5S-kuXqlED0Rns_i_UMWtGUSFwPNk7AEd3U5aznR90f5Bzyuasq2UtdH5RVn38GmtbXQ"
                alt="Faculty member"
                className="faculty-img"
              />
              <div className="experience-badge">
                <div className="badge-number">10+</div>
                <div className="badge-text">Years Experience</div>
              </div>
            </div>

            <div className="faculty-info">
              <span className="section-label">Meet The Mentors</span>
              <h2 className="section-title">Faculty Excellence</h2>
              <p className="faculty-description">
                Our greatest strength is our faculty team. We believe that great teachers create great results.
              </p>

              <div className="faculty-points">
                <div className="faculty-point">
                  <div className="point-icon blue-point">
                    <span className="material-icons">school</span>
                  </div>
                  <div>
                    <h4 className="point-title">Experienced IITians & Doctors</h4>
                    <p className="point-text">
                      All core subjects are taught by faculty who have cleared these exams themselves.
                    </p>
                  </div>
                </div>

                <div className="faculty-point">
                  <div className="point-icon green-point">
                    <span className="material-icons">psychology</span>
                  </div>
                  <div>
                    <h4 className="point-title">Proven Methodology</h4>
                    <p className="point-text">
                      Faculty members have successfully mentored All India Rankers in both JEE and NEET.
                    </p>
                  </div>
                </div>

                <div className="faculty-point">
                  <div className="point-icon orange-point">
                    <span className="material-icons">history_edu</span>
                  </div>
                  <div>
                    <h4 className="point-title">Strong Academic Background</h4>
                    <p className="point-text">
                      Years of classroom teaching experience combined with dedicated doubt-solving sessions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure Section */}
      <section className="fees-section" id="fees">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Fee Structure</h2>
            <p className="section-description">Transparent and affordable pricing for quality education.</p>
          </div>

          <div className="table-wrapper">
            <table className="fee-table">
              <thead>
                <tr>
                  <th>Course / Class</th>
                  <th className="text-right">One-Time Payment</th>
                  <th className="text-right">Total Fee (Installments)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="course-name-cell">Foundation Class 8th</td>
                  <td className="text-right">₹30,000</td>
                  <td className="text-right">₹35,000</td>
                </tr>
                <tr>
                  <td className="course-name-cell">Foundation Class 9th / 10th</td>
                  <td className="text-right">₹40,000</td>
                  <td className="text-right">₹45,000</td>
                </tr>
                <tr>
                  <td className="course-name-cell">JEE/NEET Class 11th/12th</td>
                  <td className="text-right">₹1,00,000</td>
                  <td className="text-right">₹1,25,000</td>
                </tr>
                <tr>
                  <td className="course-name-cell">Class 9th to 12th Combo</td>
                  <td className="text-right">₹2,50,000</td>
                  <td className="text-right">₹3,00,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="table-note">
            * Hostel fees: ₹1,10,000/Year (Boys/Girls). Monthly payment options available. Contact us for detailed installment plans.
          </p>
        </div>
      </section>

      {/* Scholarship Banner */}
      <div className="scholarship-banner">
        <div className="banner-container">
          <div className="banner-content">
            <div className="banner-text">
              <h2 className="banner-title">Proven Results & Scholarships</h2>
              <p className="banner-description">
                Growing number of successful JEE & NEET qualifiers. We offer scholarships via "Udaan Pratibha Search Exam (UPSE)" for meritorious students.
              </p>
            </div>
            <div>
              <button className="scholarship-btn">Apply for Scholarship</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="footer-logo-circle">
                  <img
                    alt="Udaan Institute Logo"
                    className="footer-logo-img"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKC12UElOQo0npFrrjBCIuV2eAdpbHHjZTKPM8mzzDqD3SuONSbZlFmocyHfB2g4dIh5wKwqiY1VHTbMQJcplQsm3eIJga4wska-bAWeTnQ4vazjS8P6vwm4SjUol8b6820LkUbUAYSHdc0dRfbA5tMq-8tHn9E0EFFFb_6oij5WaGLqAq4X39jui7CeDCZapOSwC7FBY5S-kuXqlED0Rns_i_UMWtGUSFwPNk7AEd3U5aznR90f5Bzyuasq2UtdH5RVn38GmtbXQ"
                  />
                </div>
                <span className="footer-logo-text">UDAAN</span>
              </div>
              <p className="footer-tagline">
                Udaan Institute doesn't just teach subjects, it builds confidence and clarity. Join us to shape your future.
              </p>
              <div className="social-links">
                <a className="social-link facebook" href="https://www.facebook.com/profile.php?id=61586847644002" target="_blank" rel="noopener noreferrer">
                  <span className="material-icons">facebook</span>
                </a>
                <a className="social-link instagram" href="https://www.instagram.com/udaan_institute/" target="_blank" rel="noopener noreferrer">
                  <span className="material-icons">photo_camera</span>
                </a>
              </div>
            </div>

            {/* Contact Column */}
            <div className="footer-contact">
              <h3 className="footer-heading">Contact Us</h3>
              <ul className="contact-list">
                <li className="contact-item">
                  <span className="material-icons contact-icon">location_on</span>
                  <span>Udaan Institute, Inamdar Nagar, Orchid City, Bhigwan Road, Baramati, Pune, Maharashtra, 413102.</span>
                </li>
                <li className="contact-item">
                  <span className="material-icons contact-icon">phone</span>
                  <span>+91-8793154040 / +91-8793164040</span>
                </li>
                <li className="contact-item">
                  <span className="material-icons contact-icon">email</span>
                  <a href="mailto:contact@udaaninstitute.com">contact@udaaninstitute.com</a>
                </li>
              </ul>
            </div>

            {/* Quick Links Column */}
            <div className="footer-links">
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="footer-link-list">
                <li><a href="#courses">Courses</a></li>
                <li><a href="#faculty">Faculty Team</a></li>
                <li><a href="#fees">Fee Structure</a></li>
                <li><a href="#">Download Brochure</a></li>
                <li><a href="#">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2023 Udaan Coaching Institute. All rights reserved. | Privacy Policy | Designed by Udaan IT Team</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UdaanInstitute;