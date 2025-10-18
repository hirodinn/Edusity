import "./Contact.css";
export function Contact() {
  return (
    <section className="contact" id="contact">
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
              <p>77 Massachusetts Ave, Cambridge</p>
              <p>MA 02139, United States</p>
            </div>
          </div>
          <div className="right">
            <form>
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
