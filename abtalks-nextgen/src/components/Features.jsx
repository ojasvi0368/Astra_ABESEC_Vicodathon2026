import { features } from "../data/stats";

export default function Features() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">What changed</h2>
        <div className="feature-grid">
          {features.map((f, i) => (
            <div className="feature" key={f.title}>
              <span className="feature-num">0{i + 1}</span>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
