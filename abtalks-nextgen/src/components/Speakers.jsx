import { speakers } from "../data/speakers";

export default function Speakers() {
  return (
    <section id="speakers" className="section speakers-section">
      <div className="container">
        <h2 className="section-title">Speakers &amp; mentors</h2>
        <div className="speakers-grid">
          {speakers.map((s) => (
            <div className="speaker" key={s.name}>
              <div className="avatar">{s.initials}</div>
              <div>
                <div className="speaker-name">{s.name}</div>
                <div className="speaker-role">{s.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
