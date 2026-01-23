function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero">
        <h1>{`{ dj_algorhythm }`}</h1>
        <p className="tagline">
          <code>// It's your party; I'm just the DJ.</code>
        </p>
      </header>

      {/* Bio Section */}
      <section className="bio-section">
        <h2>Hello and welcome!</h2>
        <p>
          My name is Kyle, aka <strong>{`{ dj_algorhythm }`}</strong>. As far
          back as I can remember my life has always had a soundtrack. I've
          always loved music and been deeply impacted by the right song at the
          right time.
        </p>
        <p>
          There's something profound about music and when it's missing (or just
          isn't right) the atmosphere of the party is diminished. But when the
          music is rightly curated, and you can <em>feel</em> the beat, you
          can't help but dance.
        </p>
        <p>
          My desire is to understand <strong>your</strong> vision for{" "}
          <strong>your</strong> party and to help you find <strong>your</strong>{" "}
          soundtrack for your big event! I've been doing this since 2001 for a
          wide range of events and a variety of people. Let's find your perfect soundtrack.
        </p>
      </section>

      {/* Services / Packages Section */}
      <section className="services-section">
        <h2>Packages</h2>
        <p>For each type of event we have various packages.</p>

        <div className="package-grid">
          <article className="package-card">
            <h3>DJ Only</h3>
            <p>
              This is the perfect option if you're just looking for someone to
              bring a professional quality sound system and play your
              personalized playlist.
            </p>
          </article>

          <article className="package-card">
            <h3>DJ + MC</h3>
            <p>
              This package is for those who are looking for a little more than a
              DJ. With the MC add-on, we provide you with announcements
              throughout the duration of your event and we work closely with
              your event coordinator to ensure everything is on cue and flowing
              smoothly. This package also includes microphones for you and your
              guests for any planned speeches.
            </p>
          </article>

          <article className="package-card">
            <h3>Live Sound Setup & Management</h3>
            <p>
              This package is for those who are looking for sound management
              throughout an event (typically a wedding ceremony) including:
              microphones for musicians, singers, the officiant, and for
              readings or prayers.
            </p>
          </article>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="addons-section">
        <h2>Add-ons</h2>
        <p>We provide a variety of add-ons including:</p>
        <ul>
          <li>Projector + screen for slideshows or videos</li>
          <li>Dance floor lighting</li>
          <li>Fog machine</li>
          <li>Bubble machine</li>
        </ul>
      </section>

      {/* Event Types Section */}
      <section className="event-types-section">
        <h2>Specializing In</h2>
        <p>
          We are pleased to provide quality DJ entertainment for various types
          of events, specializing in:
        </p>
        <p className="event-list">
          Weddings and ceremonies, homecomings, proms, school dances, holiday
          parties, graduations, engagement parties, birthdays, anniversaries,
          corporate events, halloween parties, summer parties, family reunions,
          and class reunions.
        </p>
      </section>

      {/* Contact Call to Action */}
      <section className="contact-section">
        <h2>Let's chat today and find your soundtrack!</h2>
        <p>We would love to be a part of your celebration.</p>
        <a href="mailto:your-email@example.com" className="cta-button">
          Contact Us Today
        </a>
      </section>
    </div>
  );
}

export { Home };
