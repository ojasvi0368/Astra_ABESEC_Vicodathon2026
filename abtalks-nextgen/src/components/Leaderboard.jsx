import React from 'react';

const leaders = [
  { rank: 1, name: 'Ojasvi Yadav', streak: '48 Days', points: 1450, badge: '🥇 Gold Coder' },
  { rank: 2, name: 'Aarav Sharma', streak: '45 Days', points: 1320, badge: '🥈 Silver Coder' },
  { rank: 3, name: 'Priya Verma', streak: '42 Days', points: 1210, badge: '🥉 Bronze Coder' },
  { rank: 4, name: 'Rohan Gupta', streak: '39 Days', points: 1050, badge: '⭐ Rising Star' },
  { rank: 5, name: 'Ananya Singh', streak: '35 Days', points: 980, badge: '⭐ Rising Star' },
];

const Leaderboard = () => {
  return (
    <section id="leaderboard" className="events-section">
      <div className="events-container">
        <h2 className="section-heading">Community Leaderboard</h2>
        <p className="section-subheading">Top contributors in the 60-Day ABTalks Challenge</p>

        <div className="leaderboard-table">
          <div className="table-header">
            <span>Rank</span>
            <span>Hacker Name</span>
            <span>Streak</span>
            <span>Points</span>
            <span>Badge</span>
          </div>

          {leaders.map((item) => (
            <div key={item.rank} className="table-row">
              <span className="rank-num">#{item.rank}</span>
              <span className="user-name">{item.name}</span>
              <span className="streak-text">🔥 {item.streak}</span>
              <span className="points-text">{item.points} pts</span>
              <span className="badge-text">{item.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;