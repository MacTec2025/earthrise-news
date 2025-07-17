import React from 'react';

function Home() {
  return (
    <div className="home">
      <h1>🌍 Welcome to EarthRise</h1>
      <p>This is your curated hub for nature news, solutions, and community action.</p>
      <img src={process.env.PUBLIC_URL + "/Juvinille.jpg"} alt="Nature" style={{ width: '100%', marginTop: '20px' }} />
    </div>
  );
}

export default Home;