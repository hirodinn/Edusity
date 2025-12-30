import React, { useState } from "react";
import "./FAQ.css";

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What programs do you offer?",
      answer:
        "We offer a wide range of undergraduate and postgraduate programs in Education, including teaching certifications, educational leadership, and counseling.",
    },
    {
      question: "How can I apply for admission?",
      answer:
        "You can apply through our online portal by submitting your transcripts, letters of recommendation, and a personal statement.",
    },
    {
      question: "Are there scholarship opportunities?",
      answer:
        "Yes, we offer both merit-based and need-based scholarships. Information can be found on our 'Financial Aid' page.",
    },
    {
      question: "What is the campus life like?",
      answer:
        "Campus life at Edusity is vibrant and inclusive, with over 50 student organizations, state-of-the-art facilities, and numerous events throughout the year.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-container" id="faq">
      <div className="faq-header">
        <h4 className="blue-color">FAQ</h4>
        <h1 className="dark-blue-color">Frequently Asked Questions</h1>
      </div>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <span className="faq-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
