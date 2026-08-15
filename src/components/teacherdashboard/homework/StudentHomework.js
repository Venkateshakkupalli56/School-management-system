import React, { useEffect, useState } from "react";
import AddHomework from "./AddHomework";
import EditHomework from "./EditHomework";
import DeleteHomework from "./DeleteHomework";
import "../../../styles/teacherdashboard/studenthomework/StudentHomework.css";

const StudentHomework = () => {
  const [addhomework, setAddhomework] = useState(false);
  const [edithomework, setEdithomework] = useState(false);
  const [deleteh, setDeleteh] = useState(false);
  const [alldata, setAlldata] = useState([]);
  const [selectedHomework, setSelectedHomework] = useState(null);
  const [class_name, setClass_name] = useState("");
  const getHomework = () => {
    const token = localStorage.getItem("token");
    fetch("http://127.0.0.1:8000/all_homework", {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${token}`,
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
    getHomework();
  }, []);
  const change = (e) => {
    setClass_name(e.target.value);
  };
  const ClassName = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    fetch(
      `http://127.0.0.1:8000/get_homework_byclass_name?class_name=${class_name}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        alert("Class name not found");
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
    <div className="student-homework">
      <div className="homework-top">
        <div className="homework-search">
          <form onSubmit={ClassName}>
            <input
              type="text"
              placeholder="Search by using class name"
              name="class_name"
              value={class_name}
              onChange={change}
            />
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="homework-add-container">
          <button
            className="homework-add-button"
            onClick={() => setAddhomework(true)}
          >
            + Add Homework
          </button>
        </div>
      </div>
      <div className="homework-table-container">
        <table className="homework-table">
          <thead>
            <tr>
              <th>SI.No</th>
              <th>Date</th>
              <th>Class Name</th>
              <th>Subject</th>
              <th>Homework</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {alldata.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.date}</td>
                <td>{item.class_name}</td>
                <td>{item.subject}</td>
                <td>{item.homework}</td>
                <td className="homework-actions">
                  <button
                    className="homework-edit-button"
                    onClick={() => {
                      setSelectedHomework(item);
                      setEdithomework(true);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="homework-delete-button"
                    onClick={() => {
                      setSelectedHomework(item);
                      setDeleteh(true);
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
      {addhomework && (
        <AddHomework
          close={() => {
            setAddhomework(false);
            getHomework();
          }}
        />
      )}

      {edithomework && selectedHomework && (
        <EditHomework
          id={selectedHomework.id}
          homework={selectedHomework}
          close={() => {
            setEdithomework(false);

            setSelectedHomework(null);
          }}
          refresh={getHomework}
        />
      )}
      {deleteh && selectedHomework && (
        <DeleteHomework
          id={selectedHomework.id}
          close={() => {
            setDeleteh(false);
            setSelectedHomework(null);
            getHomework();
          }}
        />
      )}
    </div>
  );
};

export default StudentHomework;
