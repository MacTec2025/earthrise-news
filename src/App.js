import React from 'react';
import './App.css';
import NatureNewsApp from './NatureNewsApp';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <img src="/earthrise-logo.png" className="app-logo" alt="EarthRise logo" />
        <div style={{ fontFamily: 'Merriweather, serif', fontSize: '1.5rem', marginTop: '0.5rem' }}>
          Earth Rise
        </div>
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
