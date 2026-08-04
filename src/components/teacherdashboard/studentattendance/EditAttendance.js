import React, { useEffect, useState } from "react";
import "../../../styles/teacherdashboard/studentattendancestyles/AddAttendance.css";

const EditAttendance = ({ id, close }) => {
  const [attendance, setAttendance] = useState({
    student_id: "",
    name: "",
    total_classes: "",
    present: "",
    absent: "",
  });

  // Get existing attendance data
  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/attendance/${id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch attendance");
        }

        const data = await response.json();

        console.log("Attendance data:", data);

        setAttendance({
          student_id: data.student_id,
          name: data.name,
          total_classes: data.total_classes,
          present: data.present,
          absent: data.absent,
        });
      } catch (error) {
        console.error("Error:", error);
      }
    };

    if (id) {
      fetchAttendance();
    }
  }, [id]);

  const handleChange = (e) => {
    setAttendance({
      ...attendance,
      [e.target.name]: e.target.value,
    });
  };

  const updateAttendance = async (e) => {
    e.preventDefault();

    console.log("ID:", id);
    console.log("Data:", attendance);

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/attendance/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            student_id: attendance.student_id,
            name: attendance.name,
            total_classes: Number(attendance.total_classes),
            present: Number(attendance.present),
            absent: Number(attendance.absent),
          }),
        }
      );

      const data = await response.json();

      console.log("Status:", response.status);
      console.log("Response:", data);

      if (response.ok) {
        alert("Attendance updated successfully");
        close();
      } else {
        alert("Attendance cannot be updated");
        console.log("Error:", data);
      }
    } catch (error) {
      console.error("Update error:", error);
      alert("Something went wrong while updating attendance");
    }
  };

  return (
    <div className="attendance-form-container">
      <div className="attendance-form">

        <h2>Edit Attendance</h2>

        <form onSubmit={updateAttendance}>

          <div className="attendance-field">
            <label>Student ID</label>
            <input
              type="text"
              name="student_id"
              value={attendance.student_id}
              placeholder="Enter student_id"
              onChange={handleChange}
              required
            />
          </div>

          <div className="attendance-field">
            <label>Student Name</label>
            <input
              type="text"
              name="name"
              value={attendance.name}
              placeholder="Enter student name"
              onChange={handleChange}
              required
            />
          </div>

          <div className="attendance-field">
            <label>Total Classes</label>
            <input
              type="number"
              name="total_classes"
              value={attendance.total_classes}
              placeholder="Enter total classes"
              onChange={handleChange}
              required
            />
          </div>

          <div className="attendance-field">
            <label>Present Classes</label>
            <input
              type="number"
              name="present"
              value={attendance.present}
              placeholder="Enter present classes"
              onChange={handleChange}
              required
            />
          </div>

          <div className="attendance-field">
            <label>Absent Classes</label>
            <input
              type="number"
              name="absent"
              value={attendance.absent}
              placeholder="Enter absent classes"
              onChange={handleChange}
              required
            />
          </div>

          <div className="attendance-buttons">

            <button type="submit">
              Update Attendance
            </button>

            <button
              type="button"
              onClick={close}
            >
              Cancel
            </button>

          </div>

        </form>

      </div>
    </div>
  );
};

export default EditAttendance;