import React, { useState } from "react";
import "../../styles/studentdashboardstyles/Attendance.css";

const Marks = () => {
  const [student_id, setStudent_id] = useState("");
  const [attendance, setAttendance] = useState([]);

  const search = async () => {
      const response = await fetch(
        `http://127.0.0.1:8000/attendance/student_attendence/${student_id}`,
      );
      const data = await response.json();
      if (response.ok) {
        setAttendance(data);
      } else {
        alert("Attendance not found");
        setAttendance([]);
      }
  };

  return (
    <div className="student-attendance-page">
      <div className="enter-student">
        <h2>Attendance</h2>
        <input
          type="text"
          placeholder="Enter your student ID"
          name="student_id"
          value={student_id}
          onChange={(e) => setStudent_id(e.target.value)}
        />

        <button onClick={search}>Search</button>
      </div>
      <div className="attendance-cards">
        {attendance.map((item) => (
          <div className="attendance-card" key={item.id}>
            <h2>Attendance Details</h2>
            <div className="student-info">
              <p>
                <strong>Student ID:</strong>
                <span>{item.student_id}</span>
              </p>
              <p>
                <strong>Name:</strong>
                <span>{item.name}</span>
              </p>
            </div>
            <div className="attendance-details">
              <div className="attendance-box">
                <h3>Total Classes</h3>
                <p>{item.total_classes}</p>
              </div>
              <div className="attendance-box present">
                <h3>Present</h3>
                <p>{item.present}</p>
              </div>
              <div className="attendance-box absent">
                <h3>Absent</h3>
                <p>{item.absent}</p>
              </div>
              <div className="attendance-box percentage">
                <h3>Percentage</h3>
                <p>{item.percentage}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marks;
