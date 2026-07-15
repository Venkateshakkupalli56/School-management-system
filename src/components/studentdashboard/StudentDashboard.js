import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import StudentNavbar from "./StudentNavbar";
import StudentSidebar from "./StudentSidebar";
import "../../styles/studentdashboardstyles/StudentDashboard.css";

const StudentDashboard = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="student-dashboard">

      {/* Navbar */}
      <StudentNavbar toggleSidebar={toggleSidebar} />

      {/* Dashboard Layout */}
      <div className="dashboard-container">

        {/* Sidebar */}
        <StudentSidebar
          sidebarOpen={sidebarOpen}
          closeSidebar={closeSidebar}
        />

        {/* Main Content */}
        <div className="main-content">
          <Outlet />
        </div>

      </div>

    </div>
  );
};

export default StudentDashboard;