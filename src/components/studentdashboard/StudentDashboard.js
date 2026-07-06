import StudentNavbar from "./StudentNavbar";
import StudentSidebar from "./StudentSidebar";
import { Outlet } from "react-router-dom";
import "../../styles/studentdashboardstyles/StudentDashboard.css";

const StudentDashboard = () => {
  return (
    <>
      <StudentNavbar />
      <div className="dashboard-container">
        <StudentSidebar />

        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default StudentDashboard;