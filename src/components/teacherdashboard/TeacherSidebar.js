import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/teacherdashboard/TeacherSidebar.css";

const TeacherSidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={`teacher-sidebar ${sidebarOpen ? "show" : ""}`}>

      <h2 className="logo">Teacher</h2>

      <NavLink to="/teacher/dashboard" onClick={closeSidebar}>Dashboard</NavLink>
      <NavLink to="/teacherdashboard/profile" onClick={closeSidebar}>Profile</NavLink>
      {/* <NavLink to="/teacher/students" onClick={closeSidebar}>Students</NavLink> */}
      <NavLink to="/teacherdashboard/studentmarks/addmarks" onClick={closeSidebar}>Marks</NavLink>
      <NavLink to="/teacherdashboard/studentattendance" onClick={closeSidebar}>Attendance</NavLink>
      <NavLink to="/teacherdashboard/subjects" onClick={closeSidebar}>Subjects</NavLink>
      <NavLink to="/teacherdashboard/homework" onClick={closeSidebar}>Homework</NavLink>
      <NavLink to="/teacher/results" onClick={closeSidebar}>Results</NavLink>
      <NavLink to="/teacher/timetable" onClick={closeSidebar}>Timetable</NavLink>
      <NavLink to="/teacher/notices" onClick={closeSidebar}>Notices</NavLink>
      <NavLink to="/teacher/settings" onClick={closeSidebar}>Settings</NavLink>
      <NavLink to="/teacher/logout" onClick={closeSidebar}>Logout</NavLink>

    </div>
  );
};

export default TeacherSidebar;