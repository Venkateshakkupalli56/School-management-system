import React, { useState } from "react";
import "../../../styles/teacherdashboard/studentattendancestyles/AddAttendance.css";

const AddAttendance = ({ close }) => {
  const [attendance, setAttendance] = useState({
    student_id: "",
    name: "",
    total_classes: "",
    present: "",
    absent: "",
  });

  const handleChange = (e) => {
    setAttendance({
      ...attendance,
      [e.target.name]: e.target.value,
    });
  };

  const studentAttendance = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "http://127.0.0.1:8000/attendance/add_attendance",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(attendance),
      }
    );

    const data = await response.json();

    console.log(data);

    if (response.ok) {
      alert("Attendance added successfully");
      close();
    } else {
      alert("Failed to add attendance");
    }
  };

  return (
    <div className="attendance-form-container">
      <form onSubmit={studentAttendance} className="attendance-form">

        <h2>Add Attendance</h2>

        <div className="attendance-field">
          <label>Student ID</label>
          <input
            type="number"
            placeholder="Enter student ID"
            name="student_id"
            value={attendance.student_id}
            onChange={handleChange}
            required
          />
        </div>

        <div className="attendance-field">
          <label>Student Name</label>
          <input
            type="text"
            placeholder="Enter student name"
            name="name"
            value={attendance.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="attendance-field">
          <label>Total Classes</label>
          <input
            type="number"
            placeholder="Enter total classes"
            name="total_classes"
            value={attendance.total_classes}
            onChange={handleChange}
            required
          />
        </div>

        <div className="attendance-field">
          <label>Present Classes</label>
          <input
            type="number"
            placeholder="Enter present classes"
            name="present"
            value={attendance.present}
            onChange={handleChange}
            required
          />
        </div>

        <div className="attendance-field">
          <label>Absent Classes</label>
          <input
            type="number"
            placeholder="Enter absent classes"
            name="absent"
            value={attendance.absent}
            onChange={handleChange}
            required
          />
        </div>

        <div className="attendance-buttons">
          <button type="submit">Add Attendance</button>

          <button type="button" onClick={close}>
            Cancel
          </button>
        </div>

      </form>
    </div>
  );
};

export default AddAttendance;