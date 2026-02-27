import React from 'react';
import { Link } from "react-router-dom";
import './home.css';
import HomeHero from "./hero/HomeHero";

const UdaanInstitute: React.FC = () => {
  return (
    <div className="page-wrapper home-page">
      <HomeHero />

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
                We prioritize quality over quantity. Small batches ensure personal attention to every student, so no one gets unnoticed.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="feature-card">
              <div className="feature-icon orange-icon">
                <span className="material-icons">school</span>
              </div>
              <h3 className="feature-title">Expert Batch Faculty</h3>
              <p className="feature-text">
                Learn from the best. Our faculty consists of experts (BTech, IIT, Medical) who have mentored All India Rankers in JEE & NEET.
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
                Dedicated mentors for disciplined goal tracking and one-on-one guidance. We maintain unwavering and ongoing support to uplift every student.
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
              <Link to="/courses" className="course-link">Know More</Link>
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
              <Link to="/courses" className="course-link">Know More</Link>
            </div>

            {/* Course 3 - Foundation */}
            <div className="course-card">
              <div className="course-icon orange-course">
                <span className="material-icons">menu_book</span>
              </div>
              <h3 className="course-name">Foundation</h3>
              <ul className="course-features">
                <li>Early JEE/NEET Prep</li>
                <li>Strong Concept Base</li>
              </ul>
              <Link to="/courses" className="course-link">Know More</Link>
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
              <Link to="/courses" className="course-link">Know More</Link>
            </div>

            {/* Course 5 - MHT-CET */}
            <div className="course-card">
              <div className="course-icon green-course">
                <span className="material-icons">track_changes</span>
              </div>
              <h3 className="course-name">MHT-CET</h3>
              <ul className="course-features">
                <li>PCM-Focused Strategy</li>
                <li>Topic-Wise Practice</li>
                <li>Exam-Oriented Mock Tests</li>
              </ul>
              <Link to="/courses" className="course-link">Know More</Link>
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
                src="/foot.jpg"
                alt="Faculty member"
                className="faculty-img"
                loading="lazy"
                decoding="async"
              />
              
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
                    <h4 className="point-title">Experienced IITian & Doctor Faculty</h4>
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
              <a
                className="scholarship-btn"
                href="https://forms.gle/jv8b1o5ByFU99txz6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply for Scholarship
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UdaanInstitute;
