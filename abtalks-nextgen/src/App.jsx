import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';
import About from './components/About';
import Speakers from './components/Speakers';
import Register from './components/Register';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      {/* Top Navigation */}
      <Navbar />

      {/* Hero / Landing Section */}
      <Hero />

      {/* Hackathons & 60-Day Challenge Cards */}
      <Events />

      {/* About ABTalks Platform */}
      <About />

      {/* Speakers & Mentors */}
      <Speakers />

      {/* Registration / Call-To-Action */}
      <Register />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;