import React from "react";
import { NavLink } from "react-router-dom";

import "../../styles/admindashboardstyles/AdminSidebar.css";

const AdminSidebar = ({ open, setOpen }) => {

    return (
        <aside className={`admin-sidebar ${open ? "open" : ""}`}>

            <div className="admin-sidebar-logo">
                <h2>School Admin</h2>
                <p>Management System</p>
            </div>

            <nav className="admin-sidebar-menu">

                <NavLink
                    to="/admin/dashboard"
                    className="admin-nav-link"
                    onClick={() => window.innerWidth <= 768 && setOpen(false)}
                >
                    <span>📊</span>
                    <span>Dashboard</span>
                </NavLink>

                <NavLink
                    to="/admin/students"
                    className="admin-nav-link"
                    onClick={() => window.innerWidth <= 768 && setOpen(false)}
                >
                    <span>👨‍🎓</span>
                    <span>Students</span>
                </NavLink>

                <NavLink
                    to="/admin/teachers"
                    className="admin-nav-link"
                    onClick={() => window.innerWidth <= 768 && setOpen(false)}
                >
                    <span>👨‍🏫</span>
                    <span>Teachers</span>
                </NavLink>

                <NavLink
                    to="/admin/subjects"
                    className="admin-nav-link"
                    onClick={() => window.innerWidth <= 768 && setOpen(false)}
                >
                    <span>📚</span>
                    <span>Subjects</span>
                </NavLink>

                <NavLink
                    to="/admin/timetable"
                    className="admin-nav-link"
                    onClick={() => window.innerWidth <= 768 && setOpen(false)}
                >
                    <span>📅</span>
                    <span>Timetable</span>
                </NavLink>

                <NavLink
                    to="/admin/leave"
                    className="admin-nav-link"
                    onClick={() => window.innerWidth <= 768 && setOpen(false)}
                >
                    <span>📝</span>
                    <span>Leave Requests</span>
                </NavLink>

                <NavLink
                    to="/admin/notices"
                    className="admin-nav-link"
                    onClick={() => window.innerWidth <= 768 && setOpen(false)}
                >
                    <span>📢</span>
                    <span>Notices</span>
                </NavLink>

                <NavLink
                    to="/admin/profile"
                    className="admin-nav-link"
                    onClick={() => window.innerWidth <= 768 && setOpen(false)}
                >
                    <span>👤</span>
                    <span>Profile</span>
                </NavLink>

            </nav>

        </aside>
    );
};

export default AdminSidebar;