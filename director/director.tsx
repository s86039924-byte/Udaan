import "./director.css";

const DirectorPage = () => {
  return (
    <div className="page-wrapper director-page">
      <section className="director-hero">
        <div className="director-container">
          <div className="director-card">
            <div className="director-left">
              <img
                className="director-photo"
                src="/director.png"
                alt="Director portrait"
              />
              <h2 className="director-name">Rupesh Kumar Sir</h2>
              <p className="director-role">( Director )</p>
            </div>

            <div className="director-right">
              <h1 className="director-title">Our Director</h1>
              <p>
                Rupesh Kumar, a Mechanical Engineer by degree and an educator by soul, always
                believed in one simple idea: every student deserves the right guidance.
              </p>
              <p>
                For years, he worked in many reputed institutes and helped students across JEE
                and NEET journeys. His achievement was never just numbers. It was his ability to
                turn difficult questions into simple, logical, and lovable learning moments.
              </p>
              <p>
                With self-invented RK Concepts and fearless teaching, he brought clarity,
                discipline, and confidence into classrooms. Behind every successful lecture, there
                was one constant thought in his heart: what about students who have talent but
                cannot afford expensive coaching?
              </p>
              <p>
                That question changed everything. He chose purpose over comfort and started UDAAN
                to build quality education with honesty and real outcomes, not noise.
              </p>
              <p>
                UDAAN is not just an institute. It is a promise that every child, no matter their
                background, gets a fair chance to fly and build their dream.
              </p>
            </div>
          </div>

          <div className="director-contact-strip">
            <p>Address - Pandurang Icon, Inamdar Nagar, Bhigwan Road, Baramati 413102</p>
            <p>Contact - 87931 54040 / 87931 64040</p>
            <p>Website - Udaanainstitute.com</p>
          </div>

          <section className="faculty-profile" aria-label="Faculty Profile">
            <h2 className="faculty-profile-title">Faculty Profile</h2>
            <div className="faculty-profile-card">
              <img
                className="faculty-profile-photo"
                src="/Suraj Ukey .png"
                alt="Suraj Ukey"
              />
              <div className="faculty-profile-info">
                <h3 className="faculty-profile-name">Suraj Ukey</h3>
                <p className="faculty-profile-role">Senior Math Faculty</p>
                <p className="faculty-profile-detail">5+ Years Experience</p>
                <p className="faculty-profile-detail">IIT Roorkee</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default DirectorPage;
