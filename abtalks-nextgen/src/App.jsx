import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Events from './components/Events';
import Leaderboard from './components/Leaderboard';
import About from './components/About';
import Speakers from './components/Speakers';
import Register from './components/Register';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Dashboard />
      <Events />
      <Leaderboard />
      <About />
      <Speakers />
      <Register />
      <Footer />
    </div>
  );
}

export default App;