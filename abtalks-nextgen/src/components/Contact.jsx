const items = [
  { ico: "✉", label: "hello@abtalks.in", note: "General & partnerships" },
  { ico: "◈", label: "@abtalks", note: "Community updates" },
  { ico: "◉", label: "Bengaluru, India", note: "Main stage venue" },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container contact-grid">
        <h2 className="section-title">Get in touch</h2>
        <div className="contact-cards">
          {items.map((i) => (
            <div className="contact-card" key={i.label}>
              <div className="ico text-ember">{i.ico}</div>
              <div className="label">{i.label}</div>
              <div className="note">{i.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
