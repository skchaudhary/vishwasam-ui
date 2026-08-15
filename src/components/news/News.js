import React from "react";
import "./News.css";
import newsArticles from "../../data/news";

function News() {
  return (
    <div className="News">
      <div className="News-header">
        <h2>Latest News</h2>
        <p>Updates, announcements, and insights from Bharwaliya.</p>
      </div>

      <div className="News-list">
        {newsArticles.map((article) => (
          <div className="News-card" key={article.id}>
            <h3>{article.title}</h3>
            <div className="News-meta">
              <span>📅 {article.date}</span>
              <span>👤 {article.author}</span>
            </div>
            <p>{article.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
