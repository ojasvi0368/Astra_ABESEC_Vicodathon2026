import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="page">
      <h1>Hi Ojasvi 👋</h1>

      <div className="card">
        <h2>🔥 Current Streak</h2>
        <h1>12 Days</h1>
      </div>

      <div className="card">
        <h2>Today's Task</h2>
        <p>Build a Responsive Pricing Page</p>

        <Link to="/day/12">
          <button>Start Challenge</button>
        </Link>
      </div>

      <div className="card">
        <h2>Challenge Progress</h2>
        <p>Day 12 / 60</p>

        <div className="progress">
          <div
            className="fill"
            style={{ width: "20%" }}
          ></div>
        </div>
      </div>

      <div className="card">
        <h2>Achievements</h2>
        <p>🏅 First Commit</p>
        <p>🔥 7 Day Streak</p>
        <p>🚀 Public Builder</p>
      </div>

      <div className="card">
        <h2>Leaderboard</h2>
        <h3>#14 This Week</h3>
        <p>Top 8%</p>
      </div>
    </div>
  );
}