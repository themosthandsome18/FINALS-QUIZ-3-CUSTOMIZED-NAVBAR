import React from 'react';
import '../style.css';

export default function Contact() {
  return (
    <section className="about-container">
      <div className="about-text">
        <h2>Contact Me</h2>
        <p>If you want anything to talk about let me know:</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="contact" placeholder="Your Contact" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}