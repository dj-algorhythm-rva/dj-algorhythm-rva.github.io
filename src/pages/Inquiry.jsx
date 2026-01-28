import { useState } from "react";
import { Success } from "./Success";
function Inquiry() {
  const FORMSUBMIT_ENDPOINT =
    "https://formsubmit.co/d4ee6fe82b93f17cb483d1d4978dd27e";

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Handle checkboxes manually (FormData only grabs the last checked value by default)
    const addons = formData.getAll("addons");
    const vendors = formData.getAll("vendors");

    // Combine them into the data object for sending
    // FormSubmit allows custom configuration via underscores (e.g., _subject, _template)
    const payload = {
      ...data,
      addons: addons.join(", "),
      vendors: vendors.join(", "),
      _subject: `{ dj_algorhythm } New Inquiry from ${data.name}`,
      _template: "table",
      _captcha: "false",
    };

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  // 1. Success View Component
  if (status === "success") {
    return <Success />;
  }

  return (
    <div className="page-content">
      <header className="hero" style={{ padding: "2rem 0" }}>
        <h1>Get in Touch</h1>
        <p className="tagline">
          <code>// It's your party; I'm just the DJ.</code>
        </p>
      </header>

      <section className="contact-form-section">
        {status === "success" && (
          <div className="alert success">SUCCESS: Inquiry transmitted.</div>
        )}
        {status === "error" && (
          <div className="alert error">
            ERROR: Transmission failed. Please email me directly:{" "}
            <a href="mailto:DJ.Algorhythm.RVA@gmail.com">
              DJ.Algorhythm.RVA@gmail.com
            </a>
            .
          </div>
        )}

        <form onSubmit={handleSubmit} className="code-form">
          {/* Contact Info */}
          <h3>1. Contact Info</h3>
          <div className="form-group">
            <label>First and Last Name</label>
            <input type="text" name="name" required />
          </div>
          <div className="form-group">
            <label>E-mail</label>
            <input type="email" name="email" required />
          </div>
          <div className="form-group">
            <label>Phone #</label>
            <input type="tel" name="phone" />
          </div>

          {/* Event Logistics */}
          <h3>2. Event Logistics</h3>
          <div className="form-group">
            <label>Event Date</label>
            <input type="date" name="date" required />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Start Time</label>
              <input type="time" name="start_time" required />
            </div>
            <div className="form-group">
              <label>End Time</label>
              <input type="time" name="end_time" required />
            </div>
          </div>
          <div className="form-group">
            <label>Venue Name</label>
            <input type="text" name="venue_name" required />
          </div>
          <div className="form-group">
            <label>Venue Address</label>
            <input type="text" name="venue_address" required />
          </div>

          {/* Event Scope */}
          <h3>3. Event Scope</h3>
          <div className="form-group">
            <label>Event Type</label>
            <select name="event_type" required className="code-select">
              <option value="">-- Select Event Type --</option>
              <option value="Wedding Reception">
                Wedding Reception ($1,750+)
              </option>
              <option value="Wedding Ceremony + Reception">
                Wedding Ceremony + Reception ($2,000+)
              </option>
              <option value="Engagement Party">Engagement Party ($400+)</option>
              <option value="Anniversary Party">
                Anniversary Party ($750+)
              </option>
              <option value="Corporate Event">Corporate Event ($2,000+)</option>
              <option value="Prom">Prom ($2,500+)</option>
              <option value="Homecoming">Homecoming ($2,000+)</option>
              <option value="General School Dance">
                General School Dance ($500+)
              </option>
              <option value="Graduation Party">Graduation Party ($300+)</option>
              <option value="Class Reunion">Class Reunion ($500+)</option>
              <option value="Family Reunion">Family Reunion ($500+)</option>
              <option value="Birthday Party">Birthday Party ($300+)</option>
              <option value="House Party">House Party ($300+)</option>
              <option value="Non-Profit Event">Non-Profit Event ($600+)</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Venue Specifics */}
          <div className="form-group">
            <label>Setting</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="setting" value="Indoor" /> Indoor
              </label>
              <label>
                <input type="radio" name="setting" value="Outdoor" /> Outdoor
              </label>
              <label>
                <input type="radio" name="setting" value="Both" /> Both
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Venue Type</label>
            <select name="venue_type" required className="code-select">
              <option value="">-- Select Venue Type --</option>
              <option value="Banquet Hall/Ballroom">
                Banquet Hall/Ballroom
              </option>
              <option value="Barn">Barn</option>
              <option value="Community Center">Community Center</option>
              <option value="Concert Hall">Concert Hall</option>
              <option value="Conference Center">Conference Center</option>
              <option value="Home">Home</option>
              <option value="Place of Worship">Place of Worship</option>
              <option value="School">School</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Equipment Add-ons */}
          <h3>4. Equipment & Add-ons</h3>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" name="addons" value="MC Services" /> MC
              Services
            </label>
            <label>
              <input type="checkbox" name="addons" value="Microphones" />{" "}
              Microphones
            </label>
            <label>
              <input
                type="checkbox"
                name="addons"
                value="Dance Floor Lighting"
              />{" "}
              Dance Floor Lighting
            </label>
            <label>
              <input type="checkbox" name="addons" value="Bubble Machine" />{" "}
              Bubble Machine
            </label>
            <label>
              <input
                type="checkbox"
                name="addons"
                value="Projector and Screen"
              />{" "}
              Projector & Screen
            </label>
          </div>

          {/* Budget & Guests */}
          <h3>5. The Numbers</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Guest Count</label>
              <input type="number" name="guest_count" required />
            </div>
            <div className="form-group">
              <label>Budget for DJ Services</label>
              <input type="text" name="budget" placeholder="$" required />
            </div>
          </div>
          <div className="form-group">
            <label>Promo Code / Referral</label>
            <input type="text" name="promo_code" />
          </div>

          {/* Vendor Recommendations */}
          <h3>6. Vendor Recommendations Needed?</h3>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" name="vendors" value="Planner" />{" "}
              Planner/Coordinator
            </label>
            <label>
              <input type="checkbox" name="vendors" value="Venue" /> Venue
            </label>
            <label>
              <input type="checkbox" name="vendors" value="Caterer" /> Caterer
            </label>
            <label>
              <input type="checkbox" name="vendors" value="Photographer" />{" "}
              Photographer
            </label>
            <label>
              <input type="checkbox" name="vendors" value="Videographer" />{" "}
              Videographer
            </label>
            <label>
              <input type="checkbox" name="vendors" value="Baker" /> Baker
            </label>
          </div>

          <div className="form-group">
            <label>Additional Comments</label>
            <textarea name="message" rows="4"></textarea>
          </div>

          <button
            type="submit"
            className="cta-button"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Transmitting..." : "Send Inquiry"}
          </button>
        </form>
      </section>
    </div>
  );
}

export { Inquiry };
