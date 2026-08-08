import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#timeline", label: "Timeline" },
  { href: "#events", label: "Events" },
  { href: "#speakers", label: "Speakers" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav-inner">
        <a href="#top" className="nav-logo">
          AB<span className="text-ember">Talks</span>
        </a>

        <div className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
          <a href="#register" className="btn btn-primary btn-sm">Register</a>
        </div>

        <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </nav>

      <div className={`nav-mobile ${open ? "open" : ""}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a href="#register" className="btn btn-primary btn-sm btn-block" onClick={() => setOpen(false)}>
          Register
        </a>
      </div>
    </header>
  );
}
