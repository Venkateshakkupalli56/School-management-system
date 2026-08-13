import React, { useState } from "react";
import "../../../styles/teacherdashboard/studentattendancestyles/AddAttendance.css";

const AddAttendance = ({ close }) => {

  const [attendance, setAttendance] = useState({
    student_id: "",
    name: "",
    total_classes: "",
    present: "",
  });

  const handlechange = (e) => {
    setAttendance({
      ...attendance,
      [e.target.name]: e.target.value,
    });
  };

  const studentadd = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    fetch("http://127.0.0.1:8000/attendance/add_attendance", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify(attendance),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Attendance added successfully");

        setAttendance({
          student_id: "",
          name: "",
          total_classes: "",
          present: "",
        });
      })
      .catch((error) => {
        console.log(error);
        alert("Attendance not added");
      });
  };

  return (
    <div className="add-attendance">

      <form onSubmit={studentadd}>

        <h2>Add Attendance</h2>

        <div className="attendance-field">
          <label>Student ID</label>

          <input
            type="text"
            placeholder="Enter student ID"
            name="student_id"
            value={attendance.student_id}
            onChange={handlechange}
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
            onChange={handlechange}
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
            onChange={handlechange}
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
            onChange={handlechange}
            required
          />
        </div>

        <div className="attendance-buttons">

          <button type="submit">
            Add Attendance
          </button>

          <button type="button" onClick={close}>
            Cancel
          </button>

        </div>

      </form>

    </div>
  );
};

export default AddAttendance;