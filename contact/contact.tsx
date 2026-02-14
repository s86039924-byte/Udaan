import "./contact.css";

const Contact = () => {
  const autoResize = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const target = event.currentTarget;
    target.style.height = "auto";
    target.style.height = `${target.scrollHeight}px`;
  };

  return (
    <div className="page contact-page">
      {/* HERO */}
      <section className="hero">
        <h1>Get in Touch</h1>
        <p>
          Reach out for admissions, inquiries, or academic support.
        </p>
      </section>

      {/* CONTACT GRID */}
      <section className="contact-grid">

        {/* DETAILS */}
        <div className="card">
          <h2>Contact Details</h2>

          <div className="contact-details-layout">
            <div>
              <div className="info">
                <h4>Visit Us</h4>
                <p>
                  Inamdar Nagar, Orchid City, <br />
                  Bhigwan Road, Baramati, Pune - 413102
                </p>
              </div>

              <div className="info">
                <h4>Call Us</h4>
                <p>+91 87931 54040</p>
                <p>+91 87931 64040</p>
              </div>

              <div className="info">
                <h4>Email Us</h4>
                <p>udaan@udaan-institute.com</p>
              </div>
            </div>

            <div className="social-panel" aria-label="Social Links">
              <a
                href="https://www.facebook.com/profile.php?id=61586847644002&sk=directory_personal_details"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <span className="material-icons">facebook</span>
                Facebook
              </a>
              <a
                href="https://www.instagram.com/uae_institute/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <span className="material-icons">photo_camera</span>
                Instagram
              </a>
              <a
                href="https://youtube.com/@udaan_academy-97?si=4tzNZatLWM-_QVlC"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <span className="material-icons">smart_display</span>
                YouTube
              </a>
              <a
                href="https://wa.me/918793154040"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <span className="material-icons">chat</span>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="card">
          <h2>Send a Message</h2>

          <form className="form">
            <input type="text" placeholder="Student Name" />
            <input type="text" placeholder="Parent Name" />
            <input type="tel" placeholder="Phone Number" />
            <input
              type="tel"
              placeholder="Mobile Number (10 digits)"
              pattern="[0-9]{10}"
              inputMode="numeric"
              maxLength={10}
              required
            />
            <textarea rows={4} placeholder="Your Query" onInput={autoResize}></textarea>

            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>
        </div>

      </section>

      {/* MAP */}
      <section className="map-section">
        <iframe
          title="Udaan Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3789.589874837894!2d74.60678977508085!3d18.15655518287752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc3758a01121855%3A0x67c0500e57602f92!2sUdaan%20Coaching%20Institute!5e0!3m2!1sen!2sin!4v1698765432100!5m2!1sen!2sin"
          loading="lazy"
        ></iframe>
      </section>

      {/* VISIT INFO */}
      <section className="visit-section">
        <h2>Why Visit Us?</h2>
        <ul>
          <li>Meet IITian & Doctor Faculty</li>
          <li>Explore AI Learning Labs</li>
          <li>Discuss Scholarship (UPSE)</li>
          <li>Free Academic Counseling</li>
        </ul>

        <div className="office-hours">
          <h3>Office Hours</h3>
          <p>Mon–Sat: 9:00 AM – 7:00 PM</p>
          <p>Sunday: 10:00 AM – 2:00 PM</p>
        </div>
      </section>

    </div>
  );
};

export default Contact;
