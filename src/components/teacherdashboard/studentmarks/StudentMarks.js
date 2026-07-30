import React, { useEffect, useState } from "react";
import AddMarks from "./AddMarks";
import EditMarks from "./EditMarks";
import DeleteMarks from "./DeleteMarks";

import "../../../styles/teacherdashboard/studentmarksstyles/StudentMarks.css";

const StudentMarks = () => {
  const [showAddMarks, setShowAddMarks] = useState(false);
  const [showEditMarks, setShowEditMarks] = useState(false);
  const [deletemarks, setDeletemarks] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [get, setGet] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/all")
      .then((response) => response.json())
      .then((data) => {
        setGet(data);
      });
  }, []);

  return (
    <div className="studentmarks">
      {/* Add Marks Button */}
      {!showAddMarks && !showEditMarks && !deletemarks && (
        <div className="marks-header">
          <h1>Student Marks</h1>

          <button onClick={() => setShowAddMarks(true)}>+ Add Marks</button>
        </div>
      )}

      {/* Add Marks Component */}
      {showAddMarks && <AddMarks close={() => setShowAddMarks(false)} />}

      {/* Edit Marks Component */}
      {showEditMarks && (
        <EditMarks id={selectedId} close={() => setShowEditMarks(false)} />
      )}
      {deletemarks && (
        <DeleteMarks id={selectedId} close={() => setDeletemarks(false)} />
      )}

      {/* Student Marks Table */}
      {!showAddMarks && !showEditMarks && !deletemarks && (
        <div className="marks-table">
          <h2>Student Marks List</h2>

          <table>
            <thead>
              <tr>
                <th>SI.NO</th>
                <th>Student ID</th>
                <th>Student Name</th>
                <th>Subject Name</th>
                <th>Exam</th>
                <th>Student Marks</th>
                <th>Total Marks</th>
                <th>Grade</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {get.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>

                  <td>{item.student_id}</td>

                  <td>{item.name}</td>

                  <td>{item.subject}</td>

                  <td>{item.exam}</td>

                  <td>{item.marks_obtained}</td>

                  <td>{item.total_marks}</td>

                  <td>{item.grade}</td>

                  <td>
                    <button
                      onClick={() => {
                        setSelectedId(item.id);
                        setShowEditMarks(true);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        setSelectedId(item.id);
                        setDeletemarks(true);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StudentMarks;
