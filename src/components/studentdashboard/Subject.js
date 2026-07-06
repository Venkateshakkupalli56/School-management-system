import React from "react";
import "../../styles/studentdashboardstyles/Subject.css";

const Subjects = () => {
  return (
    <div className="marks-container">
      <div className="marks-header">
        <h2>Student Subjects</h2>
      </div>

      <div className="marks-table-container">
        <table className="marks-table">
          <thead>
          <tr>
            <th>Code</th>
            <th>Subject</th>
            <th>Teacher</th>
            <th>Credits</th>
            <th>Room</th>
            <th>Schedule</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>MAT101</td>
            <td>Mathematics</td>
            <td>Mr. Sharma</td>
            <td>4</td>
            <td>A-101</td>
            <td>Mon, Wed</td>
            <td><span className="status active">Active</span></td>
          </tr>

          <tr>
            <td>PHY102</td>
            <td>Physics</td>
            <td>Mrs. Priya</td>
            <td>4</td>
            <td>B-203</td>
            <td>Tue, Thu</td>
            <td><span className="status active">Active</span></td>
          </tr>

          <tr>
            <td>TEL1234</td>
            <td>Telugu</td>
            <td>Mrs. Priya</td>
            <td>4</td>
            <td>B-204</td>
            <td>Tue, Wed</td>
            <td><span className="status active">Active</span></td>
          </tr>
          <tr>
            <td>CHE103</td>
            <td>Chemistry</td>
            <td>Mr. Kumar</td>
            <td>4</td>
            <td>C-105</td>
            <td>Mon, Fri</td>
            <td><span className="status active">Active</span></td>
          </tr>

          <tr>
            <td>ENG104</td>
            <td>English</td>
            <td>Ms. Anjali</td>
            <td>3</td>
            <td>D-201</td>
            <td>Wed, Fri</td>
            <td><span className="status active">Active</span></td>
          </tr>

          <tr>
            <td>CSC105</td>
            <td>Computer Science</td>
            <td>Mr. Ramesh</td>
            <td>5</td>
            <td>Lab-01</td>
            <td>Daily</td>
            <td><span className="status active">Active</span></td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Subjects;