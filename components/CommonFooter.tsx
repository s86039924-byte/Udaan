import { Link } from "react-router-dom";
import "./layout.css";

const CommonFooter = () => {
  return (
    <footer className="common-footer">
      <div className="common-footer__inner">
        <section className="common-footer__brand-block">
          <img
            className="common-footer__logo-slot"
            src="/udaan_logo.png"
            alt="Udaan Institute logo"
          />
          <p>
            Premier coaching institute for Foundation, NEET, and JEE
            preparation.
          </p>

          <div className="common-footer__contact">
            <h4>Contact Info</h4>
            <p>info@udaaninstitute.com</p>
            <p>+91-8793154040 / +91-8793164040</p>
            <p>Udaan Institute, Inamdar Nagar, Orchid City, Bhigwan Road, Baramati, Pune, Maharashtra, 413102.</p>
            <div className="common-footer__socials">
              <a
                href="https://www.facebook.com/profile.php?id=61586847644002&sk=directory_personal_details"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/uae_institute/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href="https://youtube.com/@udaan_academy-97?si=4tzNZatLWM-_QVlC"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                YouTube
              </a>
            </div>
          </div>
        </section>

        <section className="common-footer__column">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/home">Results</Link>
            </li>
            <li>
              <Link to="/admission">Scholarship</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </section>

        <section className="common-footer__column">
          <h4>Courses</h4>
          <ul>
            <li>
              <Link to="/courses">Foundation</Link>
            </li>
            <li>
              <Link to="/courses">Crash Course</Link>
            </li>
            <li>
              <Link to="/courses">NEET</Link>
            </li>
            <li>
              <Link to="/courses">IIT-JEE</Link>
            </li>
            <li>
              <Link to="/courses">MHT-CET</Link>
            </li>
          </ul>
        </section>

        <section className="common-footer__column">
          <h4>Legal</h4>
          <ul>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </section>
      </div>

      <div className="common-footer__bottom">
        <p>© 2026 Udaan Coaching Institute. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default CommonFooter;
