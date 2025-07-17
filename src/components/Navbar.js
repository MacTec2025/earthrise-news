import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="/earthrise-logo.svg" alt="EarthRise Logo" className="navbar-logo-img" />
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/topics">Topics</Link>
        <Link to="/regions">Regions</Link>
        <Link to="/deepdives">Deep Dives</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/actions">How to Act</Link>
        <Link to="/events">Events</Link>
        <Link to="/community">Community</Link>
      </div>
    </nav>
  );
}

export default Navbar;