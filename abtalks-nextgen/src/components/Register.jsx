function Register() {
  return (
    <section className="register">
      <h2>Register For An Event</h2>

      <form className="register-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />

        <select>
          <option>AI Workshop</option>
          <option>Startup Summit</option>
          <option>Placement Talk</option>
        </select>

        <button type="submit">Register</button>
      </form>
    </section>
  );
}

export default Register;