import React, { useState } from 'react';

const articles = [
  {
    title: 'Coral Reefs Are Dying',
    topic: 'Ocean',
    region: 'Global',
    summary: 'Climate change is affecting coral reef health across the globe.',
    link: 'https://example.com/coral-reefs',
  },
  {
    title: 'Amazon Rainforest Under Threat',
    topic: 'Forest',
    region: 'South America',
    summary: 'Deforestation in the Amazon continues to be a major environmental issue.',
    link: 'https://example.com/amazon',
  },
  {
    title: 'Melting Glaciers and Rising Seas',
    topic: 'Climate',
    region: 'Polar',
    summary: 'Glaciers are retreating at unprecedented rates, contributing to sea-level rise.',
    link: 'https://example.com/glaciers',
  },
];

function NatureNewsApp() {
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('All');

  const filteredArticles = articles.filter((article) => {
    const matchTopic = selectedTopic === 'All' || article.topic === selectedTopic;
    const matchRegion = selectedRegion === 'All' || article.region === selectedRegion;
    return matchTopic && matchRegion;
  });

  const uniqueTopics = ['All', ...new Set(articles.map((a) => a.topic))];
  const uniqueRegions = ['All', ...new Set(articles.map((a) => a.region))];

  return (
    <div style={{ padding: '2rem', backgroundColor: '#f2f8f5', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <img src="/earthrise-logo.svg" alt="EarthRise Logo" style={{ height: '80px' }} />
        <h1 style={{ fontSize: '2.8rem', color: '#004d40', margin: '0.5rem 0' }}>EarthRise News</h1>
        <p style={{ fontSize: '1.1rem', color: '#555' }}>Curated stories from the natural world</p>
      </div>

      {/* Filters */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <label style={{ marginRight: '1rem' }}>
          Filter by Topic:
          <select value={selectedTopic} onChange={(e) => setSelectedTopic(e.target.value)} style={{ marginLeft: '0.5rem' }}>
            {uniqueTopics.map((topic) => (
              <option key={topic} value={topic}>{topic}</option>
            ))}
          </select>
        </label>
        <label>
          Filter by Region:
          <select value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)} style={{ marginLeft: '0.5rem' }}>
            {uniqueRegions.map((region) => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
        </label>
      </div>

      {/* Articles */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem'
      }}>
        {filteredArticles.map((article, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(https://source.unsplash.com/800x600/?${article.topic},nature)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '16px',
              color: '#fff',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              height: '300px',
              position: 'relative',
              boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
            }}
          >
            <div style={{
              background: 'rgba(0,0,0,0.5)',
              borderRadius: '12px',
              padding: '1rem',
              backdropFilter: 'blur(5px)'
            }}>
              <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>{article.title}</h3>
              <div style={{ marginBottom: '0.5rem' }}>
                <span style={{
                  marginRight: '0.5rem',
                  backgroundColor: '#ffc107',
                  color: '#000',
                  borderRadius: '8px',
                  padding: '0.2rem 0.6rem',
                  fontSize: '0.8rem',
                  fontWeight: 'bold'
                }}>{article.topic}</span>
                <span style={{
                  backgroundColor: '#17a2b8',
                  color: '#fff',
                  borderRadius: '8px',
                  padding: '0.2rem 0.6rem',
                  fontSize: '0.8rem',
                  fontWeight: 'bold'
                }}>{article.region}</span>
              </div>
              <p style={{ fontSize: '0.9rem' }}>{article.summary}</p>
              <a href={article.link} target="_blank" rel="noopener noreferrer" style={{
                color: '#fff',
                textDecoration: 'underline',
                marginTop: '0.5rem',
                display: 'inline-block'
              }}>Read Full Article</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NatureNewsApp;
