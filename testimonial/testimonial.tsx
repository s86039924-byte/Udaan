import "./testimonial.css";

const Testimonial = () => {
  return (
    <div className="page testimonial-page">
      <section className="testimonial-hero">
        <h1>Student Testimonials</h1>
        <p>We will add testimonial data here soon.</p>
      </section>

      <section className="testimonial-empty" aria-label="Testimonials coming soon">
        <h2>No testimonials added yet</h2>
        <p>Content is intentionally kept empty for now. You can add it later.</p>
      </section>
    </div>
  );
};

export default Testimonial;
