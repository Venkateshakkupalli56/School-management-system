import React from "react";
import "../../styles/teacherdashboard/TeacherNavbar.css";

const TeacherNavbar = ({ toggleSidebar }) => {
  return (
    <div className="teacher-navbar">

      <div className="navbar-left">
        <button className="menu-btn" onClick={toggleSidebar}>
          ☰
        </button>

        <h2>School Management System</h2>
      </div>

      <div className="navbar-right">
        <input type="text" placeholder="Search..." />

        <button className="notification-btn">🔔</button>

        {/* <img
          src="https://via.placeholder.com/40"
          alt="Teacher"
          className="teacher-profile"
        /> */}
      </div>

    </div>
  );
};

export default TeacherNavbar;