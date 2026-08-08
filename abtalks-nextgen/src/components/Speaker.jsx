function Speakers() {
  const speakers = [
    {
      name: "Aman Sharma",
      role: "AI Engineer"
    },
    {
      name: "Priya Gupta",
      role: "Startup Founder"
    },
    {
      name: "Rahul Verma",
      role: "Software Developer"
    }
  ];

  return (
    <section className="speakers">
      <h2>Featured Speakers</h2>

      <div className="cards">
        {speakers.map((speaker, index) => (
          <div className="card" key={index}>
            <h3>{speaker.name}</h3>
            <p>{speaker.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Speakers;