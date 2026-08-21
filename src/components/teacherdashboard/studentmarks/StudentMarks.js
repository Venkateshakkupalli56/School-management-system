import React, { useEffect, useState } from "react";
import AddMarks from "./AddMarks";
import EditMarks from "./EditMarks";
import DeleteMarks from "./DeleteMarks";
import "../../../styles/teacherdashboard/studentmarksstyles/StudentMarks.css";

const StudentMarks = () => {
  const [addmarks, setAddmarks] = useState(false);
  const [editmarks, setEditmarks] = useState(false);
  const [deletem, setDeletem] = useState(false);

  const [alldata, setAlldata] = useState([]);

  // Selected student details
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Search
  const [name, setName] = useState("");

  // =========================
  // GET ALL MARKS
  // =========================

  const getMarks = () => {
    const token = localStorage.getItem("token");

    fetch("http://127.0.0.1:8000/all_marks", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("API DATA:", data);

        setAlldata(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // =========================
  // PAGE LOAD
  // =========================

  useEffect(() => {
    getMarks();
  }, []);

  // =========================
  // SEARCH INPUT
  // =========================

  const change = (e) => {
    setName(e.target.value);
  };

  // =========================
  // SEARCH BY NAME
  // =========================

  const Name = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    fetch(`http://127.0.0.1:8000/marks/search?name=${name}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        alert("Name not found");
      })
      .then((data) => {
        if (data) {
          console.log("SEARCH DATA:", data);

          setAlldata(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="student-marks">
      {/* =========================
                SEARCH
            ========================= */}

      <div className="change">
        <form onSubmit={Name}>
          <input
            type="text"
            placeholder="Search by using student name"
            name="name"
            value={name}
            onChange={change}
          />

          <button type="submit">Search</button>
        </form>
      </div>

      {/* =========================
                ADD MARKS
            ========================= */}

      <div className="add-marks-container">
        <button onClick={() => setAddmarks(true)}>+ Add Marks</button>
      </div>

      {/* =========================
                MARKS TABLE
            ========================= */}

      <div className="table-data">
        <table>
          <thead>
            <tr>
              <th>SI.No</th>
              <th>Student ID</th>
              <th>Name</th>
              <th>Subject</th>
              <th>Marks Obtained</th>
              <th>Total</th>
              <th>Exam</th>
              <th>Grade</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {alldata.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>

                <td>{item.student_id}</td>

                <td>{item.name}</td>

                <td>{item.subject}</td>

                <td>{item.marks_obtained}</td>
                
                <td>{item.total}</td>

                <td>{item.exam}</td>

                <td>{item.grade}</td>

                <td>
                  {/* EDIT */}

                  <button
                    onClick={() => {
                      setSelectedStudent(item);

                      setEditmarks(true);
                    }}
                  >
                    Edit
                  </button>

                  {/* DELETE */}

                  <button
                    onClick={() => {
                      setSelectedStudent(item);

                      setDeletem(true);
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

      {/* =========================
                ADD MARKS MODAL
            ========================= */}

      {addmarks && (
        <AddMarks
          close={() => {
            setAddmarks(false);

            getMarks();
          }}
        />
      )}

      {/* =========================
                EDIT MARKS MODAL
            ========================= */}

      {editmarks && selectedStudent && (
        <EditMarks
          data={selectedStudent}
          close={() => {
            setEditmarks(false);

            setSelectedStudent(null);
          }}
          refresh={getMarks}
        />
      )}

      {/* =========================
                DELETE MARKS MODAL
            ========================= */}

      {deletem && selectedStudent && (
        <DeleteMarks
          id={selectedStudent.id}
          close={() => {
            setDeletem(false);

            setSelectedStudent(null);

            getMarks();
          }}
        />
      )}
    </div>
  );
};

export default StudentMarks;
