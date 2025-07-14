import { useState } from "react";

const mockArticles = [
  {
    title: "Amazon Rainforest Faces New Threats from Illegal Mining",
    summary: "Illegal gold mining in the Amazon continues to devastate ecosystems and harm indigenous communities.",
    topic: "Forests",
    region: "South America",
    link: "https://example.com/amazon-mining"
  },
  {
    title: "Coral Reefs Declining Faster Than Predicted",
    summary: "Climate change and ocean acidification are accelerating coral bleaching events globally.",
    topic: "Oceans",
    region: "Global",
    link: "https://example.com/coral-bleaching"
  },
  {
    title: "Grassroots Conservation Wins in East Africa",
    summary: "Local communities in Kenya have successfully restored thousands of hectares of savannah.",
    topic: "Conservation",
    region: "Africa",
    link: "https://example.com/kenya-conservation"
  }
];

export default function NatureNewsApp() {
  const [search, setSearch] = useState("");

  const filteredArticles = mockArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(search.toLowerCase()) ||
      article.topic.toLowerCase().includes(search.toLowerCase()) ||
      article.region.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-main">
      <input
        placeholder="Search by topic, region or keyword..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: '100%',
          padding: '12px 16px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          marginBottom: '2rem',
          fontSize: '1rem'
        }}
      />

      {filteredArticles.map((article, index) => (
        <div key={index} className="article-card">
          <h2 className="article-title">{article.title}</h2>
          <p className="article-summary">{article.summary}</p>
          <p className="article-meta">
            Topic: {article.topic} | Region: {article.region}
          </p>
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
  );
}
