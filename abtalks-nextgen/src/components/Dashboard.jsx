import React, { useState } from 'react';

const Dashboard = () => {
  const [streak, setStreak] = useState(14);
  const [completedDays, setCompletedDays] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);

  const toggleDay = (day) => {
    if (completedDays.includes(day)) {
      setCompletedDays(completedDays.filter((d) => d !== day));
    } else {
      setCompletedDays([...completedDays, day]);
    }
  };

  return (
    <section id="dashboard" className="dashboard-section">
      <div className="events-container">
        <div className="dashboard-header">
          <div>
            <h2 className="section-heading" style={{ textAlign: 'left' }}>
              60-Day Challenge Interactive Dashboard
            </h2>
            <p style={{ color: '#9ca3af' }}>Track your daily coding habits & progress in real-time.</p>
          </div>
          <div className="streak-badge">
            🔥 {completedDays.length} Days Active Streak
          </div>
        </div>

        {/* Challenge Grid */}
        <div className="grid-card">
          <h3 style={{ marginBottom: '15px' }}>Your 60-Day Progress Heatmap</h3>
          <div className="days-grid">
            {Array.from({ length: 60 }, (_, i) => i + 1).map((day) => {
              const isDone = completedDays.includes(day);
              return (
                <button
                  key={day}
                  onClick={() => toggleDay(day)}
                  className={`day-box ${isDone ? 'done' : ''}`}
                  title={`Day ${day}: ${isDone ? 'Completed' : 'Click to mark complete'}`}
                >
                  {day}
                </button>
              );
            })}
          </div>
          <p style={{ fontSize: '0.85rem', color: '#6b7280', marginTop: '15px' }}>
            💡 Tip: Click on any day box to toggle your task completion status.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;