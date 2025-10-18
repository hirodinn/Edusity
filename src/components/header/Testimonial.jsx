import { useState } from "react";
import "./Testimonial.css";
export function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  function increaseIndex() {
    if (currentIndex === 2) return;
    setCurrentIndex(currentIndex + 1);
  }
  function decreaseIndex() {
    if (currentIndex === 0) return;
    setCurrentIndex(currentIndex - 1);
  }
  return (
    <section className="testimonial" id="testimonial">
      <div className="info">
        <p className="blue-color">TESTIMONIALS</p>
        <h1 className="dark-blue-color">What Student Says</h1>
      </div>
      <div className="total-testimonial-container">
        <div className="testimonial-container">
          <div
            className="testimonial-box-container"
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          >
            <div className="testimonial-box">
              <div className="testimonial-info">
                <img src="/testimonial/person-1.png" />
                <div>
                  <p className="name blue-color" style={{ fontWeight: "bold" }}>
                    Emily Williams
                  </p>
                  <p className="area">Edusity, USA</p>
                </div>
              </div>
              <div className="testimonial-text">
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations
              </div>
            </div>
            <div className="testimonial-box">
              <div className="testimonial-info">
                <img src="/testimonial/person-2.png" />
                <div>
                  <p className="name blue-color" style={{ fontWeight: "bold" }}>
                    William Jackson
                  </p>
                  <p className="area">Edusity, USA</p>
                </div>
              </div>
              <div className="testimonial-text">
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </div>
            </div>
            <div className="testimonial-box">
              <div className="testimonial-info">
                <img src="/testimonial/person-3.png" />
                <div>
                  <p className="name blue-color" style={{ fontWeight: "bold" }}>
                    Emily Williams
                  </p>
                  <p className="area">Edusity, USA</p>
                </div>
              </div>
              <div className="testimonial-text">
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations
              </div>
            </div>
            <div className="testimonial-box">
              <div className="testimonial-info">
                <img src="/testimonial/person-4.png" />
                <div>
                  <p className="name blue-color" style={{ fontWeight: "bold" }}>
                    William Jackson
                  </p>
                  <p className="area">Edusity, USA</p>
                </div>
              </div>
              <div className="testimonial-text">
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations
              </div>
            </div>
          </div>
        </div>
        <button className="slide left" onClick={decreaseIndex}>
          <img src="/testimonial/arrow-left.png" />
        </button>
        <button className="slide right" onClick={increaseIndex}>
          <img src="/testimonial/arrow-right.png" />
        </button>
      </div>
    </section>
  );
}
