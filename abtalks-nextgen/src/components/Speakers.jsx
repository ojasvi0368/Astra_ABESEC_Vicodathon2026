function Speakers() {
  return (
    <section className="speakers" id="speakers">
      <p className="section-tag">MEET THE VOICES</p>

      <h2>Featured Speakers</h2>

      <div className="speaker-grid">
        <div className="speaker-card">
          <div className="speaker-avatar">👨🏻‍💻</div>
          <h3>Tech Innovator</h3>
          <p>Technology & Innovation</p>
        </div>

        <div className="speaker-card">
          <div className="speaker-avatar">👩🏻‍💼</div>
          <h3>Startup Founder</h3>
          <p>Entrepreneurship</p>
        </div>

        <div className="speaker-card">
          <div className="speaker-avatar">👨🏻‍🚀</div>
          <h3>Industry Expert</h3>
          <p>Future Technology</p>
        </div>
      </div>
    </section>
  );
}

export default Speakers;