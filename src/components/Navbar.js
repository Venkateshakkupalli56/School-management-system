import React, { useState } from "react";
import "../styles/Navbar.css";
import school_logo from "../assests/school_logo.png";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const closeAll = () => {
    setMenuOpen(false);
    setShowLogin(false);
  };

  return (
    <nav className="bar">
      <NavLink to="/" onClick={closeAll}>
        <div className="logo">
          <img src={school_logo} alt="School Logo" />
        </div>
      </NavLink>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={menuOpen ? "fields active" : "fields"}>
        <li><NavLink to="/home" onClick={closeAll}>Home</NavLink></li>

        <li><NavLink to="/about" onClick={closeAll}>About</NavLink></li>

        <li><NavLink to="/academics" onClick={closeAll}>Academics</NavLink></li>

        <li><NavLink to="/facilities" onClick={closeAll}>Facilities</NavLink></li>

        <li><NavLink to="/sports" onClick={closeAll}>Sports</NavLink></li>

        <li><NavLink to="/contact" onClick={closeAll}>Contact</NavLink></li>

        <li className="login-container">
          <button className="login-btn">
            Registration
          </button>

          <button
            className="login-btn"
            onClick={() => setShowLogin(!showLogin)}
          >
            Login
          </button>

          {showLogin && (
            <div className="login-menu">
              <NavLink to="/studentlogin" onClick={closeAll}>
                Student Login
              </NavLink>

              <NavLink to="/teacherlogin" onClick={closeAll}>
                Teacher Login
              </NavLink>

              <NavLink to="/adminlogin" onClick={closeAll}>
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