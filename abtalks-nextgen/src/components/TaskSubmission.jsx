import React, { useState } from 'react';

const TaskSubmission = () => {
  const [day, setDay] = useState(15);
  const [link, setLink] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!link) return;
    setStatus('Submitted successfully! 🔥 Streak updated.');
    setLink('');
  };

  return (
    <section className="dashboard-section" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="events-container">
        <h2 className="section-heading">Daily Challenge Submission</h2>
        <p className="section-subheading">Submit your daily proof of work (GitHub PR, LeetCode submission, or Tweet)</p>

        <div className="grid-card" style={{ maxWidth: '600px', margin: '0 auto', background: 'var(--bg-card)', border: '1px solid var(--border-card)', padding: '30px', borderRadius: '16px' }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)' }}>Challenge Day</label>
              <input 
                type="number" 
                value={day} 
                onChange={(e) => setDay(e.target.value)} 
                style={{ width: '100%', padding: '12px', borderRadius: '8px', background: '#0d0f14', border: '1px solid var(--border-card)', color: '#fff' }} 
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)' }}>Proof Link (GitHub / LeetCode / X Post)</label>
              <input 
                type="url" 
                placeholder="https://github.com/your-username/project" 
                value={link} 
                onChange={(e) => setLink(e.target.value)} 
                required
                style={{ width: '100%', padding: '12px', borderRadius: '8px', background: '#0d0f14', border: '1px solid var(--border-card)', color: '#fff' }} 
              />
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', padding: '12px' }}>
              Submit Daily Task
            </button>

            {status && <p style={{ color: '#34d399', textAlign: 'center', marginTop: '15px', fontWeight: '600' }}>{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default TaskSubmission;