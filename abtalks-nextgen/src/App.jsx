import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import About from "./components/About.jsx";
import Features from "./components/Features.jsx";
import Timeline from "./components/Timeline.jsx";
import Events from "./components/Events.jsx";
import Speakers from "./components/Speakers.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Sponsors from "./components/Sponsors.jsx";
import Register from "./components/Register.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

import "./App.css";

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Features />
      <Timeline />
      <Events />
      <Speakers />
      <Testimonials />
      <Sponsors />
      <Register />
      <Contact />
      <Footer />
    
    </main>
  );
}
import { Routes, Route } from "react-router-dom";
import Landing from "./Landing"; // tumhara current homepage
import Dashboard from "./pages/Dashboard";
import ChallengeDay from "./pages/ChallengeDay";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/day/12" element={<ChallengeDay />} />
    </Routes>
  );
}

export default App;