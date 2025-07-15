import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    setStatus("Thank you for contacting us!");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Please fill out the form below.</p>
      </div>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-row">
            <div className="contact-col">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="contact-input"
              />
            </div>
            <div className="contact-col">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="contact-input"
              />
            </div>
          </div>
          <div className="contact-row">
            <div className="contact-col">
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={form.phone}
                onChange={handleChange}
                className="contact-input"
              />
            </div>
            <div className="contact-col">
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                className="contact-textarea"
                rows={4}
              />
            </div>
          </div>
          <button type="submit" className="contact-submit">
            Send Message
          </button>
          {status && <div className="contact-status">{status}</div>}
        </form>
      </div>
    </div>
  );
};

export default contact;
