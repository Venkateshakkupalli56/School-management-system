// import React from 'react'
// import '../styles/Footer.css';
// const Footer = () => {
//   return (
//     <div>
//     </div>
//   )
// }

// export default Footer
import React from "react";
import  "../styles/Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Bright Future High School</h3>
          <p>Empowering students to become the leaders of tomorrow.</p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Academics</a></li>
            <li><a href="#">Facilities</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Information</h4>
          <ul>
            <li><a href="#">Admissions</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>123, School Lane,<br />Your City, State - 000001</p>
          <p>📞 +91-98765-43210</p>
          <p>✉️ info@bfhs.edu.in</p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Bright Future High School. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
