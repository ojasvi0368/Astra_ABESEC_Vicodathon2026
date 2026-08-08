import { events } from "../data/events";

export default function Events() {
  return (
    <section id="events" className="section">
      <div className="container">
        <h2 className="section-title">Upcoming events</h2>
        <div className="events-grid">
          {events.map((e) => (
            <article className="event-card" key={e.title}>
              <span className="event-tag">{e.tag}</span>
              <h3>{e.title}</h3>
              <p>{e.body}</p>
              <div className="event-meta">
                <span><b>▣</b> {e.date}</span>
                <span><b>◉</b> {e.place}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
