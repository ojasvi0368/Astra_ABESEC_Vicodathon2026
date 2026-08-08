import React from 'react';

const roadmaps = [
  { id: 1, title: 'Full-Stack Web Dev', level: 'Beginner to Advanced', modules: '12 Modules', icon: '💻' },
  { id: 2, title: 'Data Structures & Algo', level: 'C++ / Java / Python', modules: '15 Modules', icon: '⚡' },
  { id: 3, title: 'AI & Machine Learning', level: 'Python & PyTorch', modules: '10 Modules', icon: '🤖' },
];

const Resources = () => {
  return (
    <section id="resources" className="events-section">
      <div className="events-container">
        <h2 className="section-heading">Curated Learning Roadmaps</h2>
        <p className="section-subheading">Free structured guides to help you complete your 60-day challenge.</p>

        <div className="events-grid">
          {roadmaps.map((r) => (
            <div key={r.id} className="event-card">
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{r.icon}</div>
              <h3 className="card-title">{r.title}</h3>
              <p className="card-desc">Level: {r.level} • {r.modules}</p>
              <button className="btn-secondary" style={{ width: '100%' }}>View Roadmap →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;