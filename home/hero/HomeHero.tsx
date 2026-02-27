import "./homeHero.css";
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <header className="home-hero">
      <div className="home-hero__announcement" aria-label="Big announcement">
        <div className="home-hero__announcement-track">
          <p className="home-hero__announcement-item">
            <strong>Big Announcement</strong> -
            <a href="https://youtube.com/shorts/zy820kI1lDQ?si=D4GLo0VMTjuoX4FL" target="_blank" rel="noopener noreferrer">
              Click Here
            </a>
          </p>
          <p className="home-hero__announcement-item">
            <strong>Big Announcement</strong> -
            <a href="https://youtube.com/shorts/zy820kI1lDQ?si=D4GLo0VMTjuoX4FL" target="_blank" rel="noopener noreferrer">
              Click Here
            </a>
          </p>
          <p className="home-hero__announcement-item">
            <strong>Big Announcement</strong> -
            <a href="https://youtube.com/shorts/zy820kI1lDQ?si=D4GLo0VMTjuoX4FL" target="_blank" rel="noopener noreferrer">
              Click Here
            </a>
          </p>
          <p className="home-hero__announcement-item">
            <strong>Big Announcement</strong> -
            <a href="https://youtube.com/shorts/zy820kI1lDQ?si=D4GLo0VMTjuoX4FL" target="_blank" rel="noopener noreferrer">
              Click Here
            </a>
          </p>
          <p className="home-hero__announcement-item">
            <strong>Announcement</strong> -
            <a href="https://youtube.com/shorts/zy820kI1lDQ?si=D4GLo0VMTjuoX4FL" target="_blank" rel="noopener noreferrer">
              Click Here
            </a>
          </p>
          <p className="home-hero__announcement-item">
            <strong>Announcement</strong> -
            <a href="https://youtube.com/shorts/zy820kI1lDQ?si=D4GLo0VMTjuoX4FL" target="_blank" rel="noopener noreferrer">
              Click Here
            </a>
          </p>
          <p className="home-hero__announcement-item" aria-hidden="true">
            <strong>Big Announcement</strong> -
            <a href="https://youtube.com/shorts/zy820kI1lDQ?si=D4GLo0VMTjuoX4FL" target="_blank" rel="noopener noreferrer" tabIndex={-1}>
              Click Here
            </a>
          </p>
          <p className="home-hero__announcement-item" aria-hidden="true">
            <strong>Big Announcement</strong> -
            <a href="https://youtube.com/shorts/zy820kI1lDQ?si=D4GLo0VMTjuoX4FL" target="_blank" rel="noopener noreferrer" tabIndex={-1}>
              Click Here
            </a>
          </p>
          <p className="home-hero__announcement-item" aria-hidden="true">
            <strong>Big Announcement</strong> -
            <a href="https://youtube.com/shorts/zy820kI1lDQ?si=D4GLo0VMTjuoX4FL" target="_blank" rel="noopener noreferrer" tabIndex={-1}>
              Click Here
            </a>
          </p>
          <p className="home-hero__announcement-item" aria-hidden="true">
            <strong>Big Announcement</strong> -
            <a href="https://youtube.com/shorts/zy820kI1lDQ?si=D4GLo0VMTjuoX4FL" target="_blank" rel="noopener noreferrer" tabIndex={-1}>
              Click Here
            </a>
          </p>
          <p className="home-hero__announcement-item" aria-hidden="true">
            <strong>Announcement</strong> -
            <a href="https://youtube.com/shorts/zy820kI1lDQ?si=D4GLo0VMTjuoX4FL" target="_blank" rel="noopener noreferrer" tabIndex={-1}>
              Click Here
            </a>
          </p>
          <p className="home-hero__announcement-item" aria-hidden="true">
            <strong>Announcement</strong> -
            <a href="https://youtube.com/shorts/zy820kI1lDQ?si=D4GLo0VMTjuoX4FL" target="_blank" rel="noopener noreferrer" tabIndex={-1}>
              Click Here
            </a>
          </p>
        </div>
      </div>

      <div className="home-hero__inner">
        <div className="home-hero__content">
          <p className="home-hero__badge">JEE • NEET • Foundation</p>

          <h1 className="home-hero__title">
            Empowering Dreams.
            <br />
            <span>Shaping Futures.</span>
          </h1>

          <p className="home-hero__description">
            Join Udaan Coaching Institute for structured, result-oriented coaching designed
            to build strong academic foundations and achieve competitive exam success.
          </p>

          <div className="home-hero__actions">
            <Link to="/courses" className="home-hero__btn home-hero__btn--primary">
              Explore Courses
            </Link>
            <Link to="/contact" className="home-hero__btn home-hero__btn--secondary">
              Contact Us
            </Link>
          </div>

          <ul className="home-hero__features">
            <li>Top Faculty</li>
            <li>AI-Powered Learning</li>
            <li>Personal Mentoring</li>
          </ul>
        </div>

        <div className="home-hero__media">
          <img
            src="/profile.png"
            alt="Students studying together"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </header>
  );
};

export default HomeHero;
