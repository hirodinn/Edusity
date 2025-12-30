import React from "react";
import "./Faculty.css";

export function Faculty() {
  const members = [
    {
      name: "Dr. James Wilson",
      position: "Dean of Education",
      image: "/faculty/faculty_member_1.png",
    },
    {
      name: "Prof. Sarah Johnson",
      position: "Head of Research",
      image: "/faculty/faculty_member_2.png",
    },
    {
      name: "Dr. Robert Chen",
      position: "Senior Lecturer",
      image: "/faculty/faculty_member_3.png",
    },
  ];

  return (
    <section className="faculty-container" id="faculty">
      <div className="faculty-header">
        <h4 className="blue-color">OUR FACULTY</h4>
        <h1 className="dark-blue-color">Meet Our Leadership</h1>
        <p>
          A team of experienced professionals dedicated to shaping the future of
          education.
        </p>
      </div>
      <div className="faculty-grid">
        {members.map((member, index) => (
          <div key={index} className="faculty-card">
            <div className="faculty-img-container">
              <img src={member.image} alt={member.name} />
              <div className="faculty-social-overlay">
                <div className="social-icons">
                  <span className="icon">in</span>
                  <span className="icon">tw</span>
                </div>
              </div>
            </div>
            <div className="faculty-info">
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
