import React from "react";

export function CallWidget() {
  const PHONE_NUMBER = "(804) 592-1508";
  const CLEAN_NUMBER = PHONE_NUMBER.replace(/\D/g, "");

  return (
    <div
      className="call-widget"
      style={{
        border: "1px dashed var(--accent-yellow)",
        padding: "1.5rem",
        borderRadius: "6px",
        marginTop: "3rem",
        textAlign: "center",
        backgroundColor: "rgba(220, 220, 170, 0.05)",
      }}
    >
      <h3
        style={{
          color: "var(--accent-yellow)",
          marginTop: 0,
          fontFamily: "var(--font-code)",
        }}
      >
        // Need a quicker response?
      </h3>

      <p
        style={{
          fontFamily: "var(--font-code)",
          fontSize: "1.5rem",
          margin: "1rem 0",
          letterSpacing: "1px",
          fontWeight: "bold",
        }}
      >
        {PHONE_NUMBER}
      </p>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {/* Call Button */}
        <a
          href={`tel:${CLEAN_NUMBER}`}
          className="cta-button"
          style={{
            backgroundColor: "transparent",
            border: "1px solid var(--accent-blue)",
            color: "var(--accent-blue)",
            marginTop: 0,
          }}
        >
          call(me);
        </a>

        {/* Text Button */}
        <a
          href={`sms:${CLEAN_NUMBER}`}
          className="cta-button"
          style={{
            backgroundColor: "transparent",
            border: "1px solid var(--accent-green)",
            color: "var(--accent-green)",
            marginTop: 0,
          }}
        >
          text(me);
        </a>
      </div>
    </div>
  );
}
