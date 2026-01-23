import { events } from '../data/events';

function PastEvents() {
  // Sort events by date (newest first) just in case the array order gets mixed up
  const sortedEvents = [...events].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="events-container">
      <header className="page-header">
        <h1>Past Events</h1>
        <p>A history of celebrations and soundtracks.</p>
      </header>

      <div className="timeline">
        {sortedEvents.map((event) => (
          <article key={event.id} className="event-card">
            <div className="event-date">{event.date}</div>
            <div className="event-content">
              <h3>{event.title}</h3>
              <p className="event-location">📍 {event.location}</p>
              {event.description && <p className="event-description">{event.description}</p>}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export { PastEvents };