export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-logo">
          AB<span className="text-ember">Talks</span>
        </span>
        <p>© {new Date().getFullYear()} ABTalks · Redesign concept for Vicodathon 2026</p>
      </div>
    </footer>
  );
}
