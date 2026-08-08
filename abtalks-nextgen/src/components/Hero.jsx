import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-badge">
          🚀 Redesigning ABTalks for Vicodathon 2026
        </div>
        <h1 className="hero-title">
          Build Your Coding Habit. <br />
          <span className="gradient-text">Get Discovered.</span>
        </h1>
        <p className="hero-subtitle">
          Join the ABTalks community, track your 60-day challenge progress, compete in hackathons, and showcase your real-world tech skills.
        </p>
        
        <div className="btn-group">
          <a href="#register" className="btn-primary">Join 60 Days Challenge</a>
          <a href="#events" className="btn-secondary">Explore Hackathons</a>
        </div>

        <div className="stats-container">
          <div className="stat-card">
            <h3>5,000+</h3>
            <p>Active Hackers</p>
          </div>
          <div className="stat-card">
            <h3>60 Days</h3>
            <p>Coding Streak</p>
          </div>
          <div className="stat-card">
            <h3>120+</h3>
            <p>Projects Built</p>
          </div>
          <div className="stat-card">
            <h3>₹50,000+</h3>
            <p>Prize Pools</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;