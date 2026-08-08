import hero from "../assets/hero.png";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <img className="hero-img" src={hero} alt="Speaker on stage at an ABTalks event" />
      <div className="hero-overlay" />

      <div className="container hero-inner">
        <span className="hero-badge eyebrow">
          <span className="dot" /> Vicodathon 2026 · Registrations open
        </span>

        <h1>
          Conversations that
          <br />
          <span className="gradient-text">build things.</span>
        </h1>

        <p>
          ABTalks brings operators, designers and engineers on one stage — then hands the mic to the
          people building next. Reimagined for 2026.
        </p>

        <div className="hero-actions">
          <a href="#register" className="btn btn-primary">Register now →</a>
          <a href="#events" className="btn btn-outline">Browse events</a>
        </div>
      </div>
    </section>
  );
}
