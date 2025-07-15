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
    <div>
      <header className="app-header">
        <img src="/earthrise-logo.svg" alt="EarthRise Logo" className="app-logo" />
        <h1>EarthRise News</h1>
        <p className="tagline">Curated stories from the natural world</p>
      </header>

      <div className="filters">
        <label>
          Filter by Topic:
          <select value={selectedTopic} onChange={(e) => setSelectedTopic(e.target.value)}>
            {uniqueTopics.map((topic) => (
              <option key={topic} value={topic}>{topic}</option>
            ))}
          </select>
        </label>
        <label>
          Filter by Region:
          <select value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)}>
            {uniqueRegions.map((region) => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="app-main">
        {filteredArticles.map((article, index) => (
          <div key={index} className="news-card">
            <img
              src={`https://source.unsplash.com/800x600/?${article.topic},nature`}
              alt={article.title}
              className="article-image"
            />
            <h3>{article.title}</h3>
            <div className="article-tags">
              <span className="tag">{article.topic}</span>
              <span className="tag">{article.region}</span>
            </div>
            <p>{article.summary}</p>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="article-link"
            >
              Read Full Article
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NatureNewsApp;
