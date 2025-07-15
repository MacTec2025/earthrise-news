import React from 'react';
import './App.css';
import NatureNewsApp from './NatureNewsApp';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <img src="/earthrise-logo.svg" className="app-logo" alt="EarthRise logo" />
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
