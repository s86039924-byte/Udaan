import React from 'react';
import { Link } from "react-router-dom";
import './course.css';

const Courses: React.FC = () => {
  return (
    <div className="page-wrapper courses-page">
      {/* Header Section */}
      <header className="header-section">
        <div className="header-bg"></div>
        
        <div className="header-container">
          <div className="header-content">
            <span className="header-badge">Empowering Dreams, Shaping Futures</span>
            <h1 className="header-title">
              Structured & <span className="title-gradient">Result-Oriented</span> Courses
            </h1>
            <p className="header-description">
              Prepare for JEE, NEET, and Foundation with experienced IITian & Doctor faculty.
              Concept-based learning tailored for your success.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-container">
          {/* Courses Grid */}
          <div className="courses-grid">
            {/* Udaan Dost Card - Full Width (Top) */}
            <div className="udaan-dost-card">
              <div className="udaan-dost-glow"></div>

              <div className="udaan-dost-content">
                <div className="udaan-dost-info">
                  <div className="exclusive-badge">
                    <span className="badge-text">Exclusive</span>
                    <span className="badge-subtitle">AI-Powered Learning</span>
                  </div>
                  <h3 className="udaan-dost-title">Udaan Dost - Laptop Program</h3>
                  <p className="udaan-dost-description">
                    Experience our unique <span className="highlight-text">AI-powered, laptop-based learning system</span>.
                    Think of it as a personal tutor for every student-ensuring focused study, discipline, and detailed performance tracking.
                  </p>
                  <div className="udaan-dost-features">
                    <div className="feature-tag">
                      <span className="material-icons">laptop_chromebook</span>
                      <span>One Laptop, One Purpose</span>
                    </div>
                    <div className="feature-tag">
                      <span className="material-icons">analytics</span>
                      <span>Performance Tracking</span>
                    </div>
                  </div>
                </div>

                <div className="udaan-dost-visual">
                  <span className="material-icons visual-icon">smart_toy</span>
                  <div className="visual-cta">
                    <Link className="circle-btn" to="/admission">
                      <span className="material-icons">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* JEE Course Card */}
            <div className="course-card">
              <div className="course-header blue-header">
                <div className="course-bg-overlay"></div>
                <div className="course-icon-wrapper">
                  <span className="material-icons course-icon">engineering</span>
                </div>
                <div className="course-badge">
                  <span>For Engineering Aspirants</span>
                </div>
              </div>
              <div className="course-body">
                <div className="course-title-section">
                  <h3 className="course-title blue-title">JEE (Main & Advanced)</h3>
                  <span className="material-icons title-icon blue-icon">school</span>
                </div>
                <p className="course-description">
                  Comprehensive coaching for engineering entrance exams. Build a strong mathematical and scientific foundation with IITian mentors.
                </p>
                <ul className="course-features">
                  <li>
                    <span className="material-icons feature-check">check_circle</span>
                    <span>Experienced IITian Faculty</span>
                  </li>
                  <li>
                    <span className="material-icons feature-check">check_circle</span>
                    <span>Small Batch Sizes</span>
                  </li>
                  <li>
                    <span className="material-icons feature-check">check_circle</span>
                    <span>Regular Mock Tests</span>
                  </li>
                </ul>
                
              </div>
            </div>

            {/* NEET Course Card */}
            <div className="course-card">
              <div className="course-header green-header">
                <div className="course-bg-overlay"></div>
                <div className="course-icon-wrapper">
                  <span className="material-icons course-icon">medical_services</span>
                </div>
                <div className="course-badge">
                  <span>For Medical Aspirants</span>
                </div>
              </div>
              <div className="course-body">
                <div className="course-title-section">
                  <h3 className="course-title green-title">NEET (UG)</h3>
                  <span className="material-icons title-icon green-icon">local_hospital</span>
                </div>
                <p className="course-description">
                  Specialized medical entrance coaching. Learn biology, chemistry, and physics from experienced Doctor faculty members.
                </p>
                <ul className="course-features">
                  <li>
                    <span className="material-icons feature-check">check_circle</span>
                    <span>Doctor Faculty Team</span>
                  </li>
                  <li>
                    <span className="material-icons feature-check">check_circle</span>
                    <span>Concept Clarity Focus</span>
                  </li>
                  <li>
                    <span className="material-icons feature-check">check_circle</span>
                    <span>Personal Mentoring</span>
                  </li>
                </ul>
                
              </div>
            </div>

            {/* Foundation Course Card */}
            <div className="course-card">
              <div className="course-header orange-header">
                <div className="course-bg-overlay"></div>
                <div className="course-icon-wrapper">
                  <span className="material-icons course-icon">school</span>
                </div>
                <div className="course-badge">
                  <span>Class 8th - 10th</span>
                </div>
              </div>
              <div className="course-body">
                <div className="course-title-section">
                  <h3 className="course-title orange-title">Foundation Courses</h3>
                  <span className="material-icons title-icon orange-icon">auto_stories</span>
                </div>
                <p className="course-description">
                  Early preparation programs to build a robust academic base for future competitive exams like JEE & NEET.
                </p>
                <ul className="course-features">
                  <li>
                    <span className="material-icons feature-check">check_circle</span>
                    <span>School Syllabus Coverage</span>
                  </li>
                  <li>
                    <span className="material-icons feature-check">check_circle</span>
                    <span>Competitive Preparation</span>
                  </li>
                  <li>
                    <span className="material-icons feature-check">check_circle</span>
                    <span>No Rote Learning</span>
                  </li>
                </ul>
                
              </div>
            </div>

            {/* Board Exam Support Card */}
            <div className="course-card">
              <div className="course-header purple-header">
                <div className="course-bg-overlay"></div>
                <div className="course-icon-wrapper">
                  <span className="material-icons course-icon">description</span>
                </div>
                <div className="course-badge">
                  <span>CBSE / State Board</span>
                </div>
              </div>
              <div className="course-body">
                <div className="course-title-section">
                  <h3 className="course-title purple-title">Board Exam Support</h3>
                  <span className="material-icons title-icon purple-icon">assignment</span>
                </div>
                <p className="course-description">
                  Dedicated focus on school syllabus excellence ensuring top grades in board examinations alongside competitive prep.
                </p>
                <ul className="course-features">
                  <li>
                    <span className="material-icons feature-check">check_circle</span>
                    <span>Regular Practice & Testing</span>
                  </li>
                  <li>
                    <span className="material-icons feature-check">check_circle</span>
                    <span>Subjective Answer Writing</span>
                  </li>
                  <li>
                    <span className="material-icons feature-check">check_circle</span>
                    <span>Parent Interaction</span>
                  </li>
                </ul>
               
              </div>
            </div>

            {/* MHT-CET Course Card */}
            <div className="course-card">
              <div className="course-header blue-header">
                <div className="course-bg-overlay"></div>
                <div className="course-icon-wrapper">
                  <span className="material-icons course-icon">track_changes</span>
                </div>
                <div className="course-badge">
                  <span>For Maharashtra CET Aspirants</span>
                </div>
              </div>
              <div className="course-body">
                <div className="course-title-section">
                  <h3 className="course-title blue-title">MHT-CET</h3>
                  <span className="material-icons title-icon blue-icon">insights</span>
                </div>
                <p className="course-description">
                  Focused preparation for MHT-CET with a PCM-first approach, speed-building practice, and
                  exam-pattern based sessions.
                </p>
                <ul className="course-features">
                  <li>
                    <span className="material-icons feature-check">check_circle</span>
                    <span>State Board + CET Alignment</span>
                  </li>
                  <li>
                    <span className="material-icons feature-check">check_circle</span>
                    <span>High-Speed Problem Solving</span>
                  </li>
                  <li>
                    <span className="material-icons feature-check">check_circle</span>
                    <span>Mock Tests with Rank Analysis</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* UPSE Banner */}
      <section className="upse-banner">
        <div className="banner-container">
          <div className="banner-content">
            <div className="banner-text">
              <h2 className="banner-title">Udaan Pratibha Search Exam (UPSE)</h2>
              <p className="banner-description">
                Meritorious scholarships available. We believe financial limitations should never stop talent.
                Take the admission test and secure your scholarship today.
              </p>
            </div>
            <div>
              <Link className="banner-btn" to="/admission">
                Apply for Scholarship
                <span className="material-icons">edit_note</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
