import React, { useState } from "react";
import TeacherNavbar from "./TeacherNavbar";
import TeacherSidebar from "./TeacherSidebar";

const TeacherDashboard = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>

      <TeacherNavbar
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      <TeacherSidebar
        sidebarOpen={sidebarOpen}
        closeSidebar={() => setSidebarOpen(false)}
      />

      {/* Your page content */}

    </div>
  );
};

export default TeacherDashboard;