import React from "react";
import "./Stats.css";

export function Stats() {
  const stats = [
    { label: "Students Enrolled", value: "1500+" },
    { label: "Expert Faculty", value: "100+" },
    { label: "Successful Graduates", value: "98%" },
    { label: "Campus Awards", value: "50+" },
  ];

  return (
    <section className="stats-container">
      <div className="stats-content">
        {stats.map((stat, index) => (
          <div key={index} className="stat-box">
            <h2>{stat.value}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
