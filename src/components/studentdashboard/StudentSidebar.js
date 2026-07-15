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
  FaTimes,
} from "react-icons/fa";

const StudentSidebar = ({ sidebarOpen, closeSidebar }) => {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={closeSidebar}></div>
      )}

      <div className={`sidebar ${sidebarOpen ? "show" : ""}`}>

        {/* Close Button */}
        <div className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </div>

        <div className="sidebar-menu">

          <NavLink to="/studentdashboard/dashboard" onClick={closeSidebar}>
            <FaHome />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/studentdashboard/profile" onClick={closeSidebar}>
            <FaUser />
            <span>My Profile</span>
          </NavLink>

          <NavLink to="/studentdashboard/subjects" onClick={closeSidebar}>
            <FaBook />
            <span>Subjects</span>
          </NavLink>

          <NavLink to="/studentdashboard/marks" onClick={closeSidebar}>
            <FaClipboardList />
            <span>Marks</span>
          </NavLink>

          <NavLink to="/studentdashboard/attendance" onClick={closeSidebar}>
            <FaCalendarCheck />
            <span>Attendance</span>
          </NavLink>

          <NavLink to="/studentdashboard/homework" onClick={closeSidebar}>
            <FaBook />
            <span>Homework</span>
          </NavLink>

          <NavLink to="/studentdashboard/results" onClick={closeSidebar}>
            <FaClipboardList />
            <span>Results</span>
          </NavLink>

          <NavLink to="/studentdashboard/fees" onClick={closeSidebar}>
            <FaMoneyBill />
            <span>Fees</span>
          </NavLink>

          <NavLink to="/studentdashboard/notices" onClick={closeSidebar}>
            <FaBell />
            <span>Notices</span>
          </NavLink>

          <NavLink to="/studentdashboard/settings" onClick={closeSidebar}>
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

    </>
  );
};

export default StudentSidebar;