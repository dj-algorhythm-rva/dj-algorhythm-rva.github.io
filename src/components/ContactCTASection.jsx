import { Link } from "react-router-dom";
import { CallWidget } from "./CallWidget";

function ContactCTASection() {
  return (
    <section className="contact-section">
      <h2>Let's chat today and find your soundtrack!</h2>
      <p>We would love to be a part of your celebration.</p>
      <button className="cta-button">
        <Link to="/inquiry">Contact Us Today</Link>
      </button>

      <CallWidget />
    </section>
  );
}

export { ContactCTASection };
