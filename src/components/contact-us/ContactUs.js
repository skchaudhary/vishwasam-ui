import React, { useState } from "react";
import "./ContactUs.css";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqpzegwv";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Unable to send your message.");
      }

      setIsSuccess(true);
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      setErrorMessage(
        error.message || "Failed to send message. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="ContactUs">
      <div className="Contact-header">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you. Please fill out the form below.</p>
      </div>

      {isSuccess && (
        <div className="Success-message">
          ✅ Thank you! Your message has been sent successfully. We will get
          back to you soon.
        </div>
      )}

      {errorMessage && <div className="Error-message">⚠️ {errorMessage}</div>}

      <form className="Contact-form" onSubmit={handleSubmit}>
        <div className="Form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your full name"
            required
            onChange={handleChange}
            value={formData.name}
          />
        </div>

        <div className="Form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your phone number"
            onChange={handleChange}
            value={formData.phone}
          />
        </div>

        <div className="Form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email address"
            required
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        <div className="Form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="What is this regarding?"
            required
            onChange={handleChange}
            value={formData.subject}
          />
        </div>

        <div className="Form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="How can we help you?"
            required
            onChange={handleChange}
            value={formData.message}
          ></textarea>
        </div>

        <button type="submit" className="Submit-btn" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

    </div>
  );
}

export default ContactUs;
