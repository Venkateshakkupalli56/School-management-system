import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import "../../styles/teacherdashboard/TeacherDashboard.css";

import TeacherNavbar from "./TeacherNavbar";
import TeacherSidebar from "./TeacherSidebar";

const TeacherDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="teacher-dashboard">

      {/* Top Navbar */}
      <TeacherNavbar
        toggleSidebar={toggleSidebar}
      />

      {/* Sidebar */}
      <TeacherSidebar
        sidebarOpen={sidebarOpen}
        closeSidebar={closeSidebar}
      />

      {/* Right Side Content */}
      <main className="teacher-main-content">
        <Outlet />
      </main>

    </div>
  );
};

export default TeacherDashboard;