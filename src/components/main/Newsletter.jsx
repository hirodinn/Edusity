import React from "react";
import "./Newsletter.css";

export function Newsletter() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
  };

  return (
    <section className="newsletter-container">
      <div className="newsletter-content">
        <div className="newsletter-text">
          <h2>Subscribe to our Newsletter</h2>
          <p>
            Get the latest updates on our programs, events, and academic news.
          </p>
        </div>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
