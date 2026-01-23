import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <div className="logo" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
        {`{ dj_algorhythm }`}
      </div>
      <ul
        style={{ listStyle: "none", display: "flex", gap: "20px", padding: 0 }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/events">Past Events</Link>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };
