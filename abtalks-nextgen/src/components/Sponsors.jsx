import { sponsors } from "../data/stats";

export default function Sponsors() {
  return (
    <section className="sponsors">
      <div className="container">
        <p className="eyebrow">Backed by</p>
        <div className="sponsor-row">
          {sponsors.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
