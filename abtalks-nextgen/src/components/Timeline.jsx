import { timeline } from "../data/stats";

export default function Timeline() {
  return (
    <section id="timeline" className="section timeline-section">
      <div className="container">
        <h2 className="section-title">Vicodathon timeline</h2>
        <ol className="timeline">
          {timeline.map((t) => (
            <li key={t.title}>
              <div className="timeline-date">{t.date}</div>
              <h3>{t.title}</h3>
              <p>{t.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
