import React, { useState } from "react";
import "../styles/Navbar.css";
import school_logo from "../assests/school_logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const navigate = useNavigate();

  return (
    <nav className="bar">
      {/* Logo */}
      <NavLink to="/">
        <div className="logo">
          <img src={school_logo} alt="School Logo" />
        </div>
      </NavLink>

      {/* Mobile Menu Icon */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menu */}
      <ul className={menuOpen ? "fields active" : "fields"}>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        <li>
          <NavLink to="/academics">Academics</NavLink>
        </li>

        <li>
          <NavLink to="/facilities">Facilities</NavLink>
        </li>

        <li>
          <NavLink to="/sports">Sports</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>

        <li className="login-container">
          {/* Registration */}
          <button
            className="login-btn"
            onClick={() => navigate("/registration")}
          >
            Registration
          </button>

          {/* Login Button */}
          <button
            className="login-btn"
            onClick={() => setShowLogin(!showLogin)}
          >
            Login
          </button>

          {/* Login Dropdown */}
          {showLogin && (
            <div className="login-menu">
              <NavLink
                to="/studentlogin"
                onClick={() => setShowLogin(false)}
              >
                Student Login
              </NavLink>

              <NavLink
                to="/teacherlogin"
                onClick={() => setShowLogin(false)}
              >
                Teacher Login
              </NavLink>

              <NavLink
                to="/adminlogin"
                onClick={() => setShowLogin(false)}
              >
                Admin Login
              </NavLink>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;