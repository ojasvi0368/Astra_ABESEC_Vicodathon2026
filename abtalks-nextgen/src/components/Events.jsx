function Events() {
  return (
    <section className="events" id="events">
      <p className="section-tag">WHAT'S HAPPENING</p>

      <h2>Upcoming Events</h2>

      <div className="event-grid">
        <div className="event-box">
          <p>24 AUG 2026</p>
          <h3>ABTalks: Build & Inspire</h3>
          <span>📍 ABES Campus</span>
          <button>Register →</button>
        </div>

        <div className="event-box">
          <p>30 AUG 2026</p>
          <h3>Innovation & Ideas</h3>
          <span>📍 ABES Campus</span>
          <button>Register →</button>
        </div>

        <div className="event-box">
          <p>05 SEP 2026</p>
          <h3>Future of Technology</h3>
          <span>📍 ABES Campus</span>
          <button>Register →</button>
        </div>
      </div>
    </section>
  );
}

export default Events;