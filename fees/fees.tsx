import React from 'react';
import './fees.css';

const FeeStructure: React.FC = () => {
  return (
    <div className="page-wrapper fees-page">
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
                <a className="aid-btn" href="/admission">
                  Check Scholarship Details <span className="material-icons-round">arrow_forward</span>
                </a>
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
    </div>
  );
};

export default FeeStructure;
