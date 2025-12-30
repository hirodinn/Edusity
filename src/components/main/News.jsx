import React from "react";
import "./News.css";

export function News() {
  const newsItems = [
    {
      title: "New Research Grant Awarded",
      date: "Dec 28, 2024",
      author: "Admin",
      excerpt:
        "Our science department has received a major grant for environmental research...",
      image: "/news/news1.png",
    },
    {
      title: "Campus Expansion Breakthrough",
      date: "Dec 25, 2024",
      author: "News Team",
      excerpt:
        "Construction for the new tech wing has officially begun this week...",
      image: "/news/news2.png",
    },
    {
      title: "Alumni Success Story: Jane Doe",
      date: "Dec 20, 2024",
      author: "Global Ed",
      excerpt:
        "Meet Jane Doe, a graduate who is now leading global changes in education...",
      image: "/news/news3.png",
    },
  ];

  return (
    <section className="news-container" id="news">
      <div className="news-header">
        <h4 className="blue-color">LATEST NEWS</h4>
        <h1 className="dark-blue-color">University Updates</h1>
      </div>
      <div className="news-grid">
        {newsItems.map((item, index) => (
          <div key={index} className="news-card">
            <div className="news-img">
              <img src={item.image} alt={item.title} />
              <div className="news-date">
                <span>{item.date}</span>
              </div>
            </div>
            <div className="news-info">
              <span className="news-author">By {item.author}</span>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
              <button className="read-more">Read More →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
