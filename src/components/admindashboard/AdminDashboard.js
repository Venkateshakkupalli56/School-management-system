import React, { useState } from "react";

import { Outlet } from "react-router-dom";

import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";

import "../../styles/admindashboardstyles/AdminDashboard.css";

const AdminLayout = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (

        <div className="admin-layout">

            <AdminNavbar
                setSidebarOpen={setSidebarOpen}
            />

            <div className="admin-main">

                <AdminSidebar
                    open={sidebarOpen}
                    setOpen={setSidebarOpen}
                />

                <main className="admin-content">
                    <Outlet />
                </main>

            </div>

        </div>
    );
};

export default AdminLayout;