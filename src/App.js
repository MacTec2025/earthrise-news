import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Topics from './pages/Topics';
import Regions from './pages/Regions';
import DeepDives from './pages/DeepDives';
import Projects from './pages/Projects';
import Actions from './pages/Actions';
import Events from './pages/Events';
import Community from './pages/Community';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/regions" element={<Regions />} />
        <Route path="/deepdives" element={<DeepDives />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/actions" element={<Actions />} />
        <Route path="/events" element={<Events />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Router>
  );
}

export default App;
