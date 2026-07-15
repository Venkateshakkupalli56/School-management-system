import React from "react";
import "../../styles/studentdashboardstyles/StudentNavbar.css";
import school_logo from "../../assests/school_logo.png";

import { IoIosNotifications } from "react-icons/io";
import { FaBars } from "react-icons/fa";

const StudentNavbar = ({ toggleSidebar }) => {
  return (
    <nav className="std-bar">
      <div className="std-fix">

        {/* Hamburger Menu */}
        <div className="menu-icon" onClick={toggleSidebar}>
          <FaBars />
        </div>

        {/* Logo */}
        <div className="school-logo">
          <img src={school_logo} alt="School Logo" />
        </div>

        {/* Dashboard Title */}
        <div className="dashboard-title">
          <h2>Student Dashboard</h2>
        </div>

        {/* Notification */}
        <div className="notification">
          <IoIosNotifications className="bell-icon" />
          <span>Notifications</span>
        </div>

        {/* Profile */}
        <div className="profile">
          <select>
            <option>Profile</option>
            <option>My Profile</option>
            <option>Settings</option>
            <option>Logout</option>
          </select>
        </div>

      </div>
    </nav>
  );
};

export default StudentNavbar;