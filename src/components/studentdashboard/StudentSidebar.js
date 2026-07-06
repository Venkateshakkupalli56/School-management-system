import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../styles/studentdashboardstyles/StudentSidebar.css";

import {
  FaHome,
  FaUser,
  FaBook,
  FaClipboardList,
  FaCalendarCheck,
  FaMoneyBill,
  FaBell,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const StudentSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove user data if stored
    // localStorage.removeItem("token");
    // localStorage.removeItem("user");

    // Redirect to home/login page
    navigate("/");
  };

  return (
    <div className="sidebar">

      <div className="sidebar-menu">

        <NavLink to="/studentdashboard/dashboard">
          <FaHome />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/studentdashboard/profile">
          <FaUser />
          <span>My Profile</span>
        </NavLink>

        <NavLink to="/studentdashboard/subjects">
          <FaBook />
          <span>Subjects</span>
        </NavLink>

        <NavLink to="/studentdashboard/marks">
          <FaClipboardList />
          <span>Marks</span>
        </NavLink>

        <NavLink to="/studentdashboard/attendance">
          <FaCalendarCheck />
          <span>Attendance</span>
        </NavLink>

        <NavLink to="/studentdashboard/homework">
          <FaBook />
          <span>Homework</span>
        </NavLink>

        <NavLink to="/studentdashboard/results">
          <FaClipboardList />
          <span>Results</span>
        </NavLink>

        <NavLink to="/studentdashboard/fees">
          <FaMoneyBill />
          <span>Fees</span>
        </NavLink>

        <NavLink to="/studentdashboard/notices">
          <FaBell />
          <span>Notices</span>
        </NavLink>

        <NavLink to="/studentdashboard/settings">
          <FaCog />
          <span>Settings</span>
        </NavLink>

      </div>

      <div className="logout-section">
        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>

    </div>
  );
};

export default StudentSidebar;