import React from "react";
import "../../../styles/teacherdashboard/studentattendancestyles/DeleteAttendance.css";

const DeleteAttendance = ({ id, close }) => {

  const deleteAttendance = async () => {
      const response = await fetch(
        `http://127.0.0.1:8000/attendance/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      console.log(data);

      if (response.ok) {
        alert("Attendance deleted successfully");
        close();
      } else {
        alert("Attendance cannot be deleted");
      }
  };

  return (
    <div className="delete-attendance-container">

      <div className="delete-attendance">

        <h2>Delete Attendance</h2>

        <p>
          Are you sure you want to delete this attendance record?
        </p>

        <div className="delete-attendance-buttons">

          <button
            className="delete-btn"
            onClick={deleteAttendance}
          >
            Delete
          </button>

          <button
            className="cancel-btn"
            onClick={close}
          >
            Cancel
          </button>

        </div>

      </div>

    </div>
  );
};

export default DeleteAttendance;