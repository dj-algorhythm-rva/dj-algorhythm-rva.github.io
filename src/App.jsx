import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { PastEvents } from "./pages/PastEvents";
import { Inquiry } from "./pages/Inquiry";
import { Success } from "./pages/Success";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<PastEvents />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/success" element={<Success />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export { App };
