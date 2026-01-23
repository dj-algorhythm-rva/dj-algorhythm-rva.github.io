import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { PastEvents } from "./pages/PastEvents";
import "./App.css"; // We will edit this in styling later

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<PastEvents />} />
        </Routes>
      </div>
    </Router>
  );
}

export { App };
