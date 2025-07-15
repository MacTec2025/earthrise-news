import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img
            src="/earthrise-logo.svg"
            alt="EarthRise Logo"
            className="navbar-logo-img"
          />
        </a>
      </div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="#articles">Articles</a>
        <a href="#research">Research</a>
        <a href="#community">Community</a>
        <a href="#projects">Projects</a>
        <a href="#events">Events</a>
        <a href="#about">About</a>
      </div>
    </nav>
  );
}

export default Navbar;