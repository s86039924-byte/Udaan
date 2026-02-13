import { Link } from "react-router-dom";
import "./layout.css";

const CommonFooter = () => {
  return (
    <footer className="common-footer">
      <div className="common-footer__inner">
        <section className="common-footer__brand-block">
          <div className="common-footer__logo-slot">Logo</div>
          <p>
            Premier coaching institute for Foundation, NEET, and JEE
            preparation.
          </p>

          <div className="common-footer__contact">
            <h4>Contact Info</h4>
            <p>info@udaaninstitute.com</p>
            <p>+91 0000000000</p>
            <p>Address line 1, Address line 2</p>
            <div className="common-footer__socials">
              <a href="#" aria-label="Facebook">
                Facebook
              </a>
              <a href="#" aria-label="Instagram">
                Instagram
              </a>
              <a href="#" aria-label="YouTube">
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
            <li>Foundation</li>
            <li>Crash Course</li>
            <li>NEET</li>
            <li>IIT-JEE</li>
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
