import { useState } from "react";

export default function ChallengeDay() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="page">

      <h1>Day 12</h1>

      <div className="card">
        <h2>Responsive Pricing Page</h2>

        <p>Difficulty: Medium</p>
        <p>Estimated Time: 2 Hours</p>
      </div>

      <div className="card">
        <h3>Task Requirements</h3>

        <ul>
          <li>Responsive Design</li>
          <li>3 Pricing Cards</li>
          <li>CTA Button</li>
          <li>Hover Effects</li>
        </ul>
      </div>

      <div className="card">
        <h3>Submit Proof of Work</h3>

        <input
          type="text"
          placeholder="GitHub Commit URL"
        />

        <input
          type="text"
          placeholder="LinkedIn Post URL"
        />

        <button
          onClick={() => setSubmitted(true)}
        >
          Submit Day
        </button>
      </div>

      {submitted && (
        <div className="success">
          🎉 Day Completed!
          <br />
          +1 Streak
          <br />
          +50 XP
        </div>
      )}

    </div>
  );
}