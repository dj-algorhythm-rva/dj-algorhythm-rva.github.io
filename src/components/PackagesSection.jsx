function PackagesSection() {
  return (
    <section className='services-section'>
      <h2>Packages</h2>
      <p>For each type of event we have various packages.</p>

      <div className='package-grid'>
        <article className='package-card'>
          <h3>DJ Only</h3>
          <p>
            This is the perfect option if you're just looking for someone to
            bring a professional quality sound system and play your personalized
            playlist.
          </p>
        </article>

        <article className='package-card'>
          <h3>DJ + MC</h3>
          <p>
            This package is for those who are looking for a little more than a
            DJ. With the MC add-on, we provide you with announcements throughout
            the duration of your event and we work closely with your event
            coordinator to ensure everything is on cue and flowing smoothly.
            This package also includes microphones for you and your guests for
            any planned speeches.
          </p>
        </article>

        <article className='package-card'>
          <h3>Live Sound Setup & Management</h3>
          <p>
            This package is for those who are looking for sound management
            throughout an event (typically a wedding ceremony) including:
            microphones for musicians, singers, the officiant, and for readings
            or prayers.
          </p>
        </article>
      </div>
    </section>
  );
}

export { PackagesSection };
