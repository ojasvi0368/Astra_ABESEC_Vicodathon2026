import React from 'react';

const eventsData = [
  {
    id: 1,
    title: 'VICODATHON 2026',
    tag: 'Live Hackathon',
    desc: 'Redesign the official ABTalks Platform and showcase your frontend mastery.',
    deadline: 'Aug 2026',
    status: 'Active',
  },
  {
    id: 2,
    title: '60-Day Code Challenge',
    tag: 'Daily Habit',
    desc: 'Commit code daily for 60 days, maintain your GitHub streak, and earn badges.',
    deadline: 'Ongoing',
    status: 'Popular',
  },
  {
    id: 3,
    title: 'Tech Speaker Series',
    tag: 'Community',
    desc: 'Live interactive sessions with industry leaders and open-source creators.',
    deadline: 'Next Weekend',
    status: 'Upcoming',
  },
];

const Events = () => {
  return (
    <section id="events" className="events-section">
      <div className="events-container">
        <h2 className="section-heading">Active Programs & Hackathons</h2>
        <p className="section-subheading">Participate, innovate, and showcase your talent to the ABTalks network.</p>
        
        <div className="events-grid">
          {eventsData.map((item) => (
            <div key={item.id} className="event-card">
              <div className="card-header">
                <span className="tag-badge">{item.tag}</span>
                <span className="status-badge">{item.status}</span>
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-desc">{item.desc}</p>
              <div className="card-footer">
                <span>⏳ {item.deadline}</span>
                <button className="card-btn">Explore →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;