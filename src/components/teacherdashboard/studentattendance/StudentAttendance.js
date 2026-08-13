import React, { useEffect, useState } from "react";
import AddAttendance from "./AddAttendance";
import EditAttendance from "./EditAttendance";
import DeleteAttendance from "./DeleteAttendance";
import "../../../styles/teacherdashboard/studentattendancestyles/StudentAttendance.css";

const StudentAttendance = () => {
  const [addattendance, setAddattendance] = useState(false);
  const [editattendance, setEditattendance] = useState(false);
  const [deletea, setDeletea] = useState(false);

  const [alldata, setAlldata] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [name, setName] = useState("");

  const getAttendance = () => {
    const token = localStorage.getItem("token");

    fetch("http://127.0.0.1:8000/attendance/all_attendance", {
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

  useEffect(() => {
    getAttendance();
  }, []);

  const change = (e) => {
    setName(e.target.value);
  };

  const Name = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    fetch(
      `http://127.0.0.1:8000/attendance/get_attendance_by_name?name=${name}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
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
    <div className="student-attendance">

      <div className="attendance-top">

        <div className="attendance-search">
          <form onSubmit={Name}>
            <input
              type="text"
              placeholder="Search by using student name"
              name="name"
              value={name}
              onChange={change}
            />

            <button type="submit">
              Search
            </button>
          </form>
        </div>

        <div className="attendance-add-container">
          <button
            className="attendance-add-button"
            onClick={() => setAddattendance(true)}
          >
            + Add Attendance
          </button>
        </div>

      </div>

      <div className="attendance-table-container">

        <table className="attendance-table">

          <thead>
            <tr>
              <th>SI.No</th>
              <th>Student ID</th>
              <th>Name</th>
              <th>Total Classes</th>
              <th>Present</th>
              <th>Absent</th>
              <th>Percentage</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {alldata.map((item) => (
              <tr key={item.id}>

                <td>{item.id}</td>

                <td>{item.student_id}</td>

                <td>{item.name}</td>

                <td>{item.total_classes}</td>

                <td>{item.present}</td>

                <td>{item.absent}</td>

                <td>{item.percentage}</td>

                <td className="attendance-actions">

                  <button
                    className="attendance-edit-button"
                    onClick={() => {
                      setSelectedStudent(item);
                      setEditattendance(true);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    className="attendance-delete-button"
                    onClick={() => {
                      setSelectedStudent(item);
                      setDeletea(true);
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

      {addattendance && (
        <AddAttendance
          close={() => {
            setAddattendance(false);
            getAttendance();
          }}
        />
      )}

      {editattendance && selectedStudent && (
        <EditAttendance
          data={selectedStudent}
          close={() => {
            setEditattendance(false);
            setSelectedStudent(null);
          }}
          refresh={getAttendance}
        />
      )}

      {deletea && selectedStudent && (
        <DeleteAttendance
          id={selectedStudent.id}
          close={() => {
            setDeletea(false);
            setSelectedStudent(null);
            getAttendance();
          }}
        />
      )}

    </div>
  );
};

export default StudentAttendance;