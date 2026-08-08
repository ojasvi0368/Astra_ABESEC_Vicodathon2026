import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">From the room</h2>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <figure className="testimonial" key={t.name}>
              <div className="quote-mark">“</div>
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <b>{t.name}</b> · {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
