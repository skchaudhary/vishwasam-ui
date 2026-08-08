import React, { useState } from 'react';
import './ContactUs.css';
import AdsensePlaceholder from '../Adsense/AdsensePlaceholder';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:seema.devi@bharwaliya.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="ContactUs">
      <div className="Contact-header">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you. Please fill out the form below.</p>
      </div>

      <form className="Contact-form" onSubmit={handleSubmit}>
        <div className="Form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your full name" required onChange={handleChange} value={formData.name} />
        </div>

        <div className="Form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="Your phone number" onChange={handleChange} value={formData.phone} />
        </div>

        <div className="Form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="Your email address" required onChange={handleChange} value={formData.email} />
        </div>

        <div className="Form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" placeholder="What is this regarding?" required onChange={handleChange} value={formData.subject} />
        </div>

        <div className="Form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="How can we help you?" required onChange={handleChange} value={formData.message}></textarea>
        </div>

        <button type="submit" className="Submit-btn">Send Message</button>
      </form>

      <AdsensePlaceholder position="contact-bottom" />
    </div>
  );
}

export default ContactUs;
