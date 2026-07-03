import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Footer.css";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-logo">
          <h2>Bright Future School</h2>
          <p>
            Providing quality education with excellence, discipline,
            and innovation for every student.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>

        </div>

        <div className="footer-contact">

          <h3>Contact</h3>

          <p>📍 Hyderabad, Telangana</p>
          <p>📞 +91 9876543210</p>
          <p>✉️ school@gmail.com</p>

          <div className="social-icons">

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Bright Future School | All Rights Reserved
      </div>

    </footer>
  );
};

export default Footer;