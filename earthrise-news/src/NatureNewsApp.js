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
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">EarthRise - Nature News</h1>
      <input
        placeholder="Search by topic, region or keyword..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 w-full"
      />
      {filteredArticles.map((article, index) => (
        <div key={index} className="border p-4 rounded shadow-sm mt-4">
          <h2 className="text-lg font-semibold">{article.title}</h2>
          <p className="text-sm text-gray-700">{article.summary}</p>
          <p className="text-xs italic text-gray-600">
            Topic: {article.topic} | Region: {article.region}
          </p>
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline text-sm"
          >
            Read Full Article
          </a>
        </div>
      ))}
    </div>
  );
}
