import React from "react";
import "../../styles/studentdashboardstyles/Attendance.css";

const Attendance = () => {
  return (
    <div className="attendance-container">
      <div className="attendance-header">
        <h2>Attendance Dashboard</h2>
      </div>
     <div className="attendance-cards">
  <div className="card total-card">
    <h3>50</h3>
    <p>Total Classes</p>
  </div>

  <div className="card present-card">
    <h3>40</h3>
    <p>Present</p>
  </div>

  <div className="card absent-card">
    <h3>9</h3>
    <p>Absent</p>
  </div>

  <div className="card leave-card">
    <h3>1</h3>
    <p>Leave</p>
  </div>

  <div className="card attendance-card">
    <h3>80%</h3>
    <p>Attendance</p>
  </div>
</div>
      <div className="marks-table-container">
        <table className="marks-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Day</th>
              <th>Status</th>
              <th>Permission</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>01/07/2026</td>
              <td>Wednesday</td>
              <td>Present</td>
              <td></td>
            </tr>

            <tr>
              <td>02/07/2026</td>
              <td>Thursday</td>
              <td>Present</td>
              <td></td>
            </tr>

            <tr>
              <td>03/07/2026</td>
              <td>Friday</td>
              <td>Absent</td>
              <td>Class Teacher</td>
            </tr>

            <tr>
              <td>04/07/2026</td>
              <td>Saturday</td>
              <td>Present</td>
              <td></td>
            </tr>

            <tr>
              <td>05/07/2026</td>
              <td>Monday</td>
              <td>Absent</td>
              <td>Class Teacher</td>
            </tr>
              <tr>
              <td>06/07/2026</td>
              <td>Tuesday</td>
              <td>Present</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;