export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <h2 className="section-title">
          A stage without
          <br />
          the polish.
        </h2>

        <div className="about-body">
          <p>
            ABTalks started as a room of forty people asking uncomfortable questions. It is now a
            national community of builders who prefer specifics over slogans.
          </p>
          <p>
            For 2026 we rebuilt the whole experience — a faster dashboard, a clearer registration
            flow, and an archive that finally makes every past talk findable in seconds.
          </p>
          <div className="about-cards">
            <div className="about-card">
              <strong>Built in the open</strong>
              <p>Every decision documented and shared with members.</p>
            </div>
            <div className="about-card">
              <strong>Free to attend</strong>
              <p>Sponsors pay so students never have to.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
