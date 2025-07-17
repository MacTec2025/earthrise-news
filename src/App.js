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
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* other routes... */}
      </Routes>
    </Router>
  );
}


export default App;