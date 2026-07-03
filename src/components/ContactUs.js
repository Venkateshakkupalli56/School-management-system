import React, { useState } from "react";
import "../styles/ContactUs.css";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message Sent Successfully!");

    console.log(form);

    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contact">

      <div className="contact-heading">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you. Get in touch with us for admissions,
          inquiries, or any assistance.
        </p>
      </div>

      <div className="contact-container">

        {/* Contact Information */}

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <div className="info-box">
            <h3>📍 Address</h3>
            <p>ABC Public School</p>
            <p>Hyderabad, Telangana - 500001</p>
          </div>

          <div className="info-box">
            <h3>📞 Phone</h3>
            <p>+91 9876543210</p>
          </div>

          <div className="info-box">
            <h3>📧 Email</h3>
            <p>abcschool@gmail.com</p>
          </div>

          <div className="info-box">
            <h3>🕒 Office Hours</h3>
            <p>Monday - Saturday</p>
            <p>9:00 AM - 5:00 PM</p>
          </div>

        </div>

        {/* Contact Form */}

        <div className="contact-form">

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Write Your Message"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send Message</button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default ContactUs;