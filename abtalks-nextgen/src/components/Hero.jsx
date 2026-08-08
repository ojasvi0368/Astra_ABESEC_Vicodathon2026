function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-tag">🚀 LEARN • CONNECT • GROW</p>

        <h1>
          Ideas That <span>Inspire.</span>
          <br />
          Conversations That <span>Change.</span>
        </h1>

        <p className="hero-description">
          Discover inspiring talks, exciting events and meaningful
          conversations with innovators, leaders and changemakers.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Explore Events →</button>
          <button className="secondary-btn">Discover ABTalks</button>
        </div>

        <div className="hero-stats">
          <div>
            <h3>50+</h3>
            <p>Events</p>
          </div>

          <div>
            <h3>100+</h3>
            <p>Speakers</p>
          </div>

          <div>
            <h3>10K+</h3>
            <p>Students</p>
          </div>
        </div>
      </div>

      <div className="hero-card">
        <div className="card-glow"></div>

        <p>FEATURED EVENT</p>

        <h2>
          Build.
          <br />
          Connect.
          <br />
          <span>Inspire.</span>
        </h2>

        <div className="event-info">
          <span>📅 24 AUG 2026</span>
          <span>📍 ABES Campus</span>
        </div>

        <button>Register Now →</button>
      </div>
    </section>
  );
}

export default Hero;