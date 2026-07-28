import React, { useState } from "react";
import "../../../styles/teacherdashboard/studentmarksstyles/EditMarks.css";

const EditMarks = ({ close, id }) => {
  // const [marksId, setMarksId] = useState("");
  const [edit, setEdit] = useState({
    student_id: "",
    name: "",
    subject: "",
    exam: "",
    marks_obtained: "",
    total_marks: "",
    grade: "",
  });

  const handlechange = (e) => {
    setEdit({
      ...edit,
      [e.target.name]: e.target.value,
    });
  };

  const updatemarks = async (e) => {
    e.preventDefault();

    console.log("ID:", id);
    console.log("Data:", edit);

    const response = await fetch(`http://127.0.0.1:8000/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(edit),
    });

    const data = await response.json();

    console.log("Response:", data);

    if (response.ok) {
      alert("Updated successfully");
      close();
    } else {
      alert("Marks cannot be updated");
      console.log(data);
    }
  };

  return (
    <div className="editmarks-container">
      <div className="editmarks">
        <h1>Edit Student Marks</h1>

        <form onSubmit={updatemarks}>
          <div className="form-group">
            <label>Student ID</label>
            <input
              type="number"
              name="student_id"
              placeholder="Enter student ID"
              value={edit.student_id}
              onChange={handlechange}
              required
            />
          </div>
          {/* <div className="form-group">
            <label>S.No / Marks ID</label>
            <input
              type="number"
              placeholder="Enter S.No"
              value={marksId}
              onChange={(e) => setMarksId(e.target.value)}
              required
            />
          </div> */}
          <div className="form-group">
            <label>Student Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter student name"
              value={edit.name}
              onChange={handlechange}
              required
            />
          </div>

          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Enter subject"
              value={edit.subject}
              onChange={handlechange}
              required
            />
          </div>

          <div className="form-group">
            <label>Exam</label>
            <input
              type="text"
              name="exam"
              placeholder="Enter exam"
              value={edit.exam}
              onChange={handlechange}
              required
            />
          </div>

          <div className="form-group">
            <label>Marks Obtained</label>
            <input
              type="number"
              name="marks_obtained"
              placeholder="Enter marks obtained"
              value={edit.marks_obtained}
              onChange={handlechange}
              required
            />
          </div>

          <div className="form-group">
            <label>Total Marks</label>
            <input
              type="number"
              name="total_marks"
              placeholder="Enter total marks"
              value={edit.total_marks}
              onChange={handlechange}
              required
            />
          </div>

          <div className="form-group">
            <label>Grade</label>
            <input
              type="text"
              name="grade"
              placeholder="Enter grade"
              value={edit.grade}
              onChange={handlechange}
              required
            />
          </div>

          <div className="button-group">
            <button type="submit" className="edit-btn">
              Update
            </button>

            <button type="button" className="cancel-btn" onClick={close}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMarks;
