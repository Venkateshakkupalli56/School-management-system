import React, { useEffect, useState } from "react";
import AddAttendance from "../../../components/teacherdashboard/studentattendance/AddAttendance";
import EditAttendance from "./EditAttendance";
import DeleteAttendance from "./DeleteAttendance";
import "../../../styles/teacherdashboard/studentattendancestyles/StudentAttendance.css";

const StudentAttendance = () => {
  const [attendance, setAttendance] = useState([]);
  const [addattendance, setAddattendance] = useState(false);
  const [editattendance, setEditattendance] = useState(false);
  const [deleteattendance, setDeleteattendance] = useState(false);
  const [id, setId] = useState("");

  const getAttendance = async () => {
    const response = await fetch(
      "http://127.0.0.1:8000/attendance/all_students",
    );

    const data = await response.json();

    console.log("Attendance:", data);

    if (response.ok) {
      setAttendance(data);
    } else {
      console.log("Failed to get attendance");
    }
  };
  useEffect(() => {
    getAttendance();
  }, []);
  const click = () => {
    setAddattendance(true);
  };
  const editClick = () => {
    setId();
    setEditattendance(true);
  };

  const deleteClick = () => {
    setDeleteattendance(true);
  };

  return (
    <div className="student-attendance-container">
      <h1>Student Attendance</h1>
      <div className="attendance-add-button">
        <button onClick={click}>Add Attendance</button>
      </div>
      <div className="attendance-table-container">
        <table className="attendance-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Student ID</th>
              <th>Name</th>
              <th>Total Classes</th>
              <th>Present</th>
              <th>Absent</th>
              <th>Percentage</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {attendance.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>

                <td>{student.student_id}</td>

                <td>{student.name}</td>

                <td>{student.total_classes}</td>

                <td>{student.present}</td>

                <td>{student.absent}</td>

                <td>{student.percentage}%</td>

                <td className="attendance-actions">
                  <button
                    className="edit-attendance-btn"
                    onClick={() => editClick(student.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-attendance-btn"
                    onClick={() => deleteClick(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {addattendance && (
        <AddAttendance
          close={() => {
            setAddattendance(false);
            getAttendance();
          }}
        />
      )}
      {editattendance && (
        <EditAttendance
          id={id}
          close={() => {
            setEditattendance(false);
            getAttendance();
          }}
        />
      )}
      {deleteattendance && (
        <DeleteAttendance
          id={id}
          close={() => {
            setDeleteattendance(false);
            getAttendance();
          }}
        />
      )}
    </div>
  );
};

export default StudentAttendance;
