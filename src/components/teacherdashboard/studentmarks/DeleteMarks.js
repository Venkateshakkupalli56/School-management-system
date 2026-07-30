import React from "react";
import "../../../styles/teacherdashboard/studentmarksstyles/DeleteMarks.css";

const DeleteMarks = ({ id, close }) => {
  const handleDelete = async () => {
    const response = await fetch(`http://127.0.0.1:8000/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      alert("Deleted successfully");
      close();
    } else {
      alert("Data cannot be deleted");
    }
  };

  return (
    <div className="delete-marks">
      <h1>Delete Marks</h1>

      <p>Are you sure you want to delete marks?</p>

      <div className="delete-btn">
        <button onClick={handleDelete}>Delete</button>

        <button onClick={close}>Cancel</button>
      </div>
    </div>
  );
};

export default DeleteMarks;
