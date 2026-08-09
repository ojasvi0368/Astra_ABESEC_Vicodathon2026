import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", team: "" });
  const [done, setDone] = useState("");

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setDone(`You're on the list! We'll email ${form.email} with your dashboard link.`);
    setForm({ name: "", email: "", team: "" });
  };

  return (
    <section id="register" className="section">
      <div className="container">
        <div className="register-box">
          <div>
            <h2 className="section-title">
              Claim your <span className="gradient-text">seat</span>
            </h2>
            <p>
              Registration takes under a minute. You will get the dashboard link, the schedule and
              your mentor match by email.
            </p>
          </div>

          <form className="form" onSubmit={submit}>
            <input required name="name" placeholder="Full name" value={form.name} onChange={change} />
            <input required type="email" name="email" placeholder="Email address" value={form.email} onChange={change} />
            <input name="team" placeholder="Team name (optional)" value={form.team} onChange={change} />
            <button type="submit" className="btn btn-primary btn-block">
              Register for Vicodathon 2026
            </button>
            {done && <p className="success">{done}</p>}
            <small>Free for students. No spam, one email per milestone.</small>
          </form>
        </div>
      </div>
    </section>
  );
}
