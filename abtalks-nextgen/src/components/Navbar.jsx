function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        AB<span>Talks</span>
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#events">Events</a>
        <a href="#speakers">Speakers</a>
        <a href="#about">About</a>
      </div>

      <button className="nav-btn">Join Us</button>
    </nav>
  );
}

export default Navbar;