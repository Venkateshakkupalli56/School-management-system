import React from "react";

import "../../styles/admindashboardstyles/AdminNavbar.css";

const AdminNavbar = ({ setSidebarOpen }) => {

    return (

        <nav className="admin-navbar">

            <div className="admin-navbar-left">

                <button
                    className="admin-menu-btn"
                    onClick={() => setSidebarOpen(prev => !prev)}
                >
                    ☰
                </button>

                <h2>Admin Dashboard</h2>

            </div>


            <div className="admin-navbar-right">

                <button className="admin-notification">
                    🔔
                </button>


                <div className="admin-profile">

                    <div className="admin-avatar">
                        A
                    </div>

                    <div className="admin-info">

                        <span className="admin-name">
                            School Admin
                        </span>

                        <span className="admin-role">
                            Administrator
                        </span>

                    </div>

                    <span className="admin-dropdown">
                        ▼
                    </span>

                </div>

            </div>

        </nav>
    );
};

export default AdminNavbar;