import React from 'react';
import './App.css';
import NatureNewsApp from './NatureNewsApp';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="EarthRise logo" />
        <h1>EarthRise News</h1>
        <p className="tagline">Curated stories from the natural world</p>
      </header>
      <main className="app-main">
        <NatureNewsApp />
      </main>
    </div>
  );
}

export default App;
