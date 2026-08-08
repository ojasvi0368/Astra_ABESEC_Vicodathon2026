function Events() {
  const events = [
    {
      title: "AI Workshop",
      date: "15 Aug 2026",
    },
    {
      title: "Startup Summit",
      date: "20 Aug 2026",
    },
    {
      title: "Placement Talk",
      date: "25 Aug 2026",
    },
  ];

  return (
    <section className="events">
      <h2>Upcoming Events</h2>

      <div className="cards">
        {events.map((event, index) => (
          <div className="card" key={index}>
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <button>Register</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;