import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/earthrise-logo.svg'; // Or wherever your logo is

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="EarthRise Logo" className="navbar-logo-img" />
      </Link>
      <div className="navbar-links">
        <Link to="/topics">Topics</Link>
        <Link to="/regions">Regions</Link>
        <Link to="/deep-dives">Deep Dives</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/how-to-act">How to Act</Link>
        <Link to="/events">Events</Link>
        <Link to="/community">Community</Link>
      </div>
    </nav>
  );
}

export default Navbar;