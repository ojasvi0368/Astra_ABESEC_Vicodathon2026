import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">ABTalks <span style={{ color: '#818cf8', fontSize: '0.8rem' }}>NEXTGEN</span></div>
      <ul className="nav-links">
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#events">Hackathons</a></li>
        <li><a href="#leaderboard">Leaderboard</a></li>
        <li><a href="#resources">Roadmaps</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
      <button className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
        Sign In
      </button>
    </nav>
  );
};

export default Navbar;