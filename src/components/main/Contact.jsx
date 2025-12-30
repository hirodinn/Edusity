import { useState, useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import "./Contact.css";
export function Contact() {
  const [token, setToken] = useState(null);
  const captchaRef = useRef(null);

  const handleVerify = (token) => {
    setToken(token);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!token) {
      alert("Please complete the captcha first!");
      return;
    }
    alert("Form submitted successfully!");
  };
  return (
    <section id="contact">
      <div className="contact-container">
        <div className="info">
          <h4 className="blue-color">CONTACT US</h4>
          <h1 className="dark-blue-color">Get In Touch</h1>
        </div>
        <div className="address">
          <div className="left">
            <div className="message each">
              <h3>Send us a message</h3>
              <img src="/contact/message.png" />
            </div>
            <p>
              information below. Your feedback, questions, and suggestions are
              important to us as we strive to provide exceptional service to our
              university community. information below. Your feedback, questions,
              and suggestions are important to us as we strive to provide
              exceptional service to our university community.
            </p>
            <div className="each">
              <img src="/contact/message-small.png" />
              <p>Contact@GreatStack.dev</p>
            </div>
            <div className="each">
              <img src="/contact/dial.png" />
              <p>+1 123-456-7890</p>
            </div>
            <div className="each">
              <img src="/contact/location.png" />
              <div>
                <p>77 Massachusetts Ave, Cambridge</p>
                <p>MA 02139, United States</p>
              </div>
            </div>
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              <label for="name">Your name</label>
              <input type="text" placeholder="Enter your name" id="name" />
              <label for="mobile-number">Phone Number</label>
              <input
                type="text"
                placeholder="Enter your mobile number"
                id="mobile-number"
              />
              <label for="email">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email id"
                id="email"
              />
              <label for="text">Write your messages here</label>
              <textarea
                placeholder="Enter your messages"
                id="text"
                rows="7"
              ></textarea>
              <div className="capcha">
                <HCaptcha
                  sitekey="YOUR_HCAPTCHA_SITE_KEY"
                  onVerify={handleVerify}
                  ref={captchaRef}
                />
              </div>
              <button type="submit" s>
                Submit now →
              </button>
            </form>
          </div>
        </div>
        <footer>
          <p>© 2024 Edusity. All rights reserved.</p>
          <ul>
            <li>Terms of Services</li>
            <li>Privacy Policy</li>
            <li className="blue-color">Facebook</li>
            <li className="blue-color">Twitter</li>
            <li className="blue-color">LinkedIn</li>
          </ul>
        </footer>
      </div>
    </section>
  );
}
