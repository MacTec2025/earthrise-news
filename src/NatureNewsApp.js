import React, { useState } from 'react';
import articles from './articles';

function NatureNewsApp() {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedTag, setSelectedTag] = useState('All');

  const uniqueRegions = ['All', ...new Set(articles.map(article => article.region))];
  const uniqueTags = ['All', ...new Set(articles.flatMap(article => article.tags))];

  const filteredArticles = articles.filter(article => {
    const regionMatch = selectedRegion === 'All' || article.region === selectedRegion;
    const tagMatch = selectedTag === 'All' || article.tags.includes(selectedTag);
    return regionMatch && tagMatch;
  });

  return (
    <div className="App">
      <header className="app-header">
       <img src="/earthrise-logo.png" alt="EarthRise News Logo" className="app-logo" />
        <h1>EarthRise News</h1>
        <p>Curated nature and conservation headlines from around the globe.</p>
      </header>

      <div className="filters">
        <label>
          Region:
          <select value={selectedRegion} onChange={e => setSelectedRegion(e.target.value)}>
            {uniqueRegions.map(region => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
        </label>
        <label>
          Tag:
          <select value={selectedTag} onChange={e => setSelectedTag(e.target.value)}>
            {uniqueTags.map(tag => (
              <option key={tag} value={tag}>{tag}</option>
            ))}
          </select>
        </label>
      </div>

      <main className="app-main">
        {filteredArticles.map((article, index) => (
          <div key={index} className="news-card">
            {article.image && (
              <img src={article.image} alt={article.title} className="article-image" />
            )}
            <h2>{article.title}</h2>
            <p>{article.summary}</p>
            <div className="article-tags">
              {article.tags.map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>
            <a href={article.link} target="_blank" rel="noopener noreferrer" className="article-link">
              Read more →
            </a>
          </div>
        ))}
      </main>
    </div>
  );
}

export default NatureNewsApp;
