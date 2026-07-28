import React, { useState } from "react";
import "../styles/Navbar.css";
import school_logo from "../assests/school_logo.png";
import { NavLink} from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  // const navigate = useNavigate();

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
<button
  className="login-btn"
  onClick={() => setShowRegister(!showRegister)}
>
  Registration
</button>
{showRegister && (
  <div className="login-menu">
    <NavLink
      to="/studentregistration"
      onClick={() => setShowRegister(false)}
    >
      Student Registration
    </NavLink>

    <NavLink
      to="/teacherregister"
      onClick={() => setShowRegister(false)}
    >
      Teacher Registration
    </NavLink>
  </div>
)}
          <button
            className="login-btn"
            onClick={() => setShowLogin(!showLogin)}
          >
            Login
          </button>
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