import "./homeHero.css";

const HomeHero = () => {
  return (
    <header className="home-hero">
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
            <a href="#courses" className="home-hero__btn home-hero__btn--primary">
              Explore Courses
            </a>
            <a href="#contact" className="home-hero__btn home-hero__btn--secondary">
              Book a Demo
            </a>
          </div>

          <ul className="home-hero__features">
            <li>IITian Faculty</li>
            <li>AI-Powered Learning</li>
            <li>Personal Mentoring</li>
          </ul>
        </div>

        <div className="home-hero__media">
          <div className="home-hero__image-wrap">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZfLCwfzlgOdPVjjDefqmBiQQy0Iqv8a71EnD7tf60-nbv52Xooc9KqBlRDLu_4Aomx5fzohyOymSuAEWTcxeFPYeU8V_FQEPQIrKaWLqDB2r4Q0v2q2Eras4vPmsjyLrbdmGtzcOzY7sxgGCjlQw3cGwr7sAYclahzzvytC7V9l7Jl4jiubmT8pEwOwfAauFJXSNtaNvzuYGYoaonKg5zMadOWqlxL2GB4jUK5LM8wzvg62SCAUX8hCz3bGxkLZkd0LxGnITjfjg"
              alt="Students studying together"
            />
            <div className="home-hero__dost-card">
              <p className="home-hero__dost-title">Udaan Dost</p>
              <p className="home-hero__dost-sub">AI-Powered System</p>
              <p className="home-hero__dost-quote">"One laptop, one purpose — learning"</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHero;
