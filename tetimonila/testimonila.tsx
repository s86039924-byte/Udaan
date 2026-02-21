import "./testimonila.css";

const SuccessStoriesPage = () => {
  return (
    <div className="ssPage">
      <main className="ssMain">
        <section className="ssHero">
          <div className="ssHeroBg">
            <div className="ssHeroOverlay" />
            <div
              className="ssHeroImage"
              data-alt="University campus students studying outdoors"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC9LnD7wLdSQHJgGoP1_JpA-sgKnKCUmiCJp1uczZalEI7rtbu2YMNXWCh0M2ORtpTZXoNueTN2YSQJdFlYKp19TWlcR0XVa865Liya5dNL2jJrMDuB7UhiREv5Q8aUyaJgbtJdIF1RPp0IOYkooVOUdLVz-778OwK_Meb46acFjSrYNHD0KBhYEDgjUIY1Oah2rtkQRgzrwIc8HmECIBnfOGIaAOPR62NoqNjuomnnDaH7yrwvDChvSSbqbjiYYimf68Q5hMVl6Zo')",
              }}
            />
          </div>

          <div className="ssContainer ssHeroContent">
            <div className="ssHeroBox">
              <h1 className="ssHeroTitle">
                Celebrating Excellence:
                <br />
                <span className="ssHeroTitleAccent">Stories of Success</span>
              </h1>

              <p className="ssHeroSub">
                Testimonials will be added here soon.
              </p>
            </div>
          </div>
        </section>

        <section className="ssSection">
          <div className="ssContainer">
            <div className="ssSectionHead">
              <h2 className="ssSectionTitle">No Testimonials Added Yet</h2>
              <p className="ssSectionSub">This section is intentionally empty. You can add data later.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SuccessStoriesPage;
