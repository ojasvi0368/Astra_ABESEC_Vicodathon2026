import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import TaskSubmission from './components/TaskSubmission';
import Events from './components/Events';
import Leaderboard from './components/Leaderboard';
import Resources from './components/Resources';
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
      <TaskSubmission />
      <Events />
      <Leaderboard />
      <Resources />
      <About />
      <Speakers />
      <Register />
      <Footer />
    </div>
  );
}

export default App;