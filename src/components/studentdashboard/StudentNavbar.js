import React from "react";
import "../../styles/studentdashboardstyles/StudentNavbar.css";
import school_logo from "../../assests/school_logo.png";
import { IoIosNotifications } from "react-icons/io";

const StudentNavbar = () => {
  return (
    <div>
    <nav className="std-bar">
      <div className="std-fix">

        <div className="school-logo">
          <img src={school_logo} alt="School Logo" />
        </div>

        <div className="dashboard-title">
          <h1>Student Dashboard</h1>
        </div>

        <div className="notification">
          <IoIosNotifications />
          <span>Notifications</span>
        </div>

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
    </div>
  );
};

export default StudentNavbar;