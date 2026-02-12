function BioSection() {
  return (
    <section
      className='bio-section'
      style={{
        display: 'flex',
        gap: '2rem',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}
    >
      {/* Profile Image */}
      <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
        <img
          src='/profile.webp'
          alt='DJ Algorhythm'
          style={{
            width: '300px', // 1. Force a fixed width
            height: '300px', // 2. Force the same height
            objectFit: 'cover', // 3. Crop the image to fill the circle without squishing
            borderRadius: '50%',
            border: '4px solid var(--accent-blue)',
            boxShadow: '0 0 20px rgba(86, 156, 214, 0.2)',
          }}
        />
      </div>

      <div style={{ flex: '1 1 400px' }}>
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
          My desire is to understand <strong>your</strong> vision for{' '}
          <strong>your</strong> party and to help you find <strong>your</strong>{' '}
          soundtrack for your big event! I've been doing this since 2001 for a
          wide range of events and a variety of people. Let's find your perfect
          soundtrack.
        </p>
      </div>
    </section>
  );
}

export { BioSection };
