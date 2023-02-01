import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <section className="contact">
      <h2 className="hidden">CONTACT</h2>
      <h3>Get in touch</h3>
      <div className="line">
      <span />
      </div>
      <div className="row">
      <div className="links">
      <h4>Contact information</h4>
      <p>Got a question or proposal, or just want to say hello? Go ahead.</p>
          <div className="field">
            <div className="round">
              <i className="fa-solid fa-envelope" />
            </div>
            <div className="description">
              <h5>Email Address</h5>
              <a href="mailto:ae290084@gmail.com">ae290084@gmail.com</a>
              <a href="mailto:ahmedelsayed2102@icloud.com">
                ahmedelsayed2102@icloud.com
              </a>
            </div>
          </div>
          <div className="field">
            <div className="round">
              <i className="fa-solid fa-phone" />
            </div>
            <div className="description">
              <h5>Phone & Whatsapp Number</h5>
              <a href="tel:+201027964469">+201027964469</a>
              <a
                href="https://wa.me/201027964469"
                target="_blank"
                rel="noreferrer"
              >
                01027964469
              </a>
            </div>
          </div>
        </div>
        <div className="form">
          <form action="">
            <div className="input_filed">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                required
                placeholder="Enter your name.."
              />
            </div>
            <div className="input_filed">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                required
                placeholder="Enter your email.."
              />
            </div>
            <div className="input_filed">
              <label htmlFor="subject">Subject</label>
              <input id="subject" type="text" placeholder="Enter subject.." />
            </div>
            <div className="input_filed">
              <label htmlFor="message">Message</label>
              <textarea
                required
                id="message"
                name="message"
                placeholder="Enter your message.."
                rows="6"
              />
            </div>
            <button className="btn" type="submit">
              <span className="t" />
              <span className="l" />
              <span className="bl" />
              <span className="bb" />
              Send mail
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
