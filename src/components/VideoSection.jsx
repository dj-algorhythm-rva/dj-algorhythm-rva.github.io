function VideoSection() {
  const YOUTUBE_VIDEO_ID = "RymnBf-X8q8";

  return (
    <section
      className="video-section"
      style={{ textAlign: "center", marginBottom: "4rem" }}
    >
      <div
        className="video-wrapper"
        style={{
          position: "relative",
          paddingBottom: "56.25%" /* 16:9 Aspect Ratio */,
          height: 0,
          overflow: "hidden",
          maxWidth: "800px",
          margin: "0 auto",
          border: "1px solid #333",
          borderRadius: "8px",
        }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0`}
          title="DJ Algorhythm Promo"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
}

export { VideoSection };
