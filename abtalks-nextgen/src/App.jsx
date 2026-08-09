import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Features from "./components/Features";
import Timeline from "./components/Timeline";
import Events from "./components/Events";
import Speakers from "./components/Speakers";
import Testimonials from "./components/Testimonials";
import Sponsors from "./components/Sponsors";
import Register from "./components/Register";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import ChallengeDay from "./pages/ChallengeDay";

import "./App.css";

function LandingPage() {
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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/day/12" element={<ChallengeDay />} />
    </Routes>
  );
}


